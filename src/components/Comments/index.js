import React from "react";

import { useDatabase } from "../../config/database";

import Comment from "./Comment";

// COMPONENTE DE EXIBIÇÃO ___________________________
// Exibe os comentários que estão no BD
const Comments = () => {
  // Chama a função que retorna dados em tempo real, "comments" é uma tabela da base
  const data = useDatabase("comments");

  // Caso nada seja retornado
  if (!data) {
    return <p>Nenhum comentário para ser exibido!</p>;
  }

  // Recupera as keys do objeto
  const ids = Object.keys(data);

  // Caso não tenha dados no BD, ele renderiza uma mensagem
  if (ids.length === 0) {
    return <p>Carregando ...</p>;
  }
  // Retorno de elementos (nesse caso retorna outro componente)
  return ids.map(id => {
    return <Comment key={id} comment={data[id]} />;
  });
};
// __________________________________________________

export default Comments;
