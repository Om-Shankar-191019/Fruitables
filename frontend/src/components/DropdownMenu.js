import React, { useState } from "react";
import { filterCategories } from "../constants";

const DropdownMenu = ({ handleFilter, currentAppliedFilter }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleFilterWithToggle = (filter_tag) => {
    toggleDropdown();
    handleFilter(filter_tag);
  };

  return (
    <div className="relative inline-block text-left z-10 outline-none w-44">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex capitalize justify-between w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md "
        id="options-menu"
        aria-haspopup="true"
        aria-expanded="true"
      >
        {currentAppliedFilter}
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
          className="w-44 absolute left-0 mt-2 space-y-2  bg-white border border-gray-300 rounded-md shadow-lg"
          aria-labelledby="options-menu"
        >
          {filterCategories.map((item, index) => (
            <button
              key={`dropdown-${index}`}
              className="block whitespace-nowrap  w-full px-12 py-2 text-sm text-gray-700 hover:bg-theme-yellow hover:text-white capitalize "
              onClick={() => handleFilterWithToggle(item)}
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
