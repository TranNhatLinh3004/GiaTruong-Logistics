import React, { useState } from "react";

import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

function AccordionItem({ title, children, isOpen, onClick }) {
  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-4 px-4 text-left focus:outline-none"
        onClick={onClick}
      >
        <span className="font-medium text-lg">{title}</span>
        {isOpen ? (
          <BsChevronUp className="text-red-500 flex-shrink-0" size={24} />
        ) : (
          <BsChevronDown className="text-red-500 flex-shrink-0" size={24} />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="p-4  text-[18px] text-black">{children}</div>
      </div>
    </div>
  );
}

export default AccordionItem;
