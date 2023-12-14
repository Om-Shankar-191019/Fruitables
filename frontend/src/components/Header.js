import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { FcMenu } from "react-icons/fc";
import { IoCloseOutline } from "react-icons/io5";
const Header = () => {
  const [showNavLinks, SetShowNavLinks] = useState(false);

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
          <div className="relative">
            <FaShoppingCart className="cursor-pointer" size={20} />
            <div className="absolute w-5 h-5 -top-3 -right-3 bg-theme-yellow flex items-center justify-center text-black rounded-full p-2">
              6
            </div>
          </div>
          <FaRegCircleUser className="cursor-pointer" size={20} />
        </div>

        {/* mobile */}
        {showNavLinks ? (
          <IoCloseOutline
            size={20}
            className="flex md:hidden cursor-pointer"
            onClick={() => SetShowNavLinks(false)}
          />
        ) : (
          <FcMenu
            className="flex md:hidden cursor-pointer"
            size={20}
            onClick={() => SetShowNavLinks(true)}
          />
        )}

        {showNavLinks && (
          <nav className="absolute right-4 sm:right-16 top-28 flex md:hidden flex-col-reverse gap-4 shadow-md py-4 pl-4 pr-8 duration-150">
            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-theme-green border-b-2 border-theme-green"
                    : null
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-theme-green border-b-2 border-theme-green"
                    : null
                }
              >
                About
              </NavLink>
              <NavLink
                to="/shop"
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
                className={({ isActive }) =>
                  isActive
                    ? "text-theme-green border-b-2 border-theme-green"
                    : null
                }
              >
                Blogs
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-theme-green border-b-2 border-theme-green"
                    : null
                }
              >
                Contact
              </NavLink>
            </div>
            <div className="flex  items-center justify-between gap-10">
              <div className="relative">
                <FaShoppingCart className="cursor-pointer" size={20} />
                <div className="absolute w-5 h-5 -top-3 -right-3 bg-theme-yellow flex items-center justify-center text-black rounded-full p-2">
                  6
                </div>
              </div>
              <FaRegCircleUser className="cursor-pointer -mr-4" size={20} />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
