import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../common/Navbar";
import { ProductGrid } from "../productGrid/ProductGrid";

import hambMenu from "../../Assets/hambMenu.svg";
import cart from "../../Assets/cart.svg";
import wave from "../../Assets/bg/wave.svg";
import { openSidebar } from "../../actions/ui";
import { Sidebar } from "../sidebar/Sidebar";
import { fetchData } from "../../actions/data";
import { Footer } from "../common/Footer";
import { Template } from "../common/Template";

export const Tienda = () => {
  const [loading, setLoading] = useState(true);

  // const data = useSelector((state) => state.data);
  const { ui, data } = useSelector((state) => state);
  const dispatch = useDispatch();

  const oSidebar = () => {
    dispatch(openSidebar());
  };

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
    if (data.length !== 0) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [data, loading]);

  return (
    <>
      <Navbar />
      <div className="tienda__main">
        <Template />
        {!loading ? (
          <ProductGrid data={data} />
        ) : (
          <h1 style={{ color: "white" }}>Cargando...</h1>
        )}
      </div>
    </>
  );
};
