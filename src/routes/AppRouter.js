import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { NotFound } from "../components/error/NotFound";
import { Home } from "../components/Home";
import { Tienda } from "../components/sections/Tienda";
import { View } from "../components/sections/View";

export const AppRouter = () => {
  const { data, view } = useSelector((state) => state);

  const { title, type } = view;
  let tipo;

  if (data.length > 0) {
    tipo = data[0].type;
  }

  return (
    <div className="main">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/error_404" component={NotFound} />

          <Route exact path="/tienda/aros" component={Tienda} />
          <Route exact path="/tienda/collares" component={Tienda} />
          <Route exact path="/tienda/chokers" component={Tienda} />
          <Route exact path="/tienda/varios" component={Tienda} />
          <Route exact path="/tienda/colores" component={Tienda} />

          {/* {tipo && (
            <Route
              exact
              path={`/tienda/${tipo.toLowerCase()}`}
              component={Tienda}
            />
          )} */}

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
