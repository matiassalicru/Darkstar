import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { NotFound } from "../components/error/NotFound";
import { Home } from "../components/Home";
import { Tienda } from "../components/sections/Tienda";
import { View } from "../components/sections/View";

export const AppRouter = () => {
  const { data, view } = useSelector((state) => state);
  const [cargando, setCargando] = useState(true);
  const [tipo, setTipo] = useState(null);

  const { title, type } = view;

  useEffect(() => {
    if (data.length === 0) {
      setCargando(true);
    } else {
      setCargando(false);
      console.log("no esta loading");
    }
  }, [data]);

  useEffect(() => {
    if (!cargando) {
      console.log(data);
      setTipo(data[0]?.type.toLowerCase());
      console.log(tipo);
    } else {
      console.log("está loading no se puede poner tipo");
      console.log(cargando);
    }
  }, [cargando, data,tipo]);

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

          {/* {tipo !== null ? (
            <Route
              exact
              path={`/tienda/${tipo.toLowerCase()}`}
              component={Tienda}
            />
          ) : // <Redirect to="/error_404" />
          null} */}

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
