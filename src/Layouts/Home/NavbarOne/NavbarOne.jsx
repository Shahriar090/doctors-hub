import React from "react";

import NavOptions from "./NavOptions/NavOptions";

const NavbarOne = () => {
  
  return (
    <div>
      <div className="navbar light shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
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
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-96"
            >
            <div className="flex flex-col">
            <NavOptions></NavOptions>
            </div>
            </ul>
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
          <ul className="menu menu-horizontal px-1"><NavOptions></NavOptions></ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default NavbarOne;
