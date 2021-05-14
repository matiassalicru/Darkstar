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

export const ProductGrid = ({ swiperData, data, needsTitle }) => {
  const { width } = useWindowDimensions();
  const [cards] = useState(data);
  const [pageNumber, setpageNumber] = useState(0);

  // Get the section of products.
  const title = cards[0]?.type;

  const cardsPerPage = 20;
  const pagesVisited = pageNumber * cardsPerPage;

  const displayCards = cards
    .slice(pagesVisited, pagesVisited + cardsPerPage)
    .map((card) => {
      return <ProductCard item={card} key={card.id} needsTitle={needsTitle} />;
    });

  const pageCount = Math.ceil(cards.length / cardsPerPage);

  const changePage = ({ selected }) => {
    setpageNumber(selected);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <section className="grid__main">
      <h1 className='grid__title'>{title}</h1>
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
