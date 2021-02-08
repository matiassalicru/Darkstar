import React from "react";
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
  console.log(data);
  return (
    <>
      <Swiper
        effectcoverflow="true"
        spaceBetween={30}
        slidesPerView={1}
        // pagination={{ clickable: true }}
        loop={true}
        zoom={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        onSlideChange={() => console.log("slide changed")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((image, index) => (
          <SwiperSlide key={index}>
            <img className="swiper__image" src={image} alt="carousel" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
