import React from "react";

const Nav = () => {
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <ul className="flex space-x-4 flex-wrap">
        <li className="text-black">Home</li>
        <li className="text-black">Contact</li>
        <li className="text-black">About Us</li>
      </ul>
    </nav>
  );
};

export default Nav;
