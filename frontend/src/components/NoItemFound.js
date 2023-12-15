import React from "react";
import { noItemFoundImageUrl } from "../constants";

const NoItemFound = () => {
  return (
    <img
      className="h-60 w-64 object-cover object-top"
      src={noItemFoundImageUrl}
      alt="Product Image"
    />
  );
};

export default NoItemFound;
