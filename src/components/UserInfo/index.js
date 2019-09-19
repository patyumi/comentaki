import React, { useState, useContext } from "react";
import { AuthContext } from "../../config/auth";

import { Form } from "../SignInUser/styles";

// COMPONENTE
const FormDisplayName = ({ displayName, user }) => {
  const [newDisplayName, setNewDisplayName] = useState(displayName);

  // Controle de formulário
  const onChange = evt => {
    setNewDisplayName(evt.target.value);
  };

  // Salva novo nickName
  const save = () => {
    if (newDisplayName !== "") {
      user.updateProfile({ displayName: newDisplayName });
    }
  };

  // Elementos - formulário para mudar o nickName
  return (
    <Form>
      <input type="text" value={newDisplayName} onChange={onChange} />
      <button onClick={save}>Salvar</button>
    </Form>
  );
};

// COMPONENTE
const UserInfo = () => {
  const [editNick, setEditNick] = useState(false);
  const auth = useContext(AuthContext);

  // Usuário não autenticado
  if (auth.user === null) {
    return null;
  }

  // Recupera dados do usuário
  const { displayName } = auth.user;
  const [alternativeDisplayName] = auth.user.email.split("@");
  const dn = displayName || alternativeDisplayName;

  return (
    <>
      {!editNick && (
        <>
          <h3>Olá, {dn}!</h3>
          <button onClick={() => setEditNick(!editNick)}>
            Editar NickName
          </button>
          <button onClick={auth.signOut}>Sair</button>
        </>
      )}
      {editNick && (
        <>
          <FormDisplayName displayName={dn} user={auth.user} />
          <button onClick={() => setEditNick(!editNick)}>Cancelar</button>
        </>
      )}
    </>
  );
};

export default UserInfo;
