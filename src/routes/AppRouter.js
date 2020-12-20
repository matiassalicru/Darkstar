import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { NotFound } from "../components/error/NotFound";
import { Home } from "../components/Home";
import { Tienda } from "../components/sections/Tienda";
import { View } from "../components/sections/View";

export const AppRouter = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/error_404" component={NotFound} />

          <Route exact path="/tienda/:tipo" component={Tienda} />

          <Route exact path="/tienda/:tipo/:itemView" component={View} />

          <Redirect to="/error_404" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
