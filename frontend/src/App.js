import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "./components/Topbar";
import Header from "./components/Header";
import { fetchAllProducts } from "./axios";
import { useDispatch } from "react-redux";
import { setAllProducts } from "./redux/slices/productSlice";
import { Toaster } from "react-hot-toast";

const App = () => {
  const dispatch = useDispatch();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const getAllProducts = async () => {
      try {
        const response = await fetchAllProducts();
        dispatch(setAllProducts(response.data.products));
      } catch (error) {
        console.log(error?.response?.data);
      }
    };

    getAllProducts();

    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <Topbar />
      <div
        className={`w-full sticky top-0 z-50 ${isSticky ? "shadow-xl" : ""}`}
      >
        <Header />
      </div>
      <Outlet />
      <Toaster />
    </div>
  );
};

export default App;
