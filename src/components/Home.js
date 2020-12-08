import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import wave from "../Assets/bg/wave.svg";
import hambMenu from "../Assets/hambMenu.svg";
import cart from "../Assets/cart.svg";
import { Navbar } from "./common/Navbar";
import { Sidebar } from "./sidebar/Sidebar";
import { Header } from "./header/Header";
import { openSidebar } from "../actions/ui";
import { RoundGrid } from "./roundGrid/RoundGrid";
import { Footer } from "./common/Footer";

export const Home = () => {
  const dispatch = useDispatch();
  const { ui } = useSelector((state) => state);

  const oSidebar = () => {
    dispatch(openSidebar());
  };

  return (
    <div className="home__main">
      <img
        src={hambMenu}
        alt="menu"
        className={`home__menu ${ui.isOpen && `noShow`}`}
        onClick={oSidebar}
      />
      <img src={cart} alt="cart" className="home__cart" />
      <Navbar />

      <div className="home__container">
        <Header />
        <h1 className="home__title">Nuestros productos</h1>
        <RoundGrid />
      </div>

      <Footer />
      <div className="home__bg1">
        <img src={wave} alt="bg" />
      </div>
      {ui.isOpen ? <Sidebar /> : null}
    </div>
  );
};
