import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import Login from "./components/log in/Login";
import Signup from "./components/sign up/Signup";
import Home from "./components/home/Home";
import AuthContext from "./Context";
import Dashboard from "./components/dashboard/Dashboard";

import React, { useContext } from "react";

export default function Router() {
  const { loggedIn } = useContext(AuthContext);

  if (loggedIn === true) {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="*" component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  } else {
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
}
