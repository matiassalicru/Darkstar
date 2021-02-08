import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cleanData } from "../../actions/data";

// Images/Logos/Assets
import hambMenu from "../../Assets/hambMenu.svg";
import cart from "../../Assets/cart.svg";
import logoDarkstar from "../../Assets/logos/Darkstar.ar.png";

//Actions
import { openCart, openSidebar } from "../../actions/ui";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { ui } = useSelector((state) => state);

  const openSide = () => {
    dispatch(openSidebar());
  };

  const setOpenCart = () => {
    dispatch(openCart());
  };

  return (
    <nav className="nav__main">
      <img
        src={hambMenu}
        alt="menu"
        className={`base__navMenu ${ui.isSidebarOpen && `noShow`}`}
        onClick={openSide}
      />

      <Link to="/" onClick={() => dispatch(cleanData())}>
        <img className="nav__logo" src={logoDarkstar} alt="Darkstar" />
      </Link>

      <img
        src={cart}
        className="base__navCart"
        alt="carrito de compras"
        onClick={setOpenCart}
      />
    </nav>
  );
};
