import React, { useState } from "react";

import NavOptions from "./NavOptions/NavOptions";
import { Link } from "react-router-dom";
import {FaArrowCircleDown, FaTimesCircle } from 'react-icons/fa';
const NavbarOne = () => {
  const [isDropdownOpen, setIsDropdropdonOpen] = useState(false);

  const toggleDropdown = ()=>{
    setIsDropdropdonOpen(prevState => !prevState);
  }
  return (
    <div>
      <div className="max-w-screen-xl mx-auto navbar bg-white  lg:opacity-70 p-6 lg:p-12 lg:fixed lg:z-30 rounded-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden" onClick={toggleDropdown}>
              {isDropdownOpen?(<FaTimesCircle className="h-5 w-5 text-red-500"></FaTimesCircle>):(<svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>)}
              
            </label>
            {isDropdownOpen && ( <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-96"
            >
              <div className="flex flex-col">
                <NavOptions></NavOptions>
              </div>
            </ul>)}
           
          </div>
          <div>
            <div>
              <img
                src="	https://medicare.bold-themes.com/clinic/wp-content/uploads/sites/2/2018/03/medicare-logo-color.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavOptions></NavOptions>
          </ul>
        </div>

        <div className="navbar-end">
          {/* <a className="btn btn-outline bg-cyan-500 text-white hover:bg-cyan-400">Login</a> */}
          <Link to="/login">
            <div className="avatar">
              <div className="w-10 rounded-full border-4 border-cyan-400">
                <img src="https://images.unsplash.com/photo-1484863137850-59afcfe05386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHVzZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
              </div>
            </div>
          </Link>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn m-2 btn-xs lg:btn-sm bg-white border-2 border-cyan-400">
              <FaArrowCircleDown></FaArrowCircleDown>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-20 lg:w-52"
            >
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link>Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarOne;
