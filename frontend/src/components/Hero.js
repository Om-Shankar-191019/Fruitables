import React from "react";
import Slider from "./Slider";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const handleShopNow = () => {
    navigate("/shop");
  };
  return (
    <section className="w-full pt-16 pb-20 sm:pt-20 sm:pb-24 px-4 sm:px-16 bg-primary">
      <div className="flex flex-col lg:flex-row justify-between ">
        <div className="flex flex-col gap-4 w-full lg:w-3/5 pr-24 lg:pr-12">
          <h3 className="text-theme-yellow text-xl font-semibold">
            100% Natural
          </h3>
          <h1 className="text-theme-green text-4xl leading-snug sm:text-6xl font-bold sm:leading-tight">
            Organic Veggies & Fresh Fruits
          </h1>
          <div className="pt-4">
            <button
              onClick={handleShopNow}
              className="px-6 py-2 border-2 border-theme-yellow bg-theme-green text-primary rounded-full hover:bg-theme-yellow hover:text-theme-green duration-200 hover:border-theme-green"
            >
              Shop Now
            </button>
          </div>
        </div>
        <div className="flex flex-1 pt-12 z-1">
          <Slider />
        </div>
      </div>
    </section>
  );
};

export default Hero;
