import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";
const Topbar = () => {
  return (
    <div className="flex justify-between items-center bg-theme-green py-2 sm:py-4 px-4 mx-4 sm:mx-16 rounded-md ">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2 ">
          <IoLocationSharp className="text-theme-yellow" />
          <span className="text-primary ">Patna, India</span>
        </div>
        <div className="hidden sm:flex items-center gap-2  ">
          <MdEmail className="text-theme-yellow" />
          <span className="text-primary">examplemail@mail.com</span>
        </div>
      </div>
      <div className="hidden lg:flex text-primary">
        <Link to="#" className="hover:text-theme-yellow duration-200">
          Privacy Policy
        </Link>
        <span className="px-2">/</span>
        <Link to="#" className="hover:text-theme-yellow duration-200">
          Terms of Use
        </Link>
        <span className="px-2">/</span>
        <Link to="#" className="hover:text-theme-yellow duration-200">
          Sales and Refund
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
