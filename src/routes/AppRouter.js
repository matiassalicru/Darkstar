import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { NotFound } from "../components/error/NotFound";
import { Home } from "../components/Home";
import { ProductCart } from "../components/productCart/ProductCart";
import { Comprar } from "../components/sections/Comprar";
import { Tienda } from "../components/sections/Tienda";
import { View } from "../components/sections/View";

export const AppRouter = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/error_404" component={NotFound} />
          <Route exact path="/comprar" component={Comprar} />
          <Route exact path="/productCart" component={ProductCart}/>

          <Route exact path="/tienda/:tipo" component={Tienda} />

          <Route exact path="/tienda/:tipo/:itemView" component={View} />

          <Redirect to="/error_404" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
