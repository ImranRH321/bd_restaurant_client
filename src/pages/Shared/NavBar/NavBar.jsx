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
        <Link to="/ourMenuPage" className="uppercase">
          our menu
        </Link>
      </li>
      <li>
        <Link to="/ourShop/categoryName/pizza" className="uppercase">
          our shop
        </Link>
      </li>

      <li className=" rounded-full ">
        <Link to="/dashboard/myCart" className="">
          <div className="btn btn-ghost btn-circle">
            <FaShoppingCart className="text-md"></FaShoppingCart>
            <span className="badge badge-sm indicator-item -mt-4 text-primary">
              {carts.length || 0}
            </span>
          </div>
        </Link>
      </li>
      {/* condiiton login and profile */}
      {/* <li>
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

                <p className="font-semibold my-3 fw-semibold text-black">
                  {currentUser?.email}
                </p>

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
      </li> */}
    </>
  );
  return (


    <>
      <div className="navbar font-mono fixed z-10 max-w-screen-lg h-[30px] text-black bg-[#fef08a]">
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
          <div className="logo border md:ms-5">
            <a className="  hover:bg-transparent text-xl uppercase">
              <span className="text-2xl font-mono "> Pandda express </span>
            </a>
          </div>
        </div>
        {/* lg */}
        <div className="navbar-center hidden lg:flex items-center justify-center h-[30px]">
          {/* <ul className="menu menu-horizontal ">{navLink}</ul> */}
          <ul className="navbar-center hidden lg:flex gap-x-6 items-center justify-center h-[30px]">{navLink}</ul>
        </div>
        {/* end of last via */}
        {/* condiiton */}
        <li>
          {currentUser ? <div className="profile_container2 text-end">
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
                className="mt-3 bg-white text-black z-[1] p-2 shadow menu menu-sm dropdown-content  rounded-box w-52"
              >
                <div className="flex flex-col mb-3   justify-center items-center">
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
                  {/* dashboard  */}
                  {isAdmin ? <li>
                    <Link to="/dashboard/adminHome" className="uppercase  btn btn-sm btn-accent ">
                      dashboard
                    </Link>
                  </li> : <li>
                    <Link to="/dashboard/userHome" className="uppercase  btn btn-sm btn-accent ">
                      dashboard
                    </Link>

                  </li>}
                  <div className="flex"></div>
                  <Link to="/register">
                    <button className="btn btn-sm btn-outline btn-accent mt-5">Add Account</button>
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
              <button className="btn  btn-success  btn-sm ms-2">
                Login
              </button>

            </Link></>}
        </li>
      </div>
    </>
  );
};

export default NavBar;


/* Not Open user 
ei mase amare 35 kamaite hoibo noyto bedes go arabiya 
*/