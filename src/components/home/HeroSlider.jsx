import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import swiper1 from "../../assets/swiper1.jpg";
import swiper2 from "../../assets/swiper2.jpg";
import swiper3 from "../../assets/swiper2.jpg";

const HeroSlider = () => {
  return (
    <Swiper
      className="w-full "
      modules={[Navigation, Pagination]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
    >
      <SwiperSlide>
        <img className="h-screen" src={swiper1} alt="swiper 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-screen" src={swiper2} alt="swiper 2" />{" "}
      </SwiperSlide>
      <SwiperSlide>
        <img className="h-screen" src={swiper3} alt="swiper 3" />{" "}
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroSlider;
