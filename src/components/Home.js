import React, { useEffect } from "react";
import { Navbar } from "./common/Navbar";
import { ProductGrid } from "./productGrid/ProductGrid";
import { Sidebar } from "./sidebar/Sidebar";

export const Home = () => {

  fetch("https://darkstar-tienda.firebaseio.com/")
  .then(data => console.log(data))

  return (
    <div className="home__main">
      <div>
        <Navbar />
        <Sidebar />
      </div>
      {/* <div className='home__bg1'></div> */}
      {/* <div className="home__bg2"></div> */}
      <section className="home__container">
        <ProductGrid id="MasVendido" title="Mas vendido" />
        <ProductGrid id="LoUltimo" title="Lo último" />
        <ProductGrid id="Aros" title="Aros" />
        <ProductGrid id="Chockers" title="Chockers" />
        <ProductGrid id="Collares" title="Collares" />
        <ProductGrid id="Ombligueras" title="Ombligueras" />
        <ProductGrid id="Cadenas" title="Cadenas" />
      </section>
    </div>
  );
};
