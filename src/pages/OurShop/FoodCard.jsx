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

        if (currentUser) {

            const userOrderInfo = { foodname: name, category, price, nameUser: currentUser?.displayName || 'current user name null', emailUser: currentUser?.email || "current email null", foodItemId: item._id, image: image }
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
                    } else if (res.data.message) {
                        console.log('res.data exist ', res.data);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'food items all ready exist',
                        })
                    }
                })
                .catch(err => console.log(err))


        } else {
            // console.log('current user nai via');
            // // is line not working why ... 
            // navigate('/login', { state: { from: 'location' }, replace: true });

            Swal.fire({
                title: 'Are you not user please login ?',
                text: "taray taray otiye dilam ",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'login'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: true } })
                }
            })
        }
        // 

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