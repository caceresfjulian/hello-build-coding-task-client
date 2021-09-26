import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "./navigation.css";
import AuthContext from "../../Context";
import Logout from "../log out/Logout";

export default function Navigation() {
  
  const { loggedIn } = useContext(AuthContext);

  return (
    <div className="navbar navbar-expand-lg navbar-dark d-flex justify-content-between py-3">
      <div className="container">
        <div className="navigation-icon-holder">
          <div className="mr-4"><i className="fa fa-rocket navigation-icon" aria-hidden="true"></i></div>
          <span className="navbar-brand fw-bold">Coding Task</span>
          {/* <img src={buildLogo} alt="Build Logo" /> */}
        </div>
        <div>
        { loggedIn === false && (<>
          <ul className="navbar-nav">
            <Link to="/home">
              <li className="nav-item">
                <span className="nav-link">Home</span>
              </li>
            </Link>
            <Link to="/login">
              <li className="nav-item">
                <span className="nav-link">Log In</span>
              </li>
            </Link>
            <Link to="/signup">
              <li className="nav-item">
                <span className="nav-link">Sign Up</span>
              </li>
            </Link>
          </ul>
        </>)}
        {loggedIn === true &&(<>
          <ul className="navbar-nav">
              <li className="nav-item">
                <Logout/>
              </li>
          </ul>
        </>)}
        </div>
      </div>
    </div>
  );
}
