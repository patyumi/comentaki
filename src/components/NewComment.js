import React, { useState, useContext } from "react";
import { useDatabasePush } from "../config/database";
import firebase from "../firebase";
import { AuthContext } from "../config/auth";

// COMPONENTE DE EXIBIÇÃO ___________________________
// Exibe os comentários que estão no BD
const NewComment = () => {
  const [, save] = useDatabasePush("comments");
  const [comment, setComment] = useState("");
  const auth = useContext(AuthContext);

  // Usuário não autenticado
  if (auth.user === null) {
    return null;
  }

  // Recupera o nickName do usuário
  const { displayName } = auth.user;
  const [alternativeDisplayName] = auth.user.email.split("@");

  // Func - salva comentário digitado pelo usuário
  const createComment = () => {
    if (comment !== "") {
      save({
        content: comment,
        createdAt: firebase.database.ServerValue.TIMESTAMP,
        user: {
          id: auth.user.uid,
          name: displayName || alternativeDisplayName
        }
      });
      setComment("");
    }
  };

  // Usuário autenticado - retorna campo para inserir comentário
  return (
    <div>
      <textarea
        value={comment}
        onChange={evt => setComment(evt.target.value)}
      />
      <button onClick={createComment}>Comentar</button>
    </div>
  );
};
// __________________________________________________

export default NewComment;
