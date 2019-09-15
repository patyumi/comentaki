import React, { useContext } from "react";
import Time from "./Time";

import { AuthContext } from "./auth";

// COMPONENTE FILHO DE Comments _____________________
// Exibe os comentários que estão no BD
const Comment = ({ comment }) => {
  const auth = useContext(AuthContext);
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
