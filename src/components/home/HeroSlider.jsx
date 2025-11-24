import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import swiper1 from "../../../public/assets/swiper1.jpg";
import swiper2 from "../../../public/assets/swiper1.jpg";
import swiper3 from "../../../public/assets/swiper1.jpg";

const slides = [swiper1, swiper2, swiper3];

const HeroSlider = () => {
  return (
    <Swiper
      className="w-full h-[25vh] sm:h-[35vh] md:h-[55vh] lg:h-[75vh] xl:h-[90vh]"
      modules={[Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={1500}
    >
      {slides.map((img, index) => (
        <SwiperSlide key={index} className="relative">
          <img
            src={img}
            alt={`slide-${index}`}
            className="w-full h-full object-contain sm:object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
