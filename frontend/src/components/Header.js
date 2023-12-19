import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FcMenu } from "react-icons/fc";
import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../redux/slices/userSlice";
import toast from "react-hot-toast";
const Header = () => {
  const [showNavLinks, SetShowNavLinks] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.products.cartItems);

  const loginUser = useSelector((state) => state.user.currentUser);

  const handleCloseModal = () => {
    SetShowNavLinks(false);
  };
  const goToLoginPage = () => {
    navigate("/login");
    SetShowNavLinks(false);
  };

  const handleLogout = () => {
    dispatch(logoutAction());
    SetShowNavLinks(false);
    toast("Successfully signed out");
  };

  const goToCartPage = () => {
    navigate("/cart");
    SetShowNavLinks(false);
  };

  return (
    <header className="px-4 sm:px-16 py-6 bg-white ">
      <div className=" flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-theme-green">Fruitables</h1>
        </div>

        {/* desktop */}
        <nav className="hidden md:flex items-center gap-8 text-slate-gray font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-theme-green border-b-2 border-theme-green" : null
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "text-theme-green border-b-2 border-theme-green" : null
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "text-theme-green border-b-2 border-theme-green" : null
            }
          >
            Blogs
          </NavLink>
        </nav>
        <div className="hidden md:flex items-center gap-6">
          <div className="relative" onClick={goToCartPage}>
            <FaShoppingCart className="cursor-pointer" size={24} />
            {cartItems.length > 0 && (
              <div className="absolute w-5 h-5 -top-3 -right-3 bg-theme-yellow flex items-center justify-center text-black rounded-full p-2">
                {cartItems.length}
              </div>
            )}
          </div>
          {loginUser && (
            <div
              className="flex gap-2 items-center  border-theme-green px-2 py-1 bg-primary cursor-pointer rounded-md"
              onClick={handleLogout}
            >
              <span>Log out</span>
              {loginUser.image ? (
                <div className="h-8 w-8 overflow-hidden rounded-full p-[1px] border border-theme-green">
                  <img
                    src={loginUser.image}
                    className="w-full h-full rounded-full"
                  />
                </div>
              ) : (
                <FaRegCircleUser className="cursor-pointer" size={24} />
              )}
            </div>
          )}

          {!loginUser && (
            <div
              className="flex gap-2 items-center  border-theme-green px-2 py-1 bg-primary cursor-pointer rounded-md"
              onClick={goToLoginPage}
            >
              <span>Login</span>
              <FaRegCircleUser className="cursor-pointer" size={24} />
            </div>
          )}
        </div>

        {/* mobile */}
        {showNavLinks ? (
          <IoCloseOutline
            size={32}
            className="flex md:hidden cursor-pointer text-dark-gray"
            onClick={() => SetShowNavLinks(false)}
          />
        ) : (
          <FcMenu
            className="flex md:hidden cursor-pointer"
            size={28}
            onClick={() => SetShowNavLinks(true)}
          />
        )}

        {showNavLinks && (
          <nav className="absolute right-4 sm:right-16 top-28 flex md:hidden flex-col-reverse gap-4 shadow-lg rounded-md py-4 pl-4 pr-8 duration-150 bg-primary">
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                onClick={handleCloseModal}
                className={({ isActive }) =>
                  isActive
                    ? "text-theme-green border-b-2 border-theme-green"
                    : null
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/shop"
                onClick={handleCloseModal}
                className={({ isActive }) =>
                  isActive
                    ? "text-theme-green  border-b-2 border-theme-green"
                    : null
                }
              >
                Shop
              </NavLink>
              <NavLink
                to="/blogs"
                onClick={handleCloseModal}
                className={({ isActive }) =>
                  isActive
                    ? "text-theme-green border-b-2 border-theme-green"
                    : null
                }
              >
                Blogs
              </NavLink>
            </div>
            <div className="flex  items-center justify-between gap-10">
              <div className="relative" onClick={goToCartPage}>
                <FaShoppingCart className="cursor-pointer" size={20} />
                {cartItems.length > 0 && (
                  <div className="absolute w-5 h-5 -top-3 -right-3 bg-theme-yellow flex items-center justify-center text-black rounded-full p-2">
                    {cartItems.length}
                  </div>
                )}
              </div>
              {loginUser && (
                <div
                  className="flex gap-2 items-center  border-theme-green px-2 py-1 bg-primary cursor-pointer rounded-md"
                  onClick={handleLogout}
                >
                  <span>Log out</span>
                  {loginUser.image ? (
                    <div className="h-8 w-8 overflow-hidden rounded-full p-[1px] border border-theme-green">
                      <img
                        src={loginUser.image}
                        className="w-full h-full rounded-full"
                      />
                    </div>
                  ) : (
                    <FaRegCircleUser className="cursor-pointer" size={24} />
                  )}
                </div>
              )}

              {!loginUser && (
                <div
                  className="flex gap-2 items-center  border-theme-green px-2 py-1 bg-primary cursor-pointer rounded-md"
                  onClick={goToLoginPage}
                >
                  <span>Login</span>
                  <FaRegCircleUser className="cursor-pointer" size={24} />
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
