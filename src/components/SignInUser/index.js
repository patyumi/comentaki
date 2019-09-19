import React, { useContext, useState } from "react";
import { AuthContext } from "../../config/auth";

import { Container, Form } from "./styles";

//COMPONENTE
// Faz o login do usuário
const SignInUser = () => {
  const auth = useContext(AuthContext);

  // Controle de formulário
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
    <Container>
      {auth.signInUser.signInUserState.error !== "" && (
        <p>{auth.signInUser.signInUserState.error}</p>
      )}
      <Form>
        <input
          id="email"
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
          type="button"
          onClick={() => {
            auth.signInUser.signInUser(form.email, form.passwd);
          }}
        >
          Login
        </button>
      </Form>
    </Container>
  );
};

export default SignInUser;
