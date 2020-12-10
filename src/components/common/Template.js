import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../../actions/ui";
import { Sidebar } from "../sidebar/Sidebar";
import { Footer } from "./Footer";
import wave from "../../Assets/bg/wave.svg";
import hambMenu from "../../Assets/hambMenu.svg";
import cart from "../../Assets/cart.svg";

export const Template = () => {
  const dispatch = useDispatch();
  const { ui } = useSelector((state) => state);

  const openSide = () => {
    dispatch(openSidebar());
  };

  return (
    <>
      {ui.isOpen ? <Sidebar /> : null}
      <img
        src={hambMenu}
        alt="menu"
        className={`home__menu ${ui.isOpen && `noShow`}`}
        onClick={openSide}
      />
      <img src={cart} alt="cart" className="home__cart" />

      <div className="bg1">
        <img src={wave} alt="bg" />
      </div>
      <Footer />
    </>
  );
};
