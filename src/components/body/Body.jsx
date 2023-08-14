import React from "react";

const Body = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-700">
      <div className="flex flex-col items-center justify-start h-full p-8">
        <h1 className="mb-4 text-4xl font-bold text-red-200 transition duration-300">
          Welcome to Our{" "}
          <span className="transition duration-300 cursor-pointer hover:text-red-400">
            Website
          </span>
        </h1>
        <div className="flex items-start py-5 space-x-4">
          <img
            src="A5.jpg"
            alt=""
            className="flex rounded-full shadow-lg w-60 h-60"
          />
          <p className="text-red-400 transition duration-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac
            nulla eu ligula fermentum condimentum nec at lorem. Fusce ut
            vestibulum odio. Nullam nec ex nec urna malesuada bibendum Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed ac nulla eu
            ligula fermentum condimentum nec at lorem. Fusce ut vestibulum odio.
            Nullam nec ex nec urna malesuada bibendum.
          </p>
        </div>
      </div>
      <footer className="flex flex-col items-center justify-center w-full py-2 text-center text-gray-400 transition duration-300 bg-gray-900 hover:text-red-400">
        <p>&copy; {new Date().getFullYear()} IaconLabs. All rights reserved.</p>
        <p>
          Made with ❤️ by{" "}
          <span className="cursor-pointer hover:text-white">breeze</span>
        </p>
      </footer>
    </div>
  );
};

export default Body;
