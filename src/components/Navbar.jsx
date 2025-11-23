import React, { useContext } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import { HiOutlineUserCircle } from "react-icons/hi2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/", { replace: true });
      })
      .catch(() => {});
  };

  return (
    <div className="navbar backdrop-blur-md bg-white/30 sticky top-0 z-50 px-2 sm:px-20 border-b border-green-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-500 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            {user && (
              <>
                <li>
                  <NavLink to="/profile">Profile</NavLink>
                </li>
                <li>
                  <Link to={"/"} onClick={handleSignOut} className="">
                    Sign Out
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>

        <Link to="/" className="text-xl font-bold text-[#3DB66F]">
          SkillSwap
        </Link>
      </div>

      <div className="navbar-end gap-5">
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-5 px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            {user && (
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
            )}
          </ul>
        </div>

        {user ? (
          <>
            <div
              className="tooltip tooltip-bottom"
              data-tip={user?.displayName || "User"}
            >
              <Link to={"/profile"}>
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="profile"
                    className="w-10 h-10 rounded-full object-cover cursor-pointer"
                  />
                ) : (
                  <HiOutlineUserCircle className="text-3xl text-gray-700 cursor-pointer" />
                )}
              </Link>
            </div>
            <Link
              to={"/"}
              onClick={handleSignOut}
              className="hidden sm:flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-md text-[#3DB66F] font-bold btn transition-all duration-300"
            >
              Sign Out
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="btn bg-[#3DB66F] text-white">
              Login
            </Link>
            <Link to="/signup" className="btn bg-[#3DB66F] text-white">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
