import React from "react";
import { ProductCard } from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Zoom,
  Autoplay,
} from "swiper";

//Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/swiper.scss";
import useWindowDimensions from "../../hooks/useWindowDimensions/useWindowDimensions";

SwiperCore.use([Navigation, Pagination, EffectFade, Zoom, Autoplay]);

export const ProductGrid = ({ data }) => {
  const { width } = useWindowDimensions();

  return (
    <section className="grid__main">
      {width <= 500 ? (
        <article className="grid__swiper">
          <Swiper
            spaceBetween={0}
            slidesPerView={1.5}
            slidesPerGroupSkip={1}
            pagination={{ clickable: true }}
            onSlideChange={() => console.log("slide changed")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {data.map((item, i) => (
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
            {data.map((item) => {
              return <ProductCard item={item} key={item.id} />;
            })}
          </article>
        </>
      )}
    </section>
  );
};
