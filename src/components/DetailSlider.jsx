"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useState } from "react";

import "../app/globals.css";
function DetailSlider({ images }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="flex flex-col">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="detailSwiper1 select-none"
      >
        {images.map((img) => {
          return (
            <SwiperSlide>
              <img src={img} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <div className="h-32"></div> */}
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={50}
        slidesPerView={3}
        freeMode={true}
        breakpoints={{
          400: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="detailSwiper2 mt-3 w-full"
      >
        {images.map((img) => {
          return (
            <SwiperSlide className="SwiperSlideDetail">
              <img src={img} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default DetailSlider;
