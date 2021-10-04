import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Termos from "./pages/Termos";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact={true} component={Login} />
        <Route path="/termos" exact={true} component={Termos} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
