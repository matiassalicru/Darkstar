import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

//Import Swiper styles
import "swiper/swiper-bundle.css";
import "swiper/swiper.scss";
SwiperCore.use([Navigation, Pagination]);

export const HomeSwiper = ({ data }) => {
  console.log(data);
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            waitForTransition: true
        }}
        onSlideChange={() => console.log("slide changed")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map((image) => (
          <SwiperSlide>
            <img className="swiper__image" src={image} alt="carousel" />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
