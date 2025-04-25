"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "../app/globals.css";
function MainSlider() {
  return (
    <Swiper
      navigation={true}
      pagination={true}
      autoplay={{
        delay: 3000, // 3 seconds
        disableOnInteraction: false, // optional: continue autoplay after user interaction
      }}
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={4}
      className="swiper mySwiper1 select-none"
    >
      <SwiperSlide className="swiper-slide">
        <img src="https://plazadigital.ir/wp-content/uploads/2025/04/Website-Slider-Desktop-zenbook-1-scaled.avif" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        {" "}
        <img src="https://plazadigital.ir/wp-content/uploads/2025/04/Mobile-1.avif" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        {" "}
        <img src="https://plazadigital.ir/wp-content/uploads/2025/04/Gaming.avif" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img src="https://plazadigital.ir/wp-content/uploads/2025/04/Website-Slider-Desktop-mac-1.avif" />
      </SwiperSlide>
      <SwiperSlide className="swiper-slide">
        <img src="https://plazadigital.ir/wp-content/uploads/2025/04/Laptop.avif" />
      </SwiperSlide>
    </Swiper>
  );
}

export default MainSlider;
