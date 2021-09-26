import React, { useContext, useState, useEffect } from "react";
import "./dashboard.css";
import animatedGithub from "./animated-github.gif";
import AuthContext from "../../Context";
import Repository from "../repository/Repository";

export default function Dashboard() {
  const { ghUser, ghRepos } = useContext(AuthContext);

  if (ghUser !== undefined) {
    return (
      <div className="dashboard container">
        <img src={ghUser.avatar_url} alt="Avatar" className="dashboard__profile-pic"/>
        <h1 className="fw-light d-inline">Welcome <span className="fst-italic dashboard__name">@{ghUser.login}</span></h1>
        <Repository/>
      </div>
    );
  } else {
    return (
      <div className="github">
        <a
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}`}
        >
          <div className="github-box bg-light">
            <h2 className="fst-italic">Click here</h2>
            <img
              src={animatedGithub}
              className="github-animation"
              alt="Github animated"
            />
            <h4 className="fw-light">
              to get your <span className="fw-bold">GitHub's </span> profile
              info
            </h4>
          </div>
        </a>
      </div>
    );
  }
}
