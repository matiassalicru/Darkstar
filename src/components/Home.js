import React from "react";
import { useSelector } from "react-redux";

import { Navbar } from "./common/Navbar";
import { Header } from "./header/Header";
import { GridSections } from "./gridSection/GridSections";
import { Footer } from "./common/Footer";
import { Template } from "./common/Template";
import { HomeSwiper } from "./common/HomeSwiper";
import { ProductSlider } from '../components/productGrid/ProductSlider'
// import { Mantenimiento } from "./error/Mantenimiento";

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
          <h1 className='home__title'>
            Populares
          </h1>
          {/* <HomeSwiper/> */}
          <h1 className='home__title'>
            Secciones
          </h1>
          <GridSections />
        </div>
        <Footer />
      </div>
    </>
  );
};
