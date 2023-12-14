import React from "react";

const FeatureCard = ({ Icon, feature, description }) => {
  return (
    <div className="px-4 py-6  bg-primary flex flex-col items-center gap-2 rounded-md">
      <div className="bg-theme-yellow rounded-full p-4 my-4">
        <Icon className="text-primary" size={52} />
      </div>
      <h3 className="text-xl font-semibold text-dark-gray">{feature}</h3>
      <p className="text-slate-gray">{description}</p>
    </div>
  );
};

export default FeatureCard;
