import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

import { Navbar } from "./common/Navbar";
import { Header } from "./header/Header";
import { GridSections } from "./gridSection/GridSections";
import { Footer } from "./common/Footer";
import { Template } from "./common/Template";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./productGrid/ProductCard";
// import { Mantenimiento } from "./error/Mantenimiento";

export const Home = () => {
  //Trae el state ui desde el store de redux.
  const [data, setData] = useState([])
  // const { ui } = useSelector((state) => state);

  useEffect(() => {
    fetch('https://backend-darkstar.herokuapp.com/popu')
      .then(res => res.json())
      .then(data => setData(data)
      )

  }, [data])

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
          <article className="grid__swiper">
            <Swiper spaceBetween={0} slidesPerView={1.5} slidesPerGroupSkip={1}>
              {data.map((item, i) => (
                <SwiperSlide key={i}>
                  {/* <article className="grid__card-container"> */}
                  <ProductCard item={item} />
                  {/* </article> */}
                </SwiperSlide>
              ))}
            </Swiper>
          </article>
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
