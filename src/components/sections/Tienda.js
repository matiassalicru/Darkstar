import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

//Components
import { Navbar } from "../common/Navbar";
import { Template } from "../common/Template";
import { Loading } from "../common/Loading";
import { ProductGrid } from "../productGrid/ProductGrid";

//Actions
import { fetchData } from "../../actions/data";
import { isNotLoading, isLoading } from "../../actions/ui";
import { useParams } from "react-router-dom";

export const Tienda = ({history}) => {
  const dispatch = useDispatch();
  // console.log(history);

  const params = useParams();

  const { data, ui } = useSelector((state) => state);
  const { loading } = ui;
  const url = window.location.href;

  //Efecto para setear el localStorage el key Type para la url
  useEffect(() => {
    // console.log(params);
  }, [params]);

  //Efecto para mostrar la pantalla de cargando mientras no se esté mostrando la data correcta
  useEffect(() => {
    if (data.length === 0) {
      if (!loading) {
        //Condición que verifica que no se ejecute 2 veces la misma acción
        dispatch(isLoading());
      }
    } else {
      if (loading) {
        //Condición que verifica que no se ejecute 2 veces la misma acción
        dispatch(isNotLoading());
      }
    }
  }, [loading, dispatch, data]);

  //Efecto para que mientras sale el componente de cargando se traiga la data para mostrar.
  useEffect(() => {
    if (loading) {
      if (url.includes("aros")) {
        dispatch(fetchData("aros"));
      } else if (url.includes("chokers")) {
        dispatch(fetchData("chokers"));
      } else if (url.includes("collares")) {
        dispatch(fetchData("collares"));
      } else if (url.includes("varios")) {
        dispatch(fetchData("varios"));
      } else if (url.includes("colores")) {
        dispatch(fetchData("colores"));
      }
    }
  }, [loading, dispatch, url]);

  return (
    <>
      <Navbar />
      <div className="tienda__main">
        <Template />
        {loading ? (
          <div className="tienda__loading">
            <Loading/>
          </div>
        ) : (
          <ProductGrid data={data} />
        )}
      </div>
    </>
  );
};
