import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/TreeContextProvider";
import useCart from "../../../hooks/useCart";
import { FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {
  const { currentUser, logOutUser } = useContext(AuthContext)
  const handleLogOut = () => {
    logOutUser()
      .then(() => { console.log('user log out done') })
      .catch(err => console.log('logout err', err))
  }
  // carts 
  const { carts } = useCart();


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
        <Link to="/dashboard" className="uppercase">
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
        <Link  to="/dashboard/myCart"  className="hover:text-warning">
          <div className="btn btn-ghost btn-circle">
            <FaShoppingCart></FaShoppingCart>
            <span className="badge badge-sm indicator-item">
              {carts.length || 0}
            </span>
          </div> 
        </Link>
      </li>
      <li>
        {currentUser ? <>  <button onClick={handleLogOut} className="btn uppercase btn-sm text-white bg-red-500 hover:bg-red-500">
          sing out
        </button></> : <>  <Link to="/login">
          <button className="btn btn-sm btn-priamry">
            Login
          </button>
        </Link></>}


      </li>
      <li>
        <Link to="/" className="uppercase">
          img
        </Link>
      </li>
    </>
  );
  return (
    <div className="navbar fixed z-10 max-w-screen-lg  bg-warning text-black bg-black-300">
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
        {/* <a className="btn btn-ghost  hover:bg-transparent text-xl uppercase">
          Bd Restaurant
          <span>{currentUser.email}</span>
        </a> */}
        <div className="logo">
          <a className="btn btn-ghost   hover:bg-transparent text-xl uppercase">
            {/* Bd Restaurant  */}
            {currentUser?.displayName || 'not updated name'}
            <span className="pb-3 text-sm"> {currentUser?.email}</span>
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>

      </div>

    </div>
  );
};

export default NavBar;
