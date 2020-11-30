import React from "react";
import LogoW from "../../Assets/logos/LogoWritten.png";

export const Navbar = () => {
  return (
    <nav className="nav__main">
      <img src={LogoW} alt="logo" className="nav__img" />

      <ul className="nav__list">
        <li className="nav__list-item">
          <a
            href="https://www.twitter.com/matiassalicru"
            target="_blank"
            rel="noopener noreferrer"
          >
            Inicio
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="https://www.twitter.com/matiassalicru"
            target="_blank"
            rel="noopener noreferrer"
          >
            Productos
          </a>
        </li>
        <li className="nav__list-item">
          <a
            href="https://www.twitter.com/matiassalicru"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};
