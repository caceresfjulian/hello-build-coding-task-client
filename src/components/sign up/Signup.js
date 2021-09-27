import React, {useState} from "react";
import "./signup.css";
import axios from "axios";
import swal from "sweetalert";

export default function Signup() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  function login(e){
    e.preventDefault();
    try {
      const userData = {
        email, 
        password, 
        passwordVerify
      }

      axios.post("https://hello-build-coding-task-server.herokuapp.com/users/signup", userData).then((res) => {
        if (res.status === 200){
          swal("Registered!", "Now, let's login", "success");
        } else {
          swal("Error", res.data, "error");
        }
      })

    } catch(err){
      swal(err);
    }
  }

  return (
    <div className="register">
      <div className="card register-box">
        <div className="card-body">
          <form className="d-flex flex-column justify-content-between h-100 py-3" onSubmit={login}>
            <h4 className="text-center">Sign up</h4>
            <input className="form-control" type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}></input>
            <input
              className="form-control"
              type="password"
              placeholder="Password"
              onChange={(e)=>setPassword(e.target.value)}
            ></input>
            <input
              className="form-control"
              type="password"
              placeholder="Enter your password again"
              onChange={(e)=>setPasswordVerify(e.target.value)}
            ></input>
            <button type="submit" className="btn btn-dark">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
}
