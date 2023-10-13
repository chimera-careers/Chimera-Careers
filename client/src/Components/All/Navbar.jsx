import React, { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full flex items-center justify-around sticky border-b shadow-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
        onClick={() => {
          setIsMenuOpen(!isMenuOpen);
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
        />
      </svg>
      <Link to="/">
        <img src={Logo} alt="" className="w-32 h-20" />
      </Link>

      {isMenuOpen ? (
        <div className="fixed top-0 left-0 h-full w-80 bg-gray-300 flex  justify-center pt-8">
          <div className="w-72 bg-indigo-900 h-56 rounded-xl flex flex-col justify-center items-center">
            <div className="text-white mt-4 flex flex-col ">
              <p>Hello & Welcome</p>
              <Link to="/register">
                <button className="border p-2 mt-5 rounded-lg w-40 ">
                  Register
                </button>
              </Link>
            </div>
            <Link to="/signin">
              <div className="flex flex-row gap-3 itmes-center mt-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6  text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>
                <button className="text-white">Signin</button>
              </div>
            </Link>
            <div className="flex flex-row gap-3 itmes-center mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <button className="text-white">Admin Login</button>
            </div>
          </div>
        </div>
      ) : null}

      <div className="hidden md:flex items-center gap-10">
        <Link to="/">Home</Link>
        <Link to="/all-jobs">All Jobs</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/placements">Placements</Link>
        <Link to="/testimonials">Testimonials</Link>
      </div>

      <div className="w-0.5 h-6 bg-slate-400"></div>

      <div className="hidden md:flex gap-8 items-center">
        <Link to="/signin" className="flex flex-row gap-1">
          <button>Signin</button>
        </Link>
        <Link to="/register">
          <button className="text-red-600">Register</button>
        </Link>
        <Link to="/admin-login">
          <button>Admin Login</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
