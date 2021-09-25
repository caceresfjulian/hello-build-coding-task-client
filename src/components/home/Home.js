import logo from "../../logo.svg";
import buildLogo from "./build-logo.png";

import './home.css'
import React from 'react'

export default function Home() {
  return (
    <div className="container">
      <div className="home__header">
        <h1 className="fw-bold">Coding Task</h1>
        <h2>for</h2>
        <img src={buildLogo} alt="build-logo"/>
      </div>
      <img src={logo} alt="React logo" className="App-logo home__box__react-logo" />
    </div>
  )
}
