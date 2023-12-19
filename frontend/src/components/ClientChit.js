import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
const ClientChit = (client) => {
  const { clientName, profession, image, rating, description } = client;
  const ratingArray = new Array(rating).fill(null);
  return (
    <div className="flex flex-col gap-y-4 min-w-[312px] md:min-w-[412px]  p-6 bg-blueish rounded-md ">
      <p className="text-slate-gray border-b border-theme-yellow pb-4">
        {description}
      </p>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="w-20 h-24 rounded-md">
            <img
              className="w-full h-full rounded-md"
              src={image}
              alt="client-img"
            />
          </div>
          <div className="flex flex-col justify-between">
            <h4 className="text-xl text-dark-gray capitalize font-semibold">
              {clientName}
            </h4>
            <p className="text-slate-gray">{profession}</p>
            <div className="flex gap-1">
              {ratingArray.map((item, index) => (
                <FaStar
                  className="text-theme-green"
                  key={`starRating - ${index}`}
                />
              ))}
            </div>
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
