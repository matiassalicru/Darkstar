import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../common/Navbar";
import { ProductGrid } from "../productGrid/ProductGrid";

import { fetchData } from "../../actions/data";
import { Template } from "../common/Template";

export const Tienda = () => {
  const [loading, setLoading] = useState(true);
  const [render, setRender] = useState(false);

  const { data } = useSelector((state) => state);
  const dispatch = useDispatch();

  const url = window.location.href;

  useEffect(() => {
    if (url.includes("aros")) {
      return dispatch(fetchData("aros"));
    } else if (url.includes("chokers")) {
      return dispatch(fetchData("chokers"));
    } else if (url.includes("collares")) {
      return dispatch(fetchData("collares"));
    } else if (url.includes("varios")) {
      return dispatch(fetchData("varios"));
    } else if (url.includes("colores")) {
      return dispatch(fetchData("colores"));
    }
  }, [dispatch, url]);

  useEffect(() => {
    if (!url.includes(data[0]?.type) || data.length === 0) {
      setLoading(true);
      setRender(false);
    } else {
      setLoading(false);
      setRender(true)
    }
  }, [data, loading, url]);

  return (
    <>
      <Navbar />
      {render && (
        <div className="tienda__main">
          <Template />
          {!loading ? (
            <ProductGrid data={data} />
          ) : (
            <h1 style={{ color: "white" }}>Cargando...</h1>
          )}
        </div>
      )}
    </>
  );
};
