import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openCart, openSidebar } from "../../actions/ui";

//Components
import { Sidebar } from "../sidebar/Sidebar";
import { Cart } from "./Cart";
import { Footer } from "./Footer";

//Image assets
import hambMenu from "../../Assets/hambMenu.svg";
import cart from "../../Assets/cart.svg";

export const TemplateNoWave = () => {
  const dispatch = useDispatch();
  const { ui } = useSelector((state) => state);

  const openSide = () => {
    dispatch(openSidebar());
  };

  const setOpenCart = () => {
    dispatch(openCart());
  };

  return (
    <>
      {ui.isSidebarOpen ? <Sidebar /> : null}
      {ui.isCartOpen ? <Cart /> : null}

      <img
        src={hambMenu}
        alt="menu"
        className={`base__menu ${ui.isSidebarOpen && `noShow`}`}
        onClick={openSide}
      />

      <img
        src={cart}
        className="base__cart"
        alt="carrito de compras"
        onClick={setOpenCart}
      />

      <Footer />
    </>
  );
};
