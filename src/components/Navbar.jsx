import React from "react";
import { Link, NavLink } from "react-router";

const link = (
  <>
    <li>
      <NavLink to={"/"}>Home</NavLink>
    </li>
    <li>
      <NavLink to={"/about"}>About</NavLink>
    </li>
    <li>
      <NavLink to={"/profile"}>Profile</NavLink>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="navbar backdrop-blur-md bg-white/30 sticky top-0 z-50 shadow-sm px-2 sm:px-20">
      <div className="navbar-start">
        {/* Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>

        <Link
          to={"/"}
          className=" text-xl font-bold text-[#3DB66F]"
        >
          SkillSwap
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="flex justify-between items-center gap-5 px-1">{link}</ul>
      </div>

      <div className="navbar-end gap-5">
        <Link className="btn bg-[#3DB66F] text-white">Login</Link>
        <Link className="btn  bg-[#3DB66F] text-white">Sign Up</Link>
      </div>
    </div>
  );
};

export default Navbar;
