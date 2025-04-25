"use client";

import { formatTomanFa } from "@/helper/functions";
import { useCartStore } from "@/store/useCartStore";
import { FiTrash2 } from "react-icons/fi";

function Cart() {
  const { cartItems, totalPrice, checkOut } = useCartStore();
  return (
    <div className="w-full flex flex-col p-5">
      <p className="text-2xl font-bold mb-4">سبد خرید</p>
      <div className="w-full flex flex-col lg:flex-row justify-center gap-4">
        <div className="lg:w-[75%] w-full  flex flex-col  p-3">
          {/*start banner */}
          <div className="hidden md:w-full h-32 rounded-xl border border-gray-400/50 md:flex bg-gradient-to-r from-white to-[#a7b5d8]">
            <div className="w-[30%] flex flex-col items-center justify-center text-right px-7 gap-3 *:text-white">
              <p className="text-right w-full text-2xl font-bold">خدمات ویژه</p>
              <p className="text-right w-full">
                خدمات ویژه‌ ما در پلازا دیجیتال
              </p>
            </div>
            <div className="w-[68%] flex flex-col justify-center gap-3 px-5 *:text-blue-900 font-medium *:text-sm">
              <p>( خرید اقساطی ) ۱۸ماهه بدون ضامن</p>
              <p>ضمانت ویژه ۱۴ روز مهلت بازگشت</p>
              <p>ارسال رایگان برای تهران</p>
            </div>
          </div>
          {/* finish banner */}
          {/* list of banner */}
          <div className="w-full flex flex-col justify-center items-center gap-4 mt-3">
            {cartItems.length ? (
              cartItems.map((product) => {
                return <_itemCart item={product} key={product.id} />;
              })
            ) : (
              <p className="text-2xl mt-3">سبد خرید شما خالی است!</p>
            )}
          </div>
        </div>
        <div className="lg:w-[20%] w-full  flex p-3">
          <div className="w-full h-fit flex flex-col p-5 gap-6 border border-gray-400/50 rounded-xl sticky top-2">
            <div className="flex flex-col gap-2 justify-between items-center">
              <p>جمع سبد خرید</p>
              <p className="flex gap-1">
                <span>
                  {cartItems.length > 0
                    ? formatTomanFa(totalPrice())
                    : "سبد خرید خالی است"}
                </span>
              </p>
            </div>
            <button
              className="w-full bg-green-800 py-2.5 text-white rounded-xl cursor-pointer"
              onClick={() => checkOut()}
            >
              تسویه حساب
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function _itemCart({ item }) {
  const { decreaseQuantity, addToCart, removeFromCart } = useCartStore();
  return (
    <div className="w-full flex  border rounded-xl gap-2 border-gray-400/50">
      <div className="w-[50%] h-full flex items-center justify-center  md:w-72">
        <img src={item.image[0]} alt="" />
      </div>
      <div
        className=" flex flex-col  p-6 gap-6 "
        // style={{ width: "calc(100% - 300px)" }}
      >
        <p className="text-sm md:text-2xl">{item.Persian_title}</p>
        <p>{item.price}</p>
        <button
          className="w-fit flex items-center gap-1 cursor-pointer"
          onClick={() => removeFromCart(item.id)}
        >
          <FiTrash2 />
          حذف
        </button>
        <div className="flex w-fit items-center gap-4 p-1 px-3 rounded-lg bg-[#edf0f8] mt-2">
          <button
            className="text-xl text-gray-600 cursor-pointer"
            onClick={() => decreaseQuantity(item.id)}
          >
            -
          </button>
          <span className="text-base font-bold">{item.cartQuantity}</span>
          <button
            className="text-xl text-gray-600 cursor-pointer"
            onClick={() => addToCart(item)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
export default Cart;
