import React, { useState, useContext } from "react";
import { useDatabase } from "../../config/database";
import { AuthContext } from "../../config/auth";

import SignInUser from "../SignInUser";
import CreateUser from "../CreateUser";
import UserInfo from "../UserInfo";

import { Container, Tittle, Content } from "./styles";

const Header = () => {
  const [loginForm, setLoginForm] = useState(false);
  const [createUserForm, setCreateUserForm] = useState(false);

  const auth = useContext(AuthContext);

  const data = useDatabase("comments");
  const quantityComments = Object.keys(data).length;

  return (
    <Container>
      <Tittle>
        <span className="tooltip">{quantityComments}</span>
        <h2>Comentários</h2>
      </Tittle>
      <Content>
        {!loginForm && !createUserForm && auth.user === null && (
          <>
            <button type="button" onClick={() => setLoginForm(!loginForm)}>
              Login
            </button>
            <button
              type="button"
              onClick={() => setCreateUserForm(!createUserForm)}
            >
              Criar conta
            </button>
          </>
        )}

        {loginForm && auth.user === null && (
          <>
            <button type="button" onClick={() => setLoginForm(!loginForm)}>
              x
            </button>
            <SignInUser />
          </>
        )}

        {createUserForm && auth.user === null && (
          <>
            <button
              type="button"
              onClick={() => setCreateUserForm(!createUserForm)}
            >
              x
            </button>
            <CreateUser />
          </>
        )}
        {auth.user !== null && <UserInfo />}
      </Content>
    </Container>
  );
};

export default Header;
