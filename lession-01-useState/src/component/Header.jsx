import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center relative">
        <div className="text-white font-bold text-xl">Your Logo</div>

        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:border-none">
            {isOpen ? <>✕</> : <>Menu</>}
          </button>
        </div>

        <div className={`mt-8 lg:flex ${isOpen ? "block" : "hidden"}`}>
          <NavLink
            to="/"
            className="block lg:inline-block mt-4 lg:mt-0 text-white hover:text-gray-300 mr-4">
            Home
          </NavLink>
          <NavLink
            to="about"
            className="block lg:inline-block mt-4 lg:mt-0 text-white hover:text-gray-300 mr-4">
            About
          </NavLink>
          <NavLink
            to="products"
            className="block lg:inline-block mt-4 lg:mt-0 text-white hover:text-gray-300 mr-4">
            Products
          </NavLink>
          <NavLink
            to="news"
            className="block lg:inline-block mt-4 lg:mt-0 text-white hover:text-gray-300">
            News
          </NavLink>
          <NavLink
            to="#"
            className="block lg:inline-block mt-4 lg:mt-0 text-white hover:text-gray-300">
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
