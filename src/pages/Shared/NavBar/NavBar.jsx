import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const navLink = (
    <>
      <li>
        <Link to="/" className="uppercase">
          home{" "}
        </Link>
      </li>
      <li>
        <Link to="/" className="uppercase">
          conect us
        </Link>
      </li>
      <li>
        <Link to="/" className="uppercase">
          dashboard
        </Link>
      </li>
      <li>
        <Link to="/ourMenuPage" className="uppercase">
          our menu
        </Link>
      </li>
      <li>
        <Link to="/ourShop/categoryName/pizza" className="uppercase">
          our shop
        </Link>
      </li>
      <li>
        <Link to="/" className="uppercase">
          cart
        </Link>
      </li>
      <li>
        <Link to="/" className="uppercase">
          sing out
        </Link>
      </li>
      <li>
        <Link to="/" className="uppercase">
          img
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 max-w-screen-lg  bg:kopacity-25 text-black bg-black-300">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <a className="btn btn-ghost  hover:bg-transparent text-xl uppercase">
          Bd Restaurant
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
    </div>
  );
};

export default NavBar;
