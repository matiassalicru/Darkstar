import React from "react";
import { Link } from "react-router-dom";
import { closeSidebar, isLoading } from "../../actions/ui";
import { useDispatch } from "react-redux";
import { cleanData, fetchData } from "../../actions/data";

export const Sidebar = () => {
  const dispatch = useDispatch();
  
  const cSidebar = () => {
    dispatch(closeSidebar());
  };

  const getData = (product) => {
    dispatch( cleanData() );
    dispatch( isLoading() );
    dispatch( fetchData(product) );
  }

  return (
    <aside className="sidebar__main  animate__animated animate__backInLeft animate__faster">
      <div className={`sidebar__exit`} onClick={cSidebar}>
        <i className="fas fa-times"></i>
      </div>
      <ul className="sidebar__list">
        <li
          className="sidebar__list-item"
          onClick={() => dispatch(cleanData())}
        >
          <Link to="/" className="sidebar__linkTo" onClick={cSidebar}>
            Inicio
          </Link>
        </li>
        <li className="sidebar__list-item" onClick={() => getData("aros")}>
          <Link
            to="/tienda/aros"
            className="sidebar__linkTo"
            onClick={cSidebar}
          >
            Aros
          </Link>
        </li>
        <li className="sidebar__list-item" onClick={() => getData("chokers")}>
          <Link
            to="/tienda/chokers"
            className="sidebar__linkTo"
            onClick={cSidebar}
          >
            Chokers
          </Link>
        </li>
        <li className="sidebar__list-item" onClick={() => getData("collares")}>
          <Link
            to="/tienda/collares"
            className="sidebar__linkTo"
            onClick={cSidebar}
          >
            Collares
          </Link>
        </li>
        <li className="sidebar__list-item" onClick={() => getData("varios")}>
          <Link
            to="/tienda/varios"
            className="sidebar__linkTo"
            onClick={cSidebar}
          >
            Varios
          </Link>
        </li>
        <li className="sidebar__list-item" onClick={() => getData("colores")}>
          <Link
            to="/tienda/colores"
            className="sidebar__linkTo"
            onClick={cSidebar}
          >
            Colores
          </Link>
        </li>
      </ul>
    </aside>
  );
};
