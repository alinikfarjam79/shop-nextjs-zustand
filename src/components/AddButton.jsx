"use client";

import { useCartStore } from "@/store/useCartStore";
import { LiaCartPlusSolid } from "react-icons/lia";

function AddButton({ product }) {
  const { addToCart, loading } = useCartStore();
  return (
    <button
      onClick={() => addToCart(product)}
      className="w-[90%] text-white font-bold cursor-pointer flex items-center justify-center gap-2 bg-green-600 py-3 rounded mt-4"
    >
      {loading ? (
        "..."
      ) : (
        <>
          <p>افزودن به سبد خرید</p>
          <LiaCartPlusSolid className="text-2xl" />
        </>
      )}
    </button>
  );
}

export default AddButton;
