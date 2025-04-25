"use client";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const categories = [
  {
    title: "کنسول بازی",
    src: "https://plazadigital.ir/wp-content/uploads/2025/04/Consolbazi-png.avif",
  },
  {
    title: "پرینتر",
    src: "https://plazadigital.ir/wp-content/uploads/2025/04/Print-png.avif",
  },
  {
    title: "ساعت هوشمند",
    src: "https://plazadigital.ir/wp-content/uploads/2025/04/smart_watch-png.avif",
  },
  {
    title: "هدست",
    src: "https://plazadigital.ir/wp-content/uploads/2025/04/headset-png.avif",
  },
  {
    title: "لوازم جانبی",
    src: "https://plazadigital.ir/wp-content/uploads/2025/04/Lavazeme_janebi-1-png.avif",
  },
  {
    title: "پایه خنک کننده",
    src: "https://plazadigital.ir/wp-content/uploads/2025/04/coolpad-png.avif",
  },
  {
    title: "هدست",
    src: "https://plazadigital.ir/wp-content/uploads/2025/04/Headset_b-png.avif",
  },
  {
    title: "پاور بانک",
    src: "https://plazadigital.ir/wp-content/uploads/2025/04/Power_bank-png.avif",
  },
];
export default function CategorySlider() {
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth > 700);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [700]);

  return (
    <>
      <Swiper
        slidesPerView={isWide ? 7 : 4}
        spaceBetween={2}
        freeMode={true}
        navigation={true}
        modules={[FreeMode, Navigation]}
        loop={true}
        className="mySwiper2  select-none"
      >
        {categories.map((category) => {
          return (
            <SwiperSlide>
              <img src={category.src} alt="" />
              <p>{category.title}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
