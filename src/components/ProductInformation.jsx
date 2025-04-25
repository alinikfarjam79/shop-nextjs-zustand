"use client";
import { FcLike } from "react-icons/fc";
import { CiShare2 } from "react-icons/ci";
import { GiScales } from "react-icons/gi";
import { CiCircleQuestion } from "react-icons/ci";
import { MdOutlineTextsms } from "react-icons/md";
import { AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";
import { getColorCode } from "@/helper/functions";
import DropdownInput from "./DropDonwInput";

function ProductInformation({ product }) {
  const [choseColor, setChoseColor] = useState(product.colors[0]);
  const warranty = ["18 ماه", "12 ماه"];
  const partNumber = ["چین", "ژاپن"];

  return (
    <>
      <div className="w-full  h-12 flex items-center justify-center gap-4 rounded-xl bg-[#f5f5f5]  *:text-3xl *:text-black/40  *:justify-self-center">
        <FcLike />
        <span className="text-gray-500/40 text-xl">|</span>
        <CiShare2 />
        <span className="text-gray-500/40">|</span>
        <GiScales />
        <span className="text-gray-500/40">|</span>
        <CiCircleQuestion />
        <span className="text-gray-500/40">|</span>
        <MdOutlineTextsms />
      </div>
      <p className="text-left text-sm font-bold text-black/60">
        {product.English_title}
      </p>
      <_ColorSections
        product={product}
        choseColor={choseColor}
        setChoseColor={setChoseColor}
      />
      <DropdownInput options={warranty} placeholder="گارانتی" />
      <DropdownInput options={partNumber} placeholder="پارت نامبر" />
    </>
  );
}
function _ColorSections({ product, choseColor, setChoseColor }) {
  return (
    <div className="w-full flex flex-col gap-3">
      <p>رنگ بندی : {choseColor}</p>
      <div className="flex gap-5">
        {product.colors.map((color) => {
          const { color: colorClass, title } = getColorCode(color);
          const isSelected = choseColor === color;

          console.log(typeof colorClass);
          return (
            <div
              key={color}
              onClick={() => setChoseColor(color)}
              className={`w-7 h-7 outline outline-offset-3  rounded-3xl ${colorClass}`}
            >
              <span
                className={`flex items-center justify-center w-full h-full `}
              >
                {isSelected && (
                  <AiOutlineCheck
                    className={`${
                      color == "سفید" ? "text-black" : "text-white"
                    }`}
                  />
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductInformation;
