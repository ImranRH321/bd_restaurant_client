import React from 'react';
import useCart from '../../../../hooks/useCart';
import { FaRegTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import PageRouteTitle from '../../../Shared/PageRouteTitle/PageRouteTitle';

const MyCarts = () => {
    const { carts, refetch } = useCart();

    const sumTotalPrice = carts.reduce((sum, item) => sum + item.price, 0)

    console.log(carts, '   my cart data');

    // Deleted food on the cart 
    const handleDeletedFoodItem = (item) => {
        console.log(item, 'dele');
        axios.delete(`https://bd-restaurant-server.vercel.app/carts/${item._id}`)
            .then(res => {
                console.log('cart deleted item axios res me: ', res);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${item.foodname} Your item has been deleted`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                }
            })
    }

    return (
        <div className="w-full">
            <PageRouteTitle pageTitle={'My carts'}></PageRouteTitle>

            <div className="flex gap-10 uppercase items-center">
                <h1>Total Items: {carts?.length}</h1>
                <h1>Total Price: ${sumTotalPrice}</h1>
                <Link to="/dashboard/payment">
                    <button className="btn btn-warning btn-sm">Pay</button>
                </Link>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>#</label>
                            </th>
                            <th>Food image</th>
                            <th>ITEM NAME</th>
                            <th>PRICE</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {carts.map((item, index) => (
                            <tr key={item._id}>
                                <th>
                                    <label>{index + 1}</label>
                                </th>
                                <td>
                                    {" "}
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src={item.image}
                                                // TODO: image poya jay na problem 2
                                                alt="img no found"
                                            />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.foodname}</td>
                                <td className="">Price: ${item.price}</td>
                                <th>
                                    <button
                                        onClick={() => handleDeletedFoodItem(item)}
                                        className="btn btn-ghost btn-sm bg-red-600"
                                    >
                                        <FaRegTrashAlt></FaRegTrashAlt>
                                    </button>
                                </th>
                            </tr>
                        ))}
                        {/* row 1 */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCarts;