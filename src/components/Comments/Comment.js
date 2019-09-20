import React from "react";
import Time from "./Time";

import { Container, Header } from "./styles";

import { MdAccessTime } from "react-icons/md";

// COMPONENTE FILHO DE Comments _____________________
// Exibe os comentários que estão no BD
const Comment = ({ comment }) => {
  // Retorno de elementos (retorna os elementos do map)
  return (
    <Container color={comment.color}>
      <Header>
        <h4>{comment.user.name}</h4>
        <span>
          <MdAccessTime /> <Time timestamp={comment.createdAt} />
        </span>
      </Header>
      <p>{comment.content}</p>
    </Container>
  );
};
// __________________________________________________

export default Comment;
