import React from "react";
import { useSelector } from "react-redux";

import { Navbar } from "./common/Navbar";
import { Header } from "./header/Header";
import { RoundGrid } from "./roundGrid/RoundGrid";
import { Footer } from "./common/Footer";
import { Template } from "./common/Template";

export const Home = () => {

  //Trae el state ui desde el store de redux.
  const { ui } = useSelector((state) => state);

  return (
    <>
      <Navbar />
      <div className="home__main">
      <Template />
        <div className="home__container">
          <Header />
          <h1 className={`home__title ${!ui.darkMode ? `dark` : `light`}`}>
            Nuestros productos
          </h1>
          <RoundGrid />
        </div>
      <Footer />
      </div>
    </>
  );
};
