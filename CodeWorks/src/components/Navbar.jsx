import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/icons8-c-ios-17-filled-32.png'

function Navbar() {
  return (
    <header className="z-50 top-0 sticky bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/" className="text-white text-[35px] font-mono flex gap-2 justify-center items-center">
              <img src={logo} alt="" className="h-[32px] w-[32px]"/>
              CodeWorks
            </Link>
          </div>
          <div className="flex space-x-4">
            <NavLink
              to="/"
              className="text-gray-300 text-xl font-mono hover:text-white transition duration-300  "
            >
              Home
            </NavLink>
            <NavLink
              to="/codespace"
              className="text-gray-300 hover:text-white transition duration-300 text-xl font-mono"
            >
              CodeSpace
            </NavLink>
            <NavLink
              to="/devspace"
              className="text-gray-300 hover:text-white transition duration-300 text-xl font-mono"
            >
              DevSpace
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
