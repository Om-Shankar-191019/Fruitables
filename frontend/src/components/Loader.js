import React from "react";

const Loader = () => {
  return (
    <div className=" text-center py-12">
      <div
        className="animate-spin inline-block w-16 h-16 border-[3px] border-current border-t-transparent text-theme-green rounded-full"
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
