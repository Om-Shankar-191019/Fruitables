import React, { useRef } from "react";
import ClientChit from "./ClientChit";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
const Testimonial = () => {
  const slideCardRef = useRef();

  const slideNext = () => {
    slideCardRef.current.scrollLeft += 380;
  };
  const slidePrev = () => {
    slideCardRef.current.scrollLeft -= 380;
  };
  return (
    <div className="mx-4 sm:mx-16 py-24 flex flex-col  items-center">
      <h3 className="text-xl text-theme-green mb-2 font-semibold">
        Our Testimonial
      </h3>
      <h2 className="text-4xl font-bold text-dark-gray mb-4">
        Our Client Saying!
      </h2>
      <div className="flex gap-4 justify-end w-full">
        <button
          onClick={slidePrev}
          className="px-4 py-1 rounded-full border border-theme-yellow mb-8 text-theme-green font-semibold hover:text-white hover:bg-theme-yellow duration-200"
        >
          <IoIosArrowRoundForward className="text-theme-green" />
        </button>
        <button
          onClick={slideNext}
          className="px-4 py-1 rounded-full border border-theme-yellow mb-8 text-theme-green font-semibold hover:text-white hover:bg-theme-yellow duration-200"
        >
          <IoIosArrowRoundBack className="text-theme-green " />
        </button>
      </div>
      <div
        className="flex w-full overflow-scroll scrollbar-none  scroll-smooth transition-all gap-8"
        ref={slideCardRef}
      >
        <ClientChit />
        <ClientChit />
        <ClientChit />
        <ClientChit />
        <ClientChit />
        <ClientChit />
        <ClientChit />
        <ClientChit />
        <ClientChit />
      </div>
    </div>
  );
};

export default Testimonial;
