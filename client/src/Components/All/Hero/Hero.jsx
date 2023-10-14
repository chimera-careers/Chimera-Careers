import React from "react";
import "./hero.scss";

function Hero() {
  return (
    <>
      <div className="hero-container flex flex-col w-full h-screen  justify-around bg-cover">
        <div className="flex flex-row gap-20  w-full justify-center mt-16">
          <div className="flex flex-row rounded bg-white h-14">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 text-indigo-900 m-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search"
              className="h-14 rounded-md w-96 focus:outline-none"
            />
          </div>

          <button className="border bg-indigo-900 text-white p-4 w-32 h-14 rounded-md">
            Search
          </button>
        </div>
        <div className="flex flex-col justify-center items-center animate-trans-right">
          <h1 className=" text-indigo-900 text-4xl font-black">
            "Connecting Dreams to Careers:
          </h1>
          <h1 className=" text-indigo-900 text-4xl font-black">
            Your Success, Our Priority"
          </h1>
        </div>

        <div className="flex flex-row justify-center gap-20 mb-32">
          <button className="border bg-indigo-900 text-white p-5 rounded-xl flex gap-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300">
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
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
              />
            </svg>
            Upload Resume
          </button>
          <button className="border bg-indigo-900 text-white p-5 rounded-xl flex gap-6 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-600 duration-300">
            Register Now{" "}
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
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Hero;
