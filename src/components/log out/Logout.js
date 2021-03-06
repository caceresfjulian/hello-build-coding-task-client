import React, { useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import AuthContext from "../../Context";

export default function Logout() {

  const {getLogin, setGhUser, setGhRepos, setCode} = useContext(AuthContext);

  const history = useHistory();

  async function logout () {
    await axios.get('https://hello-build-coding-task-server.herokuapp.com/users/logout');
    await getLogin();
    setGhUser(undefined);
    setGhRepos(undefined);
    setCode(undefined);
    history.push('/');
  }

  return <span onClick={logout} className="nav-link nav-logout">Log Out</span>;
}
