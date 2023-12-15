import React from "react";
import { allFeatures } from "../constants";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <section className="flex flex-wrap items-center justify-around gap-y-8 lg:justify-between mx-4 my-20 sm:mx-16">
      {allFeatures.map((item, index) => (
        <FeatureCard
          key={`features-${index}`}
          Icon={item.Icon}
          feature={item.feature}
          description={item.description}
        />
      ))}
    </section>
  );
};

export default Features;
