import React from "react";
import "./dashboard.css";
import animatedGithub from "./animated-github.gif";

export default function Dashboard() {
  return (
    <div className="github">
      <a href={"https://github.com/login/oauth/authorize?client_id=9104b024fd6ed82f6a50"}>
        <div className="github-box">
          <h2 className="fst-italic">Click here</h2>
          <img src={animatedGithub} className="github-animation" alt="Github animated"/>
          <h4 className="fw-light">to get your <span className="fw-bold">GitHub's </span> profile info</h4>
        </div>
      </a>
    </div>
  );
}
