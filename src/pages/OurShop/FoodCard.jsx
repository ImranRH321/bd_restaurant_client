import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { AuthContext } from '../../context/TreeContextProvider';
import useCart from '../../hooks/useCart';

const FoodCard = ({ itemsFood }) => {
    const { name, image, recipe, category, _id, price
    } = itemsFood;


    const { currentUser } = useContext(AuthContext)
    /* not  codion apply */
    const navigate = useNavigate();
    const { refetch } = useCart()

    // console.log("currentUser:", currentUser);


    // ADD data 
    const hanldeAddToCart = item => {
        //    console.log(item);
        Swal.fire({
            title: `add the card ${item.name}`,
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Add the card'
        }).then((result) => {
            if (result.isConfirmed) {
                const userOrderInfo = { foodname: name, category, price, nameUser: currentUser?.displayName || 'current user name null', emailUser: currentUser?.email || "current email null", foodItemId: item._id, }
                if (currentUser) {
                    console.log(currentUser, ' i am current user bro');

                    console.log("userOrderInfo:", userOrderInfo);
                    // alert("user ase")
                    axios.post('http://localhost:5000/cart/addItem', userOrderInfo)
                        .then(res => {
                            console.log('res data ', res.data)
                            if (res.data.insertedId) {
                                // alert('oke done') 
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Your work has been saved',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                refetch()
                            }
                        })
                        .catch(err => console.log(err))



                } else {
                    // alert('no user ') 
                    navigate("/login")
                }
                /*  Swal.fire(
                   'Deleted!',
                   'Your file has been deleted.',
                   'success'
                 ) */
            }
        })
    }

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">

                    <div className="badge badge-secondary ">{name}</div>
                </h2>
                <p className='text-start'>{recipe?.slice(0, 55)}</p>
            </div>
            <button onClick={() => hanldeAddToCart(itemsFood)} className="btn btn-outline btn-secondary btn-md w-[150px] mx-auto mb-2">Add Card</button>
        </div>
    );
};

export default FoodCard;