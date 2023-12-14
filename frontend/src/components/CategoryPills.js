import React from "react";

const CategoryPills = ({ category, handleFiltrization, isActive }) => {
  return (
    <div
      className={`${
        isActive === category ? "bg-theme-yellow text-primary" : "bg-primary"
      } w-32 text-center px-4 py-2 text-gray-500 rounded-full cursor-pointer capitalize font-semibold `}
      onClick={() => handleFiltrization(category)}
    >
      <span>{category}</span>
    </div>
  );
};

export default CategoryPills;
