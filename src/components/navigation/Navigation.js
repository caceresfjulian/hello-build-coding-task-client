import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css";

export default function Navigation() {
  return (
    <div className="navbar navbar-expand-lg navbar-dark bg-dark d-flex justify-content-between">
      <div className="container">
        <div className="navigation-icon-holder">
          <div className="mr-4"><i className="fa fa-rocket navigation-icon" aria-hidden="true"></i></div>
          <span className="navbar-brand fw-bold">Code Task</span>
          {/* <img src={buildLogo} alt="Build Logo" /> */}
        </div>
        <div>
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
        </div>
      </div>
    </div>
  );
}
