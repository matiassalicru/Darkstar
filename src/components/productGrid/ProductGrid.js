import React, { useEffect, useState } from "react";
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

SwiperCore.use([
  Navigation,
  Pagination,
  EffectFade,
  Zoom,
  Autoplay,
]);

export const ProductGrid = ({ data }) => {
  const [width320, setWidth320] = useState(0);

  useEffect(() => {
    setWidth320(window.visualViewport.width);
  }, []);

  return (
    <section className="grid__main">
      {width320 <= 500 ? (
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
                    <ProductCard data={item} />
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </article>
      ) : (
        <>
          <h2 className="grid__title">{data.length > 0 && data[0].type}</h2>
          <article className="grid__card-container">
            {data.map((data) => {
              return <ProductCard data={data} key={data.id} />;
            })}
          </article>
        </>
      )}
    </section>
  );
};
