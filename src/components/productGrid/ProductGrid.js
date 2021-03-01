import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "../pagination/Pagination";

import SwiperCore, { Navigation, EffectFade, Zoom, Autoplay } from "swiper";

//Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/swiper.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions/useWindowDimensions";
import ReactPaginate from "react-paginate";
import ProductCard from './ProductCard';

SwiperCore.use([Navigation, Pagination, EffectFade, Zoom, Autoplay]);

export const ProductGrid = ({ swiperData, data }) => {
  const { width } = useWindowDimensions();
  const [cards] = useState(data);
  const [pageNumber, setpageNumber] = useState(0);

  // const availableItems = cards.filter( (i) => i.availability === 'in stock');

  // console.log(availableItems);
  console.log(cards);

  const cardsPerPage = 20;
  const pagesVisited = pageNumber * cardsPerPage;

  const displayCards = cards
    .slice(pagesVisited, pagesVisited + cardsPerPage)
    .map((card) => {
      return <ProductCard item={card} key={card.id} />;
    });

  const pageCount = Math.ceil(cards.length / cardsPerPage);

  const changePage = ({ selected }) => {
    setpageNumber(selected);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <section className="grid__main">
      {width <= 500 ? (
        <article className="grid__swiper">
          <Swiper spaceBetween={0} slidesPerView={1.5} slidesPerGroupSkip={1}>
            {swiperData.map((item, i) => (
              <SwiperSlide key={i}>
                <article className="grid__card-container">
                  <ProductCard item={item} />
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
      ) : (
        <>
          <h2 className="grid__title">{data.length > 0 && data[0].type}</h2>

          <article className="grid__card-container">
            {displayCards}
            <ReactPaginate
              previousLabel={"Atras"}
              nextLabel={"Siguiente"}
              pageCount={pageCount}
              onPageChange={changePage}
              nextClassName={"paginate__next"}
              activeClassName={"paginate__active"}
              previousClassName={"paginate__prev"}
              containerClassName={"paginate__container"}
              pageClassName={"paginate__page"}
              pageLinkClassName={"paginate__link"}
            />
          </article>
        </>
      )}
    </section>
  );
};
