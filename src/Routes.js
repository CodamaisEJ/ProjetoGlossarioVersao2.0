import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/Users";
import UserEdit from "./pages/UserEdit";
import Terms from "./pages/Terms";
import Term from "./pages/TermEdit";
import NewTerm from "./pages/newTerm";
import TermEdit from "./pages/TermEdit";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Login} />
        <Route path="/cadastrar" exact={true} component={Register} />
        <Route path="/usuarios" exact={true} component={Users} />
        <Route path="/usuarios/editar" exact={true} component={UserEdit} />
        <Route path="/termos" exact={true} component={Terms} />
        <Route path="/termo" exact={true} component={Term} />
        <Route path="/termo/:id/editar" exact={true} component={TermEdit} />
        <Route path="/cadastrar_termo" exact={true} component={NewTerm} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
