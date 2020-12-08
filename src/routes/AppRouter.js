import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Home } from "../components/Home";
import { Tienda } from "../components/sections/Tienda";

export const AppRouter = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tienda/aros" component={Tienda} />
          <Route exact path="/tienda/collares" component={Tienda} />
          <Route exact path="/tienda/chokers" component={Tienda} />
          <Route exact path="/tienda/varios" component={Tienda} />
          <Route exact path="/tienda/colores" component={Tienda} />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
