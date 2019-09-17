import React from "react";
import Time from "./Time";

// COMPONENTE FILHO DE Comments _____________________
// Exibe os comentários que estão no BD
const Comment = ({ comment }) => {
  // Retorno de elementos (retorna os elementos do map)
  return (
    <div>
      {comment.content} por {comment.user.name} em{" "}
      <Time timestamp={comment.createdAt} />
    </div>
  );
};
// __________________________________________________

export default Comment;
