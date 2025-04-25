"use client";
import ProductsSlider from "./ProductSlider";
import { useRef, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";

function SliderSection({ products, title }) {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateNavState = () => {
    if (!swiperRef.current) return;

    swiperRef.current.update();

    setTimeout(() => {
      setIsBeginning(swiperRef.current.isBeginning);
      setIsEnd(swiperRef.current.isEnd);
    }, 0);
  };

  return (
    <>
      <div className="flex  w-full flex-row items-center justify-between  py-4 px-11">
        <p className="w-fit font-extrabold text-3xl">{title}</p>
        <p className="text-green-600">مشاهده همه</p>
      </div>
      <ProductsSlider
        swiperRef={swiperRef}
        updateNavState={updateNavState}
        products={products}
      />
      <div className="w-full flex gap-3 justify-end p-4 px-8">
        <button
          disabled={isBeginning}
          onClick={() => swiperRef.current?.slidePrev()}
          className={` rounded-3xl cursor-pointer ${
            isBeginning ? "bg-gray-400/25" : "bg-blue-400"
          }  ${isBeginning ? "text-gray-400/25" : "text-black"}`}
        >
          <MdNavigateNext className="size-8" />
        </button>
        <button
          disabled={isEnd}
          onClick={() => swiperRef.current?.slideNext()}
          className={` rounded-3xl cursor-pointer ${
            isEnd ? "bg-gray-400/25" : "bg-blue-400"
          }  ${isEnd ? "text-gray-400/25" : "text-black"}`}
        >
          <MdNavigateBefore className="size-8" />
        </button>
      </div>
    </>
  );
}

export default SliderSection;
