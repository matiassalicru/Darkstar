import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
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
import useWindowDimensions from "../../hooks/useWindowDimensions/useWindowDimensions";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { ui } = useSelector((state) => state);
  let history = useHistory();
  const {width } = useWindowDimensions();


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
  
  const enterCart = () => {
    if (width <= 350) {
      history.push('/productCart')
    } else {
      toggleCart();
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
        onClick={enterCart}
      />
    </nav>
  );
};
