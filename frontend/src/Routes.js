import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/templates/Layout/Layout";
import Home from "./components/pages/Home/Home";
import Error from "./components/pages/Error/Error";
import AddApp from "./components/organisms/AddApp/AddApp";
import ListApp from "./components/organisms/ListApp/ListApp";

const Routes = () => {
  return (
    <BrowserRouter basename="/">
      <Layout>
        <Switch>
          <Route path={"/add-app"} exact={true} component={AddApp} />
          <Route path={"/list-app"} exact={true} component={ListApp} />
          <Route path={"/"} exact={true} component={Home} />
          <Route render={() => <Error category="page-not-found" />} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default Routes;
