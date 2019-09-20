import { useState, useEffect } from "react";
import firebase from "../firebase";
// Esse arquivo contém funções para manipular o BD

// FIREBASE FUNC ____________________________________
// Salva dados no BD
export const useDatabasePush = endpoint => {
  const [status, setStatus] = useState("");

  const save = data => {
    const ref = firebase.database().ref(endpoint);

    // Salva dados enviados por parâmetro (func .push)
    ref.push(data, err => {
      // Se o calback retornar erro
      if (err) {
        setStatus("ERROR");
      } else {
        setStatus("SUCCESS");
      }
    });
  };

  // A função retorna o valor do status e a função save
  return [status, save];
};
// __________________________________________________

// FIREBASE FUNC ____________________________________
// Atualiza os dados em tempo real de acordo com o BD
export const useDatabase = endpoint => {
  const [data, setData] = useState({});

  // Quando uma tabela mudar no BD atualiza a página
  useEffect(() => {
    const ref = firebase.database().ref(endpoint);

    // Recupera os valores em "value" em tempo real (func .on)
    ref.on("value", snapshop => {
      //console.log(snapshop.val());
      setData(snapshop.val());
    });

    // Evita que a função fique atualizando toda hora (func .off)
    return () => {
      ref.off();
    };
  }, [endpoint]);
  return data;
};
// __________________________________________________
