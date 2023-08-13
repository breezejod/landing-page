import React from "react";

const Nav = () => {
  return (
    <nav className="bg-gray-700 p-4">
      <div className="flex mb-4 justify-between">
        <div className="flex justify-start ">
          <p className="text-red-200 text-xl font-bold mr-20 cursor-pointer">
            Landing Page
          </p>
        </div>

        <div className="flex justify-end items-end ">
          <ul className="flex space-x-2 items-center cursor-pointer justify-end">
            <li className="justify-end text-red-200 hover:text-black hover:bg-white hover:shadow-lg transition-all p-2 rounded-full hover:rounded-full">
              Home
            </li>
            <li className="text-red-200 hover:text-black hover:bg-white hover:shadow-lg transition-all p-2 rounded-full hover:rounded-full">
              Contact
            </li>
            <li className="text-red-200 hover:text-black hover:bg-white hover:shadow-lg transition-all p-2 rounded-full hover:rounded-full">
              About Us
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
