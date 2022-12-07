import React from "react";
import SvgIcon from "./SvgIcon";
import logo from "../assets/logo-transparent.png"

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full h-full px-2 xl:px-5 shadow-xl z-[100]">
      
      <img src={logo} alt="" width={125} height={50}/>
      
      <ul className="flex justify-center gap-8">
        <li>
          <a href="#" className="lg:text-3xl text-lg">Home</a>
        </li>
        <li>
          <a href="#" className="lg:text-3xl text-lg">About</a>
        </li>
        {/* <li>
          <a href="#" className="lg:text-3xl text-lg">Sign In</a>
        </li> */}
      </ul>
    </div>
  );
};

export default Navbar;
