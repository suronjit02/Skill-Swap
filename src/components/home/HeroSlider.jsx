import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import swiper1 from "../../assets/swiper1.jpg";
import swiper2 from "../../assets/swiper2.jpg";
import swiper3 from "../../assets/swiper3.jpg";

const slides = [swiper1, swiper2, swiper3];

const HeroSlider = () => {
  return (
    <Swiper
      className="w-full h-[90vh]"
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
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
            className="w-full h-full object-cover"
          />

          <div className="absolute bottom-15 left-30">
            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-[#3DB66F] font-medium btn transition-all duration-300">
              Explore Skills
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
