import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center p-5">
      <div className="bg-blue-900 text-white absolute left-10">Logo</div>
      <ul className="flex justify-center gap-8">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Sign In</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
