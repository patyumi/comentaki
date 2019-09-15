import React, { useContext, useState } from "react";
import { AuthContext } from "./auth";

const CreateUser = () => {
  const auth = useContext(AuthContext);

  const [form, setForm] = useState({ email: "", passwd: "" });
  const onChange = campo => evt => {
    setForm({
      ...form,
      [campo]: evt.target.value
    });
  };

  // Usuário logado
  if (auth.user !== null) {
    return null;
  }

  return (
    <>
      <h3>Criar nova conta:</h3>
      {auth.createUser.createUserState.error !== "" && (
        <p>{auth.createUser.createUserState.error}</p>
      )}
      <input
        type="text"
        placeholder="E-mail"
        value={form.email}
        onChange={onChange("email")}
      />
      <input
        type="password"
        value={form.passwd}
        onChange={onChange("passwd")}
      />
      <button
        onClick={() => {
          auth.createUser.createUser(form.email, form.passwd);
        }}
      >
        Criar Conta
      </button>
    </>
  );
};

export default CreateUser;
