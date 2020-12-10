import React from "react";
import { Link } from "react-router-dom";
import { closeSidebar } from "../../actions/ui";
import { useDispatch } from "react-redux";
import { fetchData } from "../../actions/data";

export const Sidebar = () => {
  const dispatch = useDispatch();
  
  const cSidebar = () => {
    dispatch(closeSidebar());
  };

  const getData = (product) => {
    dispatch( fetchData(product) )
  }

  return (
    <aside className="sidebar__main  animate__animated animate__bounceInLeft ">
      <div className={`sidebar__exit`} onClick={cSidebar}>
        <i className="fas fa-times"></i>
      </div>
      <ul className="sidebar__list">
        <li className="sidebar__list-item">
          <Link to="/" className="sidebar__linkTo">
            Inicio
          </Link>
        </li>
        <li className="sidebar__list-item" onClick={() => getData("aros")}>
          <Link to="/tienda/aros" className="sidebar__linkTo">
            Aros
          </Link>
        </li>
        <li className="sidebar__list-item" onClick={() => getData("chokers")}>
          <Link to="/tienda/chokers" className="sidebar__linkTo">
            Chokers
          </Link>
        </li>
        <li className="sidebar__list-item" onClick={() => getData("collares")}>
          <Link to="/tienda/collares" className="sidebar__linkTo">
            Collares
          </Link>
        </li>
        <li className="sidebar__list-item" onClick={() => getData("varios")}>
          <Link to="/tienda/varios" className="sidebar__linkTo">
            Varios
          </Link>
        </li>
        <li className="sidebar__list-item" onClick={() => getData("colores")}>
          <Link to="/tienda/colores" className="sidebar__linkTo">
            Colores
          </Link>
        </li>
      </ul>
    </aside>
  );
};
