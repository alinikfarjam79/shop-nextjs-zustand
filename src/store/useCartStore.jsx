import { create } from "zustand";
import { toast } from "react-toastify";

export const useCartStore = create((set, get) => ({
  cartItems: [],
  loading: false,

  setLoading: (value) => set({ loading: value }),

  addToCart: (product) => {
    set({ loading: true });

    const existingItem = get().cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      set({
        cartItems: get().cartItems.map((item) =>
          item.id === product.id
            ? { ...item, cartQuantity: item.cartQuantity + 1 }
            : item
        ),
        loading: false,
      });
    } else {
      set({
        cartItems: [...get().cartItems, { ...product, cartQuantity: 1 }],
        loading: false,
      });
      toast.success(`به سبد خرید اضافه شد!`);
    }
    console.log(get().cartItems);
  },
  removeFromCart: (id) => {
    set({
      cartItems: get().cartItems.filter((item) => item.id !== id),
    });
    toast.info(` از سبد خرید حذف شد.`);
  },
  decreaseQuantity: (id) => {
    set({
      cartItems: get()
        .cartItems.map((item) =>
          item.id === id && item.cartQuantity >= 1
            ? { ...item, cartQuantity: item.cartQuantity - 1 }
            : item
        )
        .filter((item) => item.cartQuantity > 0),
    });
  },
  checkOut: () => {
    if (get().cartItems.length == 0) {
      toast.error("سبد شما خالی است");
      return;
    }
    toast.success(`با موفقیت پرداخت شد`);
    set({ cartItems: [] });
  },
  totalPrice: () => {
    return get().cartItems.reduce(
      (acc, item) => acc + parseInt(item.price) * item.cartQuantity,
      0
    );
  },
}));
