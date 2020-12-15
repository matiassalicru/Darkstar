import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { NotFound } from "../components/error/NotFound";
import { Home } from "../components/Home";
import { Tienda } from "../components/sections/Tienda";
import { View } from "../components/sections/View";

export const AppRouter = () => {
  const { data, view } = useSelector((state) => state);
  const { title, type } = view;
  const [tipo, setTipo] = useState("aros");

  useEffect(() => {
    setTipo(localStorage.getItem("type"));
  }, [data, tipo]);

  return (
    <div className="main">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/error_404" component={NotFound} />

          <Route exact path="/tienda/:tiposad" component={Tienda} />

          {title && (
            <Route
              exact
              path={`/tienda/${type.toLowerCase()}/${title
                .replace(/\s/g, "")
                .toLowerCase()}`}
              component={View}
            />
          )}

          <Redirect to="/error_404" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};
