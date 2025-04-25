"use client";

import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiSearch, FiShoppingCart } from "react-icons/fi";

const categories = [
  "لپ تاپ",
  "گوشی موبایل",
  "ساعت هوشمند",
  "هدفون و هندزفری",
  "قطعات کامپیوتر",
  "مانیتور",
  "آل این وان",
  "ماشین های اداری",
  "کنسول بازی",
  "خرید قسطی لپ تاپ",
  "پلازا مگ",
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItems } = useCartStore();

  return (
    <header className="w-full mb-2  font-vazir">
      {/* Top Section */}
      <div className="flex items-center justify-between px-4 py-3 md:px-8 bg-white">
        {/* logo */}

        <div className="flex items-center gap-3">
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FiX className="cursor-pointer" size={22} />
            ) : (
              <FiMenu className="cursor-pointer" size={22} />
            )}
          </button>
          <Link href={"/"}>
            <svg
              width="170px"
              height="77px"
              viewBox="0 0 422 154"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="پلازا دیجیتال"
            >
              <path d="m198 5 16-1c9 0 18 9 18 18v34c0 7-4 14-10 17-5 2-11 2-16 1-3 0-3-4-1-5 5-1 9 1 14-1 4-2 7-7 7-12V23c0-6-5-12-11-13h-16l-1 5 1 66c0 2-1 5-3 5s-3-2-3-4V12c0-3 2-7 5-7ZM241 8c0-2 2-4 4-4 2 1 2 3 2 5v71h27c3 0 3 6 0 6h-25c-4 0-8-4-8-8V8ZM286 12c0-4 2-7 6-8h15c10 0 18 9 18 19v58c0 2 0 4-2 4-1 1-2 0-3-1l-1-9h-19c-3 0-4-5-2-6h21V23c0-6-5-12-11-13h-16v71c0 2-1 5-3 5-3 0-3-3-3-5V12ZM334 8c0-1 1-4 3-4h30c4 0 6 5 4 8l-28 58c-2 3-1 7-1 10h25l1-15c0-2 2-2 4-2 2 2 1 5 2 8-1 4 1 10-3 13-2 2-6 2-9 2h-21c-3 0-5-2-5-5 0-4-1-9 1-13l29-58h-27c-2 0-4 0-5-2ZM383 12c0-4 3-8 7-8l17 1c7 1 13 7 15 14v66c-2 0-4 1-5-1l-1-9-20-1c-2 0-2-2-2-4l6-1h16V23c0-6-4-11-9-12-6-2-12-1-18-1v64l-1 10c-1 2-3 2-5 1V12Z"></path>
              <path d="M215 115c0-6-1-12 1-18 1 1 3 2 3 4v44c0 3-1 6-4 7h-11c-6-1-11-6-11-12v-18c0-4 0-8 2-12 3-4 9-5 14-4 2 0 2 1 3 2-4 2-9 0-12 3-2 2-4 5-3 8v21c0 4 4 8 8 8h10v-33ZM225 108c-1-4 0-7 1-11 4 2 2 7 3 10 0 2-4 4-4 1ZM267 99c1-2 4-1 4 1l-1 10-3-1V99ZM277 100c0-2 3-2 4-1v7h13c2 0 2 1 1 3h-14v31c0 4 3 7 7 8h11v4c-5 0-11 1-16-2-4-2-6-7-6-11v-39ZM337 99l1-1 2 1v51c1 2-4 2-3 0V99ZM235 117c0-6 5-10 10-11h12c3 1 4 3 4 6v25l-1 17h-4l1-15v-29h-12c-3 0-6 4-6 7v18c0 4-1 8 2 11s8 2 11 3l2 2c-5 1-11 2-15-2-3-3-4-8-4-12v-20ZM310 107c5-2 10-2 15-1 3 0 5 3 5 6v38c0 2-3 1-4 2v-42h-11c-4 0-7 4-7 8v21c0 3 1 6 4 7 3 3 7 2 11 2l-1 4c-4 0-8 0-11-2-4-2-7-6-7-11v-21c0-4 2-9 6-11ZM225 116c2-1 4 1 4 3l-1 31c0 3-3 2-3 0v-34ZM267 117c3-3 4 2 4 4v28c0 2-2 4-4 2v-34Z"></path>
              <path d="M62 0h29c1 6-1 13 3 18l11 12c4 3 7 7 12 8l12 1v18c0 2-3 2-4 2l-16-1-1-13c-1-4-5-6-8-9L89 24c-5-4-11-3-16-3-4 0-7 2-10 5L26 64c-2 1-4 3-5 6l-1 13H0V64l12-1c3 0 6-3 8-5a9219 9219 0 0 1 42-45V0Z"></path>
              <path d="M133 63h21v21h-13a3024 3024 0 0 1-42 39c-3 4-7 7-7 12l-1 19H62v-19c0-6-6-10-10-14s-7-8-12-11c-5-2-10-1-15-1V88l19 1c3 4 0 10 3 15s7 8 11 11c3 4 6 8 11 10l14 1a4100 4100 0 0 1 50-50V63Z"></path>
            </svg>
          </Link>
        </div>
        {/* search box) */}
        <div className="w-full max-w-md hidden lg:flex">
          <div className="relative w-[90%]">
            <input
              type="text"
              placeholder="محصول موردنظر خود را جستجو کنید"
              className="w-full border px-4 py-2 rounded-lg text-sm pr-10"
            />
            <FiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* cart / login */}
        <div className="flex items-center gap-3">
          <Link href={"/cart"}>
            <button className="relative p-2 border rounded-lg cursor-pointer">
              <FiShoppingCart className="w-5 h-5 text-green-600" />
              <span className="absolute -top-2 -right-2 p-2.5 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                {cartItems.length}
              </span>
            </button>
          </Link>
          <button className="bg-green-600 text-white px-4 py-3 rounded-lg text-sm">
            ورود / ثبت نام
          </button>
        </div>
      </div>

      {/* Category Menu */}
      <nav
        className={`bg-gray-100 px-4 py-4 mt-4 ${
          mobileMenuOpen ? "block" : "hidden"
        } md:flex md:justify-center outline-1 outline-gray-400/30 outline-offset-4`}
      >
        <ul className="flex flex-col md:flex-row gap-6 text-sm font-medium text-gray-700">
          {categories.map((cat, i) => (
            <Link href={"/"} key={i}>
              <li className="cursor-pointer hover:text-green-600 transition-colors">
                {cat}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}
