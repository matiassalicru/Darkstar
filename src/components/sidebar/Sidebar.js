import React from "react";
import { Link } from "react-scroll";
import exit from "../../Assets/exit.svg";
import { closeSidebar } from "../../actions/ui";
import { useDispatch, useSelector } from "react-redux";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const ui = useSelector((state) => state.ui);
  console.log(ui.isOpen);

  const cSidebar = () => {
    dispatch(closeSidebar());
  };

  return (
    <aside className="sidebar__main  animate__animated animate__bounceInLeft ">
      <div className={`sidebar__exit`} onClick={cSidebar}>
        <i className="fas fa-times"></i>
      </div>
      <ul className="sidebar__list">
        <li className="sidebar__list-item">
          <Link
            to="MasVendido"
            spy={true}
            smooth={true}
            className="sidebar__linkTo"
          >
            Inicio
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
            Chockers
          </Link>
        </li>
        <li className="sidebar__list-item">
          <Link
            to="Collares"
            spy={true}
            smooth={true}
            className="sidebar__linkTo"
          >
            Collares
          </Link>
        </li>
        <li className="sidebar__list-item">
          <Link
            to="WaistChain"
            spy={true}
            smooth={true}
            className="sidebar__linkTo"
          >
            Waist chain
          </Link>
        </li>
        <li className="sidebar__list-item">
          <Link
            to="Cadenas"
            spy={true}
            smooth={true}
            className="sidebar__linkTo"
          >
            Cadenas
          </Link>
        </li>
        <li className="sidebar__list-item">
          <Link to="Shoes" spy={true} smooth={true} className="sidebar__linkTo">
            Shoes
          </Link>
        </li>
      </ul>
    </aside>
  );
};
