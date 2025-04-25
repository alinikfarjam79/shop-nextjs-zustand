"use client";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const DropdownInput = ({ options = [], placeholder = "انتخاب کنید" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-64 text-right">
      <div
        className="border rounded-xl p-3 bg-white flex justify-between items-center cursor-pointer shadow-sm"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selected || placeholder}</span>
        <IoIosArrowDown
          className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </div>
      {isOpen && (
        <ul className="absolute z-10 mt-2 w-full bg-white border rounded-xl shadow-lg max-h-60 overflow-auto">
          {options.map((option, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(option)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownInput;
