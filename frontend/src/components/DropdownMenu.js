import React, { useState } from "react";

const DropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-left z-10 outline-none">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md "
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        Options
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isDropdownOpen && (
        <div
          className="absolute right-0 mt-2 space-y-2 bg-white border border-gray-300 rounded-md shadow-md"
          aria-labelledby="options-menu"
        >
          <button
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={toggleDropdown}
          >
            Action 1
          </button>
          <button
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={toggleDropdown}
          >
            Action 2
          </button>
          <button
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={toggleDropdown}
          >
            Action 3
          </button>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
