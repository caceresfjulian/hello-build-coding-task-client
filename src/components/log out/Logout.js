import React, { useContext } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import AuthContext from "../../Context";

export default function Logout() {

  const {getLogin} = useContext(AuthContext);

  const history = useHistory();

  async function logout () {
    await axios.get('http://localhost:4000/users/logout');
    await getLogin();
    history.push('/');
  }

  return <span onClick={logout} className="nav-link nav-logout">Log Out</span>;
}
