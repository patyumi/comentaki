import React, { useState, useEffect } from "react";
import firebase from "./firebase";

export const AuthContext = React.createContext();

const useGetUser = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(currentUser => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
  }, []); //useEffect
  return user;
}; //useIsAuth

const useCreateUser = () => {
  const [state, setState] = useState({
    error: "",
    success: ""
  });

  const createUser = (email, passwd) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, passwd)
      .then(user => {
        if (user) {
          setState({
            ...state,
            success: "Ok"
          });
        }
      }) //then
      .catch(err => {
        setState({
          ...state,
          error: err.message
        });
      }); //catch
  }; //createUser

  return [state, createUser];
}; //useCreateUser

const useSignInUser = () => {
  const [state, setState] = useState({
    error: "",
    success: ""
  });

  const signInUser = (email, passwd) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, passwd)
      .catch(err => {
        setState({
          ...state,
          error: err.message
        });
      }); //catch
  }; //createUser

  return [state, signInUser];
}; //useCreateUser

const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("Signout, volte sempre!");
    });
};

export const AuthProvider = ({ children }) => {
  const user = useGetUser();
  const [createUserState, createUser] = useCreateUser();
  const [signInUserState, signInUser] = useSignInUser();

  return (
    <AuthContext.Provider
      value={{
        user,
        createUser: {
          createUserState,
          createUser
        },
        signInUser: {
          signInUser,
          signInUserState
        },
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
