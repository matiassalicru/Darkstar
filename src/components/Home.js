import React, { Fragment, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navbar } from "./common/Navbar";
import { Header } from "./header/Header";
import { GridSections } from "./gridSection/GridSections";
import { Footer } from "./common/Footer";
import { Template } from "./common/Template";
import { Loading } from './common/Loading';
import ProductCard from "./productGrid/ProductCard";
import useWindowDimensions from "../hooks/useWindowDimensions/useWindowDimensions";

export const Home = () => {
  //Trae el state ui desde el store de redux.
  const [data, setData] = useState([])
  const { width } = useWindowDimensions();

  useEffect(() => {
    fetch('https://backend-darkstar.herokuapp.com/popu')
      .then(res => res.json())
      .then(data => setData(data)
      )
    return () => {
      setData([]);
    }
  }, [])

  return (
    <Fragment>
      <Navbar />
      <div className="home__main">
        <Template />
        <div className="home__container">
          <Header />
          <h1 className='home__title'>
            Populares
          </h1>
          {
            width < 700 ? (
              <article className="productCart__swiper">
                <Swiper spaceBetween={10} slidesPerView={1.5} slidesPerGroupSkip={0}>
                  {data.length !== 0 ? data.map((item, i) => (
                    <SwiperSlide key={i}>
                      <ProductCard item={item} />
                    </SwiperSlide>
                  )) : (
                    <Loading />
                  )}
                </Swiper>
              </article>) : (
              <div className='home__cardContainer'>
                {data.length !== 0 ? data.map((item, i) => (
                  <ProductCard key={i} item={item} />
                )) : (
                  <Loading />
                )}
              </div>
            )
          }
          <h1 className='home__title'>
            Secciones
          </h1>
          <GridSections />
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};
