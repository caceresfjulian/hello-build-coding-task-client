import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);
  const [ghLoggedIn, setGhLoggedIn] = useState(undefined);
  const [validEmail, setValidEmail] = useState("");
  const [ghUser, setGhUser] = useState(undefined);
  const [ghRepos, setGhRepos] = useState(undefined);
  const [code, setCode] = useState(undefined);


  async function getLogin() {
    await axios.get("http://localhost:4000/users/loggedin").then((res) => {
      setLoggedIn(res.data.value);
      setValidEmail(res.data.email);
    });
  }

  async function getGitHubLogin() {
    await axios.get("http://localhost:4000/users/gh-signedin").then((res) => {
      setGhLoggedIn(res.data.value);
      setGhUser(res.data.payload.ghData);
      setCode(res.data.payload.accessToken);
    });
  }

  async function getGitHubRepos(){
    await axios.get(`http://localhost:4000/github/repos?code=${code}`).then((res)=>{
      setGhRepos(res.data);
    }).catch((err)=>{
      console.log(err)
    })
    
  }

  useEffect(() => {
    getLogin();
    getGitHubLogin();
  }, []);

  if (typeof code === "string"){
    getGitHubRepos();
  }

  return (
    <AuthContext.Provider
      value={{
        loggedIn,
        getLogin,
        validEmail,
        ghLoggedIn,
        ghUser,
        setGhUser,
        ghRepos
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
