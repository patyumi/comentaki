import React from "react";

// Componentes
import Header from "./components/Header";
import NewComment from "./components/NewComment";
import Comments from "./components/Comments";

// Estilos CSS
import GlobalStyle from "./styles/global";
import { Container } from "./styles/styles";

// ContextAPI - passa dados de autenticação
import { AuthProvider } from "./config/auth";

function App() {
  return (
    <AuthProvider>
      <Container>
        <Header />
        <NewComment />
        <Comments />

        <GlobalStyle />
      </Container>
    </AuthProvider>
  );
}

export default App;
