import React from "react";
import { Route, Switch } from "react-router";
import Home from "pages/Home";
import About from "pages/About";
import Contact from "pages/Contact";
import SignUp from "components/Authentification/SignUp";
const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/Contact" component={Contact} />
    <Route path="/About" component={About} />
    <Route path="/SignUp" component={SignUp} />
  </Switch>
);

export default Router;
