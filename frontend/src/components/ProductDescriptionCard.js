import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/productSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const ProductDescriptionCard = (product) => {
  const { name, category, price, description, image } = product;
  const subCategory = product["sub-category"];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.user.currentUser);
  const handleAddToCart = () => {
    if (loggedInUser) dispatch(addToCart(product));
    else navigate("/login");
  };

  const handleBuyNow = () => {
    if (loggedInUser) {
      dispatch(addToCart(product));
      navigate("/cart");
    } else navigate("/login");
  };
  return (
    <div className="  mt-8">
      <div className="w-full  p-6 bg-white shadow-md flex flex-col sm:flex-row  ">
        {/* Product Image */}
        <div className="w-full sm:w-1/2 h-80">
          <img src={image} alt="Product" className="rounded-lg w-full h-full" />
        </div>

        {/* Product Details */}
        <div className="w-full  sm:w-1/2 sm:ml-8">
          <h2 className="text-2xl font-semibold mb-2 capitalize">{name}</h2>
          <p className="text-slate-gray mb-4 capitalize">
            {category}
            {subCategory ? ` (${subCategory}) ` : ""}
          </p>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-lg text-blue-500 mb-4">₹ {price} / kg</p>

          {/* Buttons */}
          <div className="flex space-x-4">
            <button
              className="bg-theme-green text-white px-4 py-2 rounded "
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button
              className="bg-theme-yellow text-black px-4 py-2 rounded "
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionCard;
