import React from "react";
import { Link } from "react-scroll";

export const Sidebar = () => {
  return (
    <aside className="sidebar__main">
      <ul className="sidebar__list">
        <li className="sidebar__list-item">
          <Link
            to="MasVendido"
            spy={true}
            smooth={true}
            className="sidebar__linkTo"
          >
            Más vendido
          </Link>
        </li>
        <li className="sidebar__list-item">
          <Link
            to="LoUltimo"
            spy={true}
            smooth={true}
            className="sidebar__linkTo"
          >
            Lo último
          </Link>
        </li>
        <li className="sidebar__list-item">
          <Link to="Aros" spy={true} smooth={true} className="sidebar__linkTo">
            Aros
          </Link>
        </li>
        <li className="sidebar__list-item">
          <Link
            to="Chockers"
            spy={true}
            smooth={true}
            className="sidebar__linkTo"
          >
            Collares
          </Link>
        </li>
        <li className="sidebar__list-item">
          <Link
            to="Collares"
            spy={true}
            smooth={true}
            className="sidebar__linkTo"
          >
            Cadenas
          </Link>
        </li>
        <li className="sidebar__list-item">
          <Link
            to="Ombligueras"
            spy={true}
            smooth={true}
            className="sidebar__linkTo"
          >
            Chokers
          </Link>
        </li>
        <li className="sidebar__list-item">
          <Link
            to="Cadenas"
            spy={true}
            smooth={true}
            className="sidebar__linkTo"
          >
            Ombligueras
          </Link>
        </li>
      </ul>
    </aside>
  );
};
