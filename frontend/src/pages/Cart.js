import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { PiMinusThin } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemCount,
  deleteItem,
  increaseItemCount,
} from "../redux/slices/productSlice";
import NoItemFound from "../components/NoItemFound";
import { shippingCharges } from "../constants";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.products.cartItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const subTotal = cartItems.reduce((acc, item) => acc + item.totalPrice, 0);
  const grandTotal = subTotal + shippingCharges;

  const handleContinueShopping = () => {
    navigate("/shop");
  };

  const handleCheckout = () => {};

  return (
    <div className="container mx-auto my-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="w-full flex justify-center">
          <NoItemFound />
        </div>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item._id}
              className="flex justify-between items-center border-b border-gray-300 py-6"
            >
              <div className="flex ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 mt-2 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold pt-0 capitalize">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 py-2 ">
                    {" "}
                    <button
                      onClick={() => dispatch(decreaseItemCount(item._id))}
                      className="text-black hover:text-gray-700 cursor-pointer border border-slate-gray px-1 rounded-full"
                    >
                      <PiMinusThin />
                    </button>
                    <span className="mx-2 ">{item.count} kg</span>
                    <button
                      onClick={() => dispatch(increaseItemCount(item._id))}
                      className="text-black hover:text-gray-700 cursor-pointer border border-slate-gray px-2 rounded-full"
                    >
                      <GoPlus />
                    </button>
                  </div>
                  <p className="text-dark-gray">₹ {item.price} / kg</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-y-4 ">
                <button
                  onClick={() => dispatch(deleteItem(item._id))}
                  className="text-red-500 hover:text-red-700 cursor-pointer ml-4"
                >
                  <MdDelete />
                </button>
                <div>
                  <span className="text-lg"> ₹ {item.totalPrice} </span>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-4">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Subtotal:</p>
              <p className="text-gray-600">₹ {subTotal}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Shipping:</p>
              <p className="text-gray-600">₹ {shippingCharges}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Total:</p>
              <p className="text-gray-600">₹ {grandTotal}</p>
            </div>
            <div className="mt-4">
              <button
                className="bg-theme-green text-white px-4 py-2 mr-2 rounded-md"
                onClick={handleCheckout}
              >
                Checkout
              </button>
              <button
                className="bg-theme-yellow text-gray-700 px-4 py-2 rounded-md"
                onClick={handleContinueShopping}
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
