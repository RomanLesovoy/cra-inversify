import * as React from "react";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import {Paper} from "@material-ui/core";
import Header from "../components/partials/Headers";
import {Home} from "../pages/Home"
import {Users} from "../components/Users"

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Paper>
        <div className="container-app">
        <Switch>
          <Route path="/" key="home" exact={true}>
            <Home />
          </Route>
          <Route path="/users" exact={true}>
            <Users />
          </Route>
        </Switch>
        </div>
      </Paper>
    </BrowserRouter>
  )
}
export default Router;