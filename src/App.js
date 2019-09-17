import React from "react";

import NewComment from "./components/NewComment";
import Comments from "./components/Comments";
import CreateUser from "./components/CreateUser";
import UserInfo from "./components/UserInfo";
import SignInUser from "./components/SignInUser";

import { AuthProvider } from "./config/auth";

function App() {
  return (
    <AuthProvider>
      <div>
        <NewComment />
        <Comments />
        <CreateUser />
        <SignInUser />
        <UserInfo />
      </div>
    </AuthProvider>
  );
}

export default App;
