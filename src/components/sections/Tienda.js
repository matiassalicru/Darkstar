import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../common/Navbar";
import { ProductGrid } from "../productGrid/ProductGrid";

import { fetchData } from "../../actions/data";
import { Template } from "../common/Template";
import { isNotLoading, isLoading } from "../../actions/ui";

export const Tienda = () => {
  const dispatch = useDispatch();

  const { data, ui } = useSelector((state) => state);
  const { loading } = ui;

  const url = window.location.href;

  useEffect(() => {
    if (data.length === 0) {
      dispatch(isLoading());
    } else {
      dispatch(isNotLoading());
    }
  }, [data, dispatch, loading]);

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
    } else {
      
    }
  }, [loading, dispatch, url]);

  return (
    <>
      <Navbar />
      <div className="tienda__main">
        <Template />
        {loading ? (
          <h1 className="tienda__loading">Cargando...</h1>
        ) : (
          <ProductGrid data={data} />
        )}
      </div>
    </>
  );
};
