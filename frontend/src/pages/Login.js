import React, { useState } from "react";

import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import { BsEmojiSmileUpsideDown } from "react-icons/bs";

import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login } from "../axios";
import { loginAction } from "../redux/slices/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      try {
        const response = await login({ email, password });
        const userInfo = {
          username: response.data.user.username,
          email,
          image: response.data.user.image,
        };

        dispatch(loginAction(userInfo));
        toast(`Welcome ${response.data.user.username}`);
        navigate("/");
        setData(() => {
          return {
            email: "",
            password: "",
          };
        });
      } catch (error) {
        // console.log(error);
        toast(
          error.response.data.message === undefined
            ? error.message
            : error.response.data.message
        );
      }
    } else {
      toast("Please enter all fields");
    }
  };

  return (
    <div className="p-3 md:p-4">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
        <h1 className="text-center text-2xl font-bold">Login</h1>

        <form className="w-full py-3 flex flex-col" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            value={data.email}
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className=" w-full bg-slate-200 border-none outline-none "
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="w-full max-w-[150px] m-auto  bg-theme-green hover:bg-theme-yellow cursor-pointer  text-white hover:text-theme-green  text-xl font-medium text-center py-1 rounded-full mt-4 transition-all">
            Login
          </button>
        </form>
        <p className="text-left text-sm mt-2">
          Don't have an account ?{" "}
          <Link to={"/signup"} className="text-theme-green underline">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
