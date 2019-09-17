import React, { useState, useContext } from "react";
import { AuthContext } from "../config/auth";

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
    <div>
      <input type="text" value={newDisplayName} onChange={onChange} />
      <button onClick={save}>Save D. Name</button>
    </div>
  );
};

// COMPONENTE
const UserInfo = () => {
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
      <p>Olá {dn}</p>
      <FormDisplayName displayName={dn} user={auth.user} />
      <button onClick={auth.signOut}>Sair</button>
    </>
  );
};

export default UserInfo;
