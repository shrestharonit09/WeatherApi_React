import React, {useState,useEffect,useContext } from "react";
import Logo from "../Images/News.svg";
import { NavLink } from "react-router-dom";

const Navbar =() => {
 
  return (
    <div className="w-full bg-gray-200 shadow-lg">

      <div className="flex justify-center">
        <div className="w-[90vw] flex justify-between px-4 py-5 ">
          <div>
            <img className="h-16 w-16" src={Logo} alt="logo" />
          </div>
          <div>
            <div className="flex gap-5 py-4">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400"
                    : "text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-400"
                    : "text-md text-gray-500 font-semibold hover:bg-gray-300 rounded-lg"
                }
                to="/weather"
              >
                Weather
              </NavLink>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Navbar;
