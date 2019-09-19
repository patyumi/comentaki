import React, { useContext, useState } from "react";
import { AuthContext } from "../../config/auth";

import { Form } from "../SignInUser/styles";

// COMPONENTE
// Cria um novo usuário
const CreateUser = () => {
  const auth = useContext(AuthContext);

  // Controle do formulário
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

  // Usuário não logado
  return (
    <Form>
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
        placeholder="Senha"
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
    </Form>
  );
};

export default CreateUser;
