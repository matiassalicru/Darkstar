import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cleanData } from "../../actions/data";

// Images/Logos/Assets
import hambMenu from "../../Assets/hambMenu.svg";
import cartMenu from "../../Assets/cart.svg";
import logoDarkstar from "../../Assets/logos/Darkstar.ar.png";

//Actions
import {
  closeCart,
  closeSidebar,
  openCart,
  openSidebar,
} from "../../actions/ui";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { ui } = useSelector((state) => state);

  const toggleSidebar = () => {
    if (ui.isSidebarOpen) {
      dispatch(closeSidebar());
    } else {
      dispatch(openSidebar());
    }
  };

  const toggleCart = () => {
    if (ui.isCartOpen) {
      dispatch(closeCart());
    } else {
      dispatch(openCart());
    }
  };

  return (
    <nav className="nav__main">
      <img
        src={hambMenu}
        alt="menu"
        className={`${
          ui.isSidebarOpen ? `nav__openNavSidebar` : `nav__navSidebar`
        }`}
        onClick={toggleSidebar}
      />

      <Link to="/" onClick={() => dispatch(cleanData())}>
        <img className="nav__logo" src={logoDarkstar} alt="Darkstar" />
      </Link>

      <img
        src={cartMenu}
        className={`${ui.isCartOpen ? `nav__openNavCart` : `nav__navCart`}`}
        alt="carrito de compras"
        onClick={toggleCart}
      />
    </nav>
  );
};
