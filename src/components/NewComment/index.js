import React, { useState, useContext } from "react";
import { useDatabasePush } from "../../config/database";
import firebase from "../../firebase";
import { AuthContext } from "../../config/auth";

import { Container, Content, TextContainer, ButtonsContainer } from "./styles";

// COMPONENTE DE EXIBIÇÃO ___________________________
// Exibe os comentários que estão no BD
const NewComment = () => {
  const [, save] = useDatabasePush("comments");
  const [comment, setComment] = useState("");
  const auth = useContext(AuthContext);

  // Usuário não autenticado
  if (auth.user === null) {
    return (
      <Container>
        <input
          type="text"
          placeholder="Faça login para juntar-se à discussão! :=]"
          disabled
        />
      </Container>
    );
  }

  // Recupera o nickName do usuário
  const { displayName } = auth.user;
  const [alternativeDisplayName] = auth.user.email.split("@");

  // Func - salva comentário digitado pelo usuário
  const createComment = () => {
    const colors = ["#D4FF26", "#F08C05", "#FF0C71", "#1D1AEB", "#17FFC4"];
    if (comment !== "") {
      save({
        content: comment,
        color: colors[parseInt(Math.random() * 5)],
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
    <Container>
      <h4>Junte-se à discussão</h4>
      <Content>
        <TextContainer>
          <textarea
            placeholder="Digite seu texto aqui..."
            value={comment}
            onChange={evt => setComment(evt.target.value)}
          />
        </TextContainer>
        <ButtonsContainer>
          <button type="button" onClick={createComment}>
            Comentar
          </button>
          <button type="button" onClick={() => setComment("")}>
            Limpar
          </button>
        </ButtonsContainer>
      </Content>
    </Container>
  );
};
// __________________________________________________

export default NewComment;
