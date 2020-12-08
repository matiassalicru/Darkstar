import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../common/Navbar";
import { ProductGrid } from "../productGrid/ProductGrid";

import hambMenu from "../../Assets/hambMenu.svg";
import cart from "../../Assets/cart.svg";
import wave from "../../Assets/bg/wave.svg";
import { openSidebar } from "../../actions/ui";
import { Sidebar } from "../sidebar/Sidebar";

export const Tienda = () => {
  const [loading, setLoading] = useState(true);

  const data = useSelector((state) => state.data);
  const { ui } = useSelector((state) => state);
  const dispatch = useDispatch();

   const oSidebar = () => {
     dispatch(openSidebar());
   };

  useEffect(() => {
      
    data.length !== 0 ? setLoading(false) : setLoading(true);
  }, [data]);

  return (
    <>
      {!loading ? (
        <>
          <Navbar />
          <div className="tienda__main">
            <img
              src={hambMenu}
              alt="menu"
              className={`home__menu ${ui.isOpen && `noShow`}`}
              onClick={oSidebar}
            />
            <img src={cart} alt="cart" className="home__cart" />
            <ProductGrid data={data} />
            <div className="tienda__bg1">
              <img src={wave} alt="bg" />
            </div>
          {ui.isOpen ? <Sidebar /> : null}
          </div>
        </>
      ) : (
        <div className="tienda__loading">Cargando...</div>
      )}
    </>
  );
};
