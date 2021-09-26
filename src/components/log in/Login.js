import React, { useContext, useState } from "react";
import "./login.css";
import axios from "axios";
import swal from "sweetalert";
import AuthContext from "../../Context";
import { useHistory } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLogin } = useContext(AuthContext);
  const history = useHistory();

  function login(e) {
    e.preventDefault();
    try {
      swal("Loading", "Please wait a moment.", "info", {
        button: false,
      });

      const userData = { email, password };

      axios.post("http://localhost:4000/users/login", userData).then((res) => {
        if (res.status === 200) {
          swal("Welcome back!", "Enjoy your visit", "success");
          getLogin().then(() => history.push("/dashboard"));
        } else {
          swal("Error", res.data, "error");
        }
      });
    } catch (err) {
      swal(err);
    }
  }

  return (
    <div className="login">
      <div className="card login-box">
        <div className="card-body">
          <form
            className="d-flex flex-column justify-content-between h-100 py-3"
            onSubmit={login}
          >
            <h4 className="text-center">Log in</h4>
            <input
              className="form-control"
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <button type="submit" className="btn btn-dark">
              Log in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
