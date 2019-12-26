import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import App from "./app";
import Login from "./login";

export default () => (
  <HashRouter>
    <Switch>
      <Route path="/app" component={App} />
      <Route path="/login" component={Login} />
      <Redirect from="*" to="/login" />
    </Switch>
  </HashRouter>
);
