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
    await axios.get("https://hello-build-coding-task-server.herokuapp.com/users/loggedin").then((res) => {
      setLoggedIn(res.data.value);
      setValidEmail(res.data.email);
    });
  }

  async function getGitHubLogin() {
    await axios.get("https://hello-build-coding-task-server.herokuapp.com/users/gh-signedin").then((res) => {
      try {  
        setGhLoggedIn(res.data.value);      
        res.data.value ? setGhUser(res.data.payload.ghData) : void(0);
        res.data.payload ? setCode(res.data.payload.accessToken) : void(0);
      } catch (err) {
        console.log(err);
      }
    });
  }

  async function getGitHubRepos() {
    await axios
      .get(`https://hello-build-coding-task-server.herokuapp.com/github/repos?code=${code}`)
      .then((res) => {
        setGhRepos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getLogin();
    getGitHubLogin()
  }, []);

  if (ghRepos === undefined && typeof code === "string") {
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
        ghRepos,
        setGhRepos, 
        setCode
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
