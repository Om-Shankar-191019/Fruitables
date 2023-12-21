import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { truncateString } from "../utility";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/slices/productSlice";
import toast from "react-hot-toast";
const ProductCard = (item) => {
  const { image, name, description, price, _id } = item;
  const truncateDescription = truncateString(45, description);
  const loggedInUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddToCart = () => {
    if (loggedInUser) dispatch(addToCart(item));
    else navigate("/login");
    // toast(`${name} added to cart`);
  };
  return (
    <div className="flex flex-col w-64 items-center gap-4 rounded-md border-1 border-slate-gray shadow-md hover:shadow-2xl duration-300">
      <Link to={`/description/${_id}`}>
        <div className="flex flex-col items-center gap-2">
          <div className="h-40 w-full mb-4">
            <img
              src={image}
              alt="image"
              className="w-full h-full overflow-hidden rounded-t-md "
            />
          </div>
          <h5 className="text-2xl  text-dark-gray font-bold capitalize px-4">
            {name}
          </h5>
          <p className="text-slate-gray text-center px-4">
            {truncateDescription}
          </p>
          <span className="text-dark-gray font-semibold px-4">
            ₹ {price} / kg
          </span>
        </div>
      </Link>
      <button
        onClick={handleAddToCart}
        className="px-4 py-2  rounded-full border-2 border-theme-yellow mb-8 text-theme-green font-semibold hover:text-white hover:bg-theme-yellow duration-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
