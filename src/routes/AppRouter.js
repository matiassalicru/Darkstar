import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../components/Home";

export const AppRouter = () => {
  return (
    <div className="main">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
