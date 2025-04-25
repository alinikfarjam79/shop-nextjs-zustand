"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { CiShop } from "react-icons/ci";

import "../app/globals.css";

// import required modules
import { FreeMode, Navigation } from "swiper/modules";
import { FaBoxOpen } from "react-icons/fa";
import { applyDiscount, formatTomanFa } from "@/helper/functions";
import Link from "next/link";

export default function ProductsSlider({
  swiperRef,
  updateNavState,
  products,
}) {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        modules={[FreeMode, Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          updateNavState();
        }}
        onSlideChange={updateNavState}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="mySwiper3"
      >
        {products.map((product) => {
          return (
            <SwiperSlide
              key={product.id}
              className="border border-gray-400/35  cursor-pointer"
            >
              <Link
                className="w-full h-full flex flex-col items-center  p-4 gap-5"
                key={product.id}
                href={`/products/${product.id}`}
              >
                <img
                  src={`${product.image[0]}`}
                  className="w-44 h-42 object-fill"
                />
                <p className="text-sm">{product.Persian_title}</p>
                <div className="w-full flex gap-1 items-center text-red-600">
                  <CiShop />
                  <p className="text-xs">
                    فقط {product.quantity} در انبار موجود است
                  </p>
                </div>
                <div className="w-full">
                  <div className="flex w-fit gap-2 bg-green-200/60 px-1 py-2 rounded">
                    <FaBoxOpen className="text-green-700" />
                    <span className="text-xs text-green-700">تحویل امروز</span>
                  </div>
                </div>
                <div className="w-full flex flex-col mt-2 justify-start items-end">
                  <p className="text-sm text-gray-400 line-through">
                    {formatTomanFa(parseInt(product.price))}
                  </p>
                  <div className="flex w-full justify-between mt-4">
                    <span className="bg-red-500 text-white rounded text-base p-1 px-2 flex items-center justify-center">
                      {product.discount}
                    </span>
                    <p>
                      {formatTomanFa(
                        applyDiscount(
                          parseInt(product.price),
                          parseInt(product.discount)
                        )
                      )}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
