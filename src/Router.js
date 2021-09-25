import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Login from "./components/log in/Login";
import Signup from "./components/sign up/Signup";
import Home from "./components/home/Home";

import React from "react";

export default function Router() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="*" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
