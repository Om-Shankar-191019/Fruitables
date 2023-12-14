import React from "react";

const ShopProductCard = ({ name, price, image, category }) => {
  return (
    <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <img
        className="h-48 w-full object-cover object-center"
        src={image}
        alt="Product Image"
      />
      <div className="p-4">
        <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900 capitalize">
          {name}
        </h2>
        <p className="mb-2 text-base dark:text-gray-300 text-gray-700 capitalize">
          {category}
        </p>
        <div className="flex items-center">
          <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
            {price} / kg
          </p>
          <p className="text-base  font-medium text-gray-500 line-through dark:text-gray-300">
            $25.00
          </p>
          <p className="ml-auto text-base font-medium text-green-500">
            20% off
          </p>
        </div>
        <button className="mt-2 mb-2 px-3 py-1 text-sm  rounded-full border-2 border-theme-yellow bg-theme-yellow text-theme-green font-semibold hover:text-white hover:bg-theme-green duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShopProductCard;