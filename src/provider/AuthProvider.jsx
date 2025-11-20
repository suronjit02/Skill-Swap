import React, { createContext } from "react";
import app from "../firebase/firebase.init";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  return <AuthContext value={authData}> {children} </AuthContext>;
};

export default AuthProvider;
