
import React from "react";
import { Link } from "react-router-dom";
const Nav = ({ searchQuery, setSearchQuery }) => {
  return (
    <nav className="bg-[#003049] text-white py-4 px-6 flex flex-wrap items-center justify-between">
      {/* Left Side: Profile-mapper */}
      <div className="text-lg font-semibold flex-shrink-0">Profile-mapper</div>

      {/* Middle: Search Bar */}
      <div className="w-full lg:w-auto flex-grow mt-4 lg:mt-0 lg:flex lg:justify-center">
        <input
          type="text"
          placeholder="Search (name or location)"
          className="w-full lg:w-1/3 px-4 py-2 rounded-lg text-gray-800 outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}  
        />
      </div>

      {/* Right Side: Links */}
      <div className="flex space-x-4 mt-4 lg:mt-0 flex-shrink-0">
      <Link
          to="/"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/login"
          className="hover:text-gray-300 transition-colors duration-200"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

