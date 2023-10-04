import React from 'react';
import useCart from '../hooks/useCart';
import { NavLink, Outlet } from 'react-router-dom';
import { FaBook, FaCalendar, FaHome, FaShoppingCart, FaUser, FaUtensils, FaWallet } from 'react-icons/fa';

import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const { carts } = useCart();
    // const isAdmin = true;
    const { logOutUser } = useAuth();

    const { isAdmin } = useAdmin();
    console.log(isAdmin);
    // const isAdmin = false;

    const hanldeLogOutButton = () => {
        logOutUser();
    }

    return (
        <div className="drawer lg:drawer-open font-mono font-semibold text-black">
            
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}

                <label
                    htmlFor="my-drawer-2"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    Open drawer
                </label>
                <Outlet></Outlet> 
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu  p-4 w-80 h-full bg-[#D1A054]">
                    {/* Sidebar content here */}
                    {/* <h1 className=" text-black text-sm">isAdmin miya{`--raja -->${new String(isAdmin)}`}</h1> */}
                   <div className="p-4">
                   <h1 className=" text-black text-lg uppercase">Pannda Express</h1>
                    <h1 className=" text-black text-lg uppercase">Restaurant</h1>
                   </div>
                    {isAdmin ? (
                        <>
                            <li>
                                <NavLink to="/dashboard/adminHome">
                                    {" "}
                                    <FaHome></FaHome> admin home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addItem">
                                    {" "}
                                    <FaUtensils></FaUtensils> Add Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageItem">
                                    <FaWallet></FaWallet> Manges Items
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/allUsers">
                                    <FaUser></FaUser> all users
                                </NavLink>
                            </li>

                        </>
                    ) : (
                        <>
                            <li>
                                <NavLink to="/dashboard/userHome">
                                    {" "}
                                    <FaHome></FaHome> user home
                                </NavLink>
                            </li>
                            {/* <li>
                                <NavLink to="/dashboard/reservations">
                                  
                                    <FaCalendar></FaCalendar> Reservations
                                </NavLink>
                            </li> */}
                            <li>
                                <NavLink to="/dashboard/payment">
                                    {" "}
                                    <FaCalendar></FaCalendar> Payment
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/payment/hisotry"> 
                                    
                                    <FaWallet></FaWallet> payment history
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/myCart">
                                    {" "}
                                    <FaShoppingCart></FaShoppingCart>
                                    <p className="flex">
                                        <span> MyCart</span>{" "}
                                        <span className="border ms-5 badge badge-sm indicator-item">
                                            {carts.length || 0}
                                        </span>
                                    </p>
                                </NavLink>
                            </li>
                        </>
                    )}

                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            {" "}
                            <FaHome></FaHome> Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/ourMenuPage">Our Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/ourShop/categoryName/pizza">Our Order</NavLink>
                    </li>

                    <li>
                        <button onClick={hanldeLogOutButton}  className="btn bg-red-500 border-0 w-[120px] hover:bg-red-400 btn-sm mt-4">LogOut</button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;