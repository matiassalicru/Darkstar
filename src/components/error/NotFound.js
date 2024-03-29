import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import { Navbar } from "../common/Navbar";
import { Template } from "../common/Template";
import { GridSections } from "../gridSection/GridSections";

export const NotFound = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="notFound__main">
        <Template />

        <div className="notFound__container">
          <h1 className="notFound__title">
            Ups... Parece que esta sección no existe (aún).
          </h1>
          <h2 className="notFound__title">
            Te pueden interesar algunas de las siguientes secciones.
          </h2>

          <div className="roundGrid__main">
            <Link to="/">
              <div className={`roundGrid__card`}>
                <div className={`roundGrid__img`}></div>
                <button className='btn btn__success'>Inicio</button>
              </div>
            </Link>
          </div>

          <GridSections />
        </div>
      </div>
    </Fragment>
  );
};
