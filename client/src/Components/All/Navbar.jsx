import React from "react";
import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full  flex items-center justify-around sticky">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="" className="w-32 h-20 ml-10" />
        </Link>
      </div>

      <div className="hidden md:flex  items-center gap-10">
        <Link to="/" className="">
          Home
        </Link>
        <Link to="" className="">
          All Jobs
        </Link>
        <Link to="" className="">
          Categories
        </Link>

        <Link to="" className="">
          Placements
        </Link>
        <Link to="" className="">
          Testimonials
        </Link>
      </div>
      <div className="hidden md:flex gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>

        <input
          type="text"
          className="border-b focus:border-transparent focus:outline-none border-stone-400"
          placeholder="Find Jobs"
        />
      </div>

      <div className="hidden md:flex gap-2 items-center">
        <Link to="/signin" className="flex flex-row gap-1">
          <button>Signin</button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
      <div className="md:hidden">
        {isMenuOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 transition-all duration-1000 ease-in-out"
            onClick={()=>{
              setIsMenuOpen(!isMenuOpen)
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 md:hidden transition-all duration-1000 ease-in-out"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </div>
      {isMenuOpen ? (
        <div className="md:hidden absolute w-full h-screen top-10 right-0 flex flex-col  gap-10 items-center bg-slate-50 p-10 rounded-sm mt-8 transition-all duration-1000 ease-in-out">
          <Link to="/" className="">
            Home
          </Link>
          <Link to="" className="">
            All Jobs
          </Link>
          <Link to="" className="">
            Categories
          </Link>

          <Link to="" className="">
            Placements
          </Link>
          <Link to="" className="">
            Testimonials
          </Link>

          <Link to="/signin">
          <button className="bg-indigo-900 px-7 py-3 rounded-lg text-white">Signin</button>
          </Link>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;
