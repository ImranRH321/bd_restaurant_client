import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import useCart from '../../../../../hooks/useCart';
import { useEffect } from 'react';
import axios from 'axios';
import './CheckoutForm.css';
import useAuth from '../../../../../hooks/useAuth';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';



const CheckoutForm = () => {

    const { carts } = useCart();

    // let price = 0;
    // for (const items of carts) {
    //     console.log(items.price, 'oke ');
    //     price = price + items.price;
    // }

    const price = carts.reduce((sum, item) => sum + item.price, 0)
    const totalPrice = parseFloat(price.toFixed(2))


    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [cardError, setcardError] = useState("");
    const { currentUser } = useAuth();
    const { instanceSecoreApis } = useAxiosSecure();
    const [transactionId, setTransactionId] = useState('');
    const [processing, setProcessing] = useState(false);



    useEffect(() => {
        if (price > 0) {
            instanceSecoreApis.post('https://bd-restaurant-server.vercel.app/create-payment-intent', { totalPrice })
                .then(res => {
                    // console.log(res.data.clientSecret, 'payment intent price  cient secreet');
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, useAxiosSecure])



    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setcardError(error?.message)
        } else {
            setcardError('')
            console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true)
        // stipe confirmcard payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: currentUser?.displayName || 'anonymous',
                        email: currentUser?.email || 'unkown'
                    },
                },
            },
        );
        // 
        if (confirmError) {
            console.log('confirmError=---------', confirmError);
        }
        console.log(paymentIntent, '=============== paymentIntent');

        setProcessing(false)
        if (paymentIntent.status === "succeeded") {
            setTransactionId(paymentIntent.id)
            const transactionIdFor = paymentIntent.id;
            // save informaiton for database sucessfully payment
            const payment = {
                emailUser: currentUser?.email,
                transactionId: paymentIntent.id,
                totalPrice,
                date: new Date(),
                quantity: carts.length,
                cartItemId: carts.map(item => item._id),
                foodItemId: carts.map(item => item.foodItemId),
                itemNames: carts.map(item => item.foodname),
                status: 'service pending'
            }
            instanceSecoreApis.post('payments', payment)
                .then(res => {
                    console.log('res me', res);
                    if (res.data.insertResult?.insertedId && res.data.insertResult?.deletedCount > 0) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `successfully payment`,
                            showConfirmButton: false,
                            timer: 1500
                        })

                    }
                })
        }
    };

    // atta time one click button is rejon procesing
    return (
        <>
            <form className="border p-4" onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: "16px",
                                color: "#424770",
                                "::placeholder": {
                                    color: "#aab7c4",
                                },
                            },
                            invalid: {
                                color: "#9e2146",
                            },
                        },
                    }}
                />
                <button
                    className="btn btn-primary btn-xs mt-6 ms-3 w-[100px] m-auto"
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}
                >
                    Pay
                </button>
                {cardError && <p className='text-red-500 font-serif font-bold'>{cardError}</p>}
                {transactionId && <p className='text-green-500 font-serif font-bold'>{transactionId}</p>}
            </form>
        </>
    );
};

export default CheckoutForm;