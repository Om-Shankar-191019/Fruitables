import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/productSlice";
import toast from "react-hot-toast";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { eitherZeroOrOne, exaggeratedPrice, getRandomNumber } from "../utility";

const ShopProductCard = (item) => {
  const { name, price, image, category, _id } = item;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.user.currentUser);
  const handleAddToCart = () => {
    if (loggedInUser) dispatch(addToCart(item));
    else navigate("/login");
    // toast(`${name} added to cart`);
  };

  return (
    <div className="mx-auto mt-11 w-80 sm:w-52 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
      <Link to={`/description/${_id}`}>
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
          </div>
        </div>
      </Link>
      <div className=" px-4">
        <button
          onClick={handleAddToCart}
          className="mt-2 mb-4 px-3 py-1 text-sm  rounded-full border-2 border-theme-yellow bg-theme-yellow text-black font-semibold hover:text-white hover:bg-theme-green duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ShopProductCard;
