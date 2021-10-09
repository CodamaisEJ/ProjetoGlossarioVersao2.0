import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/Users";
import Terms from "./pages/Terms";
import UserEdit from "./pages/UserEdit";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/cadastrar" exact={true} component={Register} />
        <Route path="/usuarios" exact={true} component={Users} />
        <Route path="/usuarios/editar" exact={true} component={UserEdit} />
        <Route path="/termos" exact={true} component={Terms} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
