import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { cleanData } from "../../actions/data";

// Images/Logos/Assets
import hambMenu from "../../Assets/hambMenu.svg";
import cartMenu from "../../Assets/bag.svg";

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
  let history = useHistory();


  const toggleSidebar = () => {
    if (ui.isSidebarOpen) {
      dispatch(closeSidebar());
    } else {
      dispatch(openSidebar());
    }
  };

  // const toggleCart = () => {
  //   if (ui.isCartOpen) {
  //     dispatch(closeCart());
  //   } else {
  //     dispatch(openCart());
  //   }
  // };

  const enterCart = () => {
    history.push('/productCart')
  };

  return (
    <nav className="nav__main">
      <img
        src={hambMenu}
        alt="menu"
        className={`${ui.isSidebarOpen ? `nav__openNavSidebar` : `nav__navSidebar`
          }`}
        onClick={toggleSidebar}
      />

      <Link to="/" onClick={() => dispatch(cleanData())}>
        <h1 className='nav__title'>darkstar.ar</h1>
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
