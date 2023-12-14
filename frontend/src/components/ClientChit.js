import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
const ClientChit = () => {
  return (
    <div className="flex flex-col gap-y-4 min-w-[312px] md:min-w-[412px]  p-6 bg-blueish rounded-md ">
      <p className="text-slate-gray border-b border-theme-yellow pb-4">
        Use this simple example of a testimonial based on a blockquote element
        and
      </p>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="w-20 h-24 rounded-md">
            <img
              className="w-full h-full rounded-md"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="client-img"
            />
          </div>
          <div className="flex flex-col justify-between">
            <h4 className="text-xl text-dark-gray capitalize font-semibold">
              client name
            </h4>
            <p className="text-slate-gray">profession</p>
            <FaStar className="text-theme-green" />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <FaQuoteRight size={28} className="text-theme-yellow" />
        </div>
      </div>
    </div>
  );
};

export default ClientChit;
