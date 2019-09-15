import React, { useState, useContext } from "react";
import { AuthContext } from "./auth";

const FormDisplayName = ({ displayName, user }) => {
  const [newDisplayName, setNewDisplayName] = useState(displayName);

  const onChange = evt => {
    setNewDisplayName(evt.target.value);
  };

  const save = () => {
    if (newDisplayName !== "") {
      user.updateProfile({ displayName: newDisplayName });
    }
  };

  return (
    <div>
      <input type="text" value={newDisplayName} onChange={onChange} />
      <button onClick={save}>Save D. Name</button>
    </div>
  );
};

const UserInfo = () => {
  const auth = useContext(AuthContext);

  if (auth.user === null) {
    return null;
  }

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
