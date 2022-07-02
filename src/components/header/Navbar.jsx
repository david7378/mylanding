import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className=" absolute w-full flex flex-wrap items-center justify-between px-2 py-3  z-[40] ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm hover:text-slate-300 font-bold leading-relaxed 
              inline-block mr-4 py-2 whitespace-nowrap uppercase text-white transition-colors ease-in-out"
              to="/"
            >
              Perdomo David <span className="text-red-500 ">Landing</span>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center " +
              (navbarOpen ? " flex justify-center" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto t ">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-red-500 "
                  href="#home"
                >
                  <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75 "></i>
                  <span className="ml-2 cursor-pointer">Home</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-red-500 transition-colors ease-in-ou"
                  href="#aboutme"
                >
                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2 cursor-pointer">About me</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:text-red-500 transition-colors ease-in-ou"
                  href="https://wa.me/+543513305804"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-pinterest text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Contact</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
