import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/TreeContextProvider";
import useCart from "../../../hooks/useCart";
import { FaShoppingCart } from 'react-icons/fa';
import useAdmin from "../../../hooks/useAdmin";

const NavBar = () => {
  const { currentUser, logOutUser } = useContext(AuthContext)
  const hanldeLogOutButton = () => {
    logOutUser()
      .then(() => { console.log('go out user') })
  }
  // carts 
  const { carts } = useCart();

  const { isAdmin } = useAdmin();



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
      {isAdmin ? <li>
        <Link to="/dashboard/adminHome" className="uppercase">
          dashboard
        </Link>
      </li> : <li>
        <Link to="/dashboard/userHome" className="uppercase">
          dashboard
        </Link>

      </li>}
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
        <Link to="/dashboard/myCart" className="hover:text-warning">
          <div className="btn btn-ghost btn-circle">
            <FaShoppingCart></FaShoppingCart>
            <span className="badge badge-sm indicator-item">
              {carts.length || 0}
            </span>
          </div>
        </Link>
      </li>
      {/* condiiton */}
      <li>
        {currentUser ? <div className="profile_container ">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full ">
                <img
                  className="mask mask-decagon w-10 rounded-full"
                  src={currentUser?.photoURL}
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <div className="flex flex-col mb-3 border  justify-center items-center">
                {/* alex  */}
                <p className="font-semibold my-3 fw-semibold text-black">
                  {currentUser?.email}
                </p>
                {/*  */}
                <div className="oneimg">
                  <img
                    className="w-24 h-24  mask mask-circle"
                    src={currentUser?.photoURL}
                  />
                </div>
                <p className="font-semibold capitalize my-3 fw-semibold text-black">
                  Hi, {currentUser?.displayName} !
                </p>

                <div className="flex"></div>
                <Link to="/register">
                  <button className="btn btn-sm btn-outline btn-accent">Add Account</button>
                </Link>

                <button
                  onClick={hanldeLogOutButton}
                  className="btn bg-red-600 hover:bg-red-400 btn-sm mt-4"
                >
                  LogOut
                </button>
              </div>
            </ul>
          </div>
        </div>
          : <> <Link to="/login">
            <button className="btn  btn-success  btn-sm">
              Login
            </button>
            
          </Link></>}
      </li>


      {/* -----------  */}

      {/* -----------  */}

      <li>
        <Link to="/" className="uppercase">
          <li>

            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn m-1">Click</label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
              </ul>
            </div>

          </li>
        </Link>
      </li>
      <li>
        <Link to="/" className="uppercase">
          dancon
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
      <div className="end">

      </div>
    </div>
  );
};

export default NavBar;


/* Not Open user 
ei mase amare 35 kamaite hoibo noyto bedes go arabiya 
*/