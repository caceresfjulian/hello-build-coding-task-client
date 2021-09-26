import buildLogo from "./build-logo.png";

import "./home.css";
import { Link } from "react-router-dom";
import React from "react";

export default function Home() {
  return (
    <div className="container">
      <div className="home__header">
        <h1 className="fw-light">Coding Task</h1>
        <h4 className="fw-light">for</h4>
        <img src={buildLogo} alt="build-logo" />
      </div>
      <div className="home__section">
        <h3 className="text-center fw-lighter fst-italic pb-5">
          Are your registered?
        </h3>
        <div className="d-flex justify-content-between">
          <Link to="/signup" className="btn btn-light fw-bold">
            <i
              className="fa fa-address-book home__button-icon"
              aria-hidden="true"
            ></i>
            <span className="pt-2">
              <h3>Not yet...</h3>Let's sign up
            </span>
          </Link>
          <Link to="/login" className="btn btn-danger fw-bold">
            <i className="fa fa-key home__button-icon" aria-hidden="true"></i>
            <span className="pt-2">
              {" "}
              <h3>Of course!</h3> Log me in
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
