import React from "react";
import { Link } from "react-router-dom";
import LogoW from "../../Assets/logos/LogoWritten.svg";

export const Navbar = () => {
  return (
    <nav className="nav__main">
      <img src={LogoW} alt="logo" className="nav__img" />

      <ul className="nav__list">
        <li className="nav__list-item">
          <Link to="/">Inicio</Link>
        </li>
        <li className="nav__list-item">
          <Link to="/tienda">Productos</Link>
        </li>
        <li className="nav__list-item">
          <Link to="/contacto"> Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};
