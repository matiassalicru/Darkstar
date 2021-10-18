import React, {Fragment} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Zoom,
  Autoplay,
  EffectCoverflow,
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
  EffectCoverflow,
]);

export const HomeSwiper = ({ data }) => {

  return (
    <Fragment>
      <Swiper
        effectcoverflow="true"
        spaceBetween={10}
        slidesPerView={1}
        // pagination={{ clickable: true }}
        loop={true}
        zoom={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
      >
        {data.map((image, index) => (
          <SwiperSlide key={index}>
            <img className="swiper__image" src={image} alt="carousel" />
          </SwiperSlide>
        ))}
      </Swiper>
    </Fragment>
  );
};
