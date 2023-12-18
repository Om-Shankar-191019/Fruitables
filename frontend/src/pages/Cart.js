import React, { useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Product 1",
      category: "Category A",
      price: 20,
      count: 1,
      image:
        "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Product 2",
      category: "Category B",
      price: 30,
      count: 1,
      image:
        "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Product 2",
      category: "Category B",
      price: 30,
      count: 1,
      image:
        "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Product 2",
      category: "Category B",
      price: 30,
      count: 1,
      image:
        "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      name: "Product 2",
      category: "Category B",
      price: 30,
      count: 1,
      image:
        "https://images.pexels.com/photos/708777/pexels-photo-708777.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    // Add more items as needed
  ]);

  const removeFromCart = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const increaseItemCount = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId ? { ...item, count: item.count + 1 } : item
    );
    setCartItems(updatedCart);
  };

  const decreaseItemCount = (itemId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === itemId && item.count > 1
        ? { ...item, count: item.count - 1 }
        : item
    );
    setCartItems(updatedCart);
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );
  const shippingCharges = 10; // You can set your own shipping charges

  return (
    <div className="container mx-auto my-10 p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border-b border-gray-300 py-6"
            >
              <div className="flex ">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 mt-2 object-cover rounded mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold pt-0">{item.name}</h3>
                  <div className="flex items-center gap-2 py-2 ">
                    {" "}
                    <button
                      onClick={() => decreaseItemCount(item.id)}
                      className="text-gray-500 hover:text-gray-700 cursor-pointer border border-slate-gray px-1"
                    >
                      <FiMinus />
                    </button>
                    <span className="mx-2 ">{item.count} kg</span>
                    <button
                      onClick={() => increaseItemCount(item.id)}
                      className="text-gray-500 hover:text-gray-700 cursor-pointer border border-slate-gray px-2 "
                    >
                      <FaPlus />
                    </button>
                  </div>
                  <p className="text-dark-gray">₹ {item.price} / kg</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-y-4 ">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 cursor-pointer ml-4"
                >
                  <MdDelete />
                </button>
                <div>
                  <span className="text-lg">Total: ₹ {3442} </span>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-4">
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Subtotal:</p>
              <p className="text-gray-600">${totalPrice}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Shipping:</p>
              <p className="text-gray-600">${shippingCharges}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-lg font-semibold">Total:</p>
              <p className="text-gray-600">${totalPrice + shippingCharges}</p>
            </div>
            <div className="mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 mr-2 rounded-md">
                Checkout
              </button>
              <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">
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
