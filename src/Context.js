import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [validEmail, setValidEmail] = useState("");

  async function getLogin() {
    await axios.get("http://localhost:4000/users/loggedin").then((res) => {
      setLoggedIn(res.data.value);
      setValidEmail(res.data.email);
    });
  }

  useEffect(() => {
    getLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        getLogin,
        validEmail
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
