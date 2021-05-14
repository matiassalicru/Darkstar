import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openCart, openSidebar } from "../../actions/ui";

//Components
import { Sidebar } from "../sidebar/Sidebar";
import { Cart } from "./Cart";
import { Footer } from "./Footer";

export const Template = () => {
  const { ui } = useSelector((state) => state);

  return (
    <>
      {ui.isSidebarOpen ? <Sidebar /> : null}
      {ui.isCartOpen ? <Cart /> : null}

      <Footer />
    </>
  );
};
