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
    return (
      <input
        type="text"
        placeholder="Faça login para juntar-se à discussão! :=]"
        disabled
      />
    );
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
      <h4>Junte-se à discussão</h4>
      <input
        type="text"
        placeholder="Digite seu texto aqui..."
        value={comment}
        onChange={evt => setComment(evt.target.value)}
      />
      <button onClick={createComment}>Comentar</button>
    </div>
  );
};
// __________________________________________________

export default NewComment;
