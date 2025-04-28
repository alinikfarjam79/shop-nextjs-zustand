"use client";

import { formatTomanFa } from "@/helper/functions";
import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";

export default function PaymentPage() {
  const router = useRouter();
  const { totalPrice, checkOut } = useCartStore();
  const [formData, setFormData] = useState({
    cardNumber: "",
    password: "",
    cvv2: "",
    expiryMonth: "",
    expiryYear: "",
  });
  const [errors, setErrors] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cardNumber") {
      let rawValue = value.replace(/\D/g, "");
      rawValue = rawValue.substring(0, 16);
      const spaced = rawValue.match(/.{1,4}/g)?.join(" ") || "";
      setFormData({ ...formData, cardNumber: spaced });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateCardNumber = (number) => {
    if (number.length == 19) {
      return true;
    }
    return false;
  };

  const validateForm = () => {
    const rawCardNumber = formData.cardNumber.replace(/\s/g, "");

    if (!validateCardNumber(formData.cardNumber)) {
      toast.error("شماره کارت نا معتبر");
      setErrors(true);
      return;
    }
    if (formData.password.length < 4) {
      toast.error("رمز دوم باید حداقل ۴ رقم باشد.");
      setErrors(true);

      return;
    }
    if (!/^\d{3,4}$/.test(formData.cvv2)) {
      toast.error("کد CVV2 باید ۳ یا ۴ رقم باشد.");
      setErrors(true);

      return;
    }
    if (!formData.expiryMonth || !formData.expiryYear) {
      toast.error("لطفاً تاریخ انقضا را کامل انتخاب کنید.");
      setErrors(true);

      return;
    }
    const now = new Date();
    const expiry = new Date(
      2000 + parseInt(formData.expiryYear),
      parseInt(formData.expiryMonth) - 1,
      1
    );
    setErrors(false);

    if (expiry < now) {
      return "تاریخ انقضا گذشته است.";
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (errors) {
      return;
    } else {
      checkOut();
      setTimeout(() => {
        router.push("/");
      }, 1000);
      console.log("اطلاعات پرداخت:", formData);
    }
  };

  return (
    <div
      dir="rtl"
      className="min-h-screen flex items-center justify-center bg-gray-100 p-4"
    >
      <div className="max-w-md w-full bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          درگاه پرداخت بانکی
        </h2>
        {errors && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4 text-center">
            {errors}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* شماره کارت */}
          <div>
            <label className="block mb-1 text-sm font-medium">شماره کارت</label>
            <input
              type="text"
              name="cardNumber"
              maxLength={19}
              value={formData.cardNumber}
              onChange={handleChange}
              inputMode="numeric"
              dir="ltr"
              className="w-full border  border-gray-300 rounded-lg p-2 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="•••• •••• •••• ••••"
            />
          </div>

          {/* رمز دوم */}
          <div className="relative">
            <label className="block mb-1 text-sm font-medium">
              رمز دوم (رمز اینترنتی)
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              maxLength={8}
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 text-left pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div
              className="absolute right-2 top-9 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={22} />
              ) : (
                <AiOutlineEye size={22} />
              )}
            </div>
          </div>

          {/* CVV2 و تاریخ انقضا */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-1 text-sm font-medium">CVV2</label>
              <input
                type="text"
                name="cvv2"
                maxLength={4}
                value={formData.cvv2}
                onChange={handleChange}
                inputMode="numeric"
                pattern="\d*"
                className="w-full border border-gray-300 rounded-lg p-2 text-left focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium">
                تاریخ انقضا
              </label>
              <div className="flex gap-2">
                <select
                  name="expiryMonth"
                  value={formData.expiryMonth}
                  onChange={handleChange}
                  className="w-1/2 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">ماه</option>
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={String(i + 1).padStart(2, "0")}>
                      {String(i + 1).padStart(2, "0")}
                    </option>
                  ))}
                </select>
                <select
                  name="expiryYear"
                  value={formData.expiryYear}
                  onChange={handleChange}
                  className="w-1/2 border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">سال</option>
                  {Array.from({ length: 10 }, (_, i) => {
                    let year = 1404 + i;
                    return (
                      <option key={i} value={String(year)}>
                        {String(year)}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          <div className="w-full">
            <p>{formatTomanFa(totalPrice())}</p>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg text-lg mt-4"
          >
            پرداخت
          </button>
        </form>
      </div>
    </div>
  );
}
