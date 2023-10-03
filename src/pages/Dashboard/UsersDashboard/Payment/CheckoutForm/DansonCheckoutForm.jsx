import React, { useEffect, useState } from 'react';
import useCart from '../../../../../hooks/useCart';
import axios from 'axios';
import useAxiosSecure from '../../../../../hooks/useAxiosSecure';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAuth from '../../../../../hooks/useAuth';
import Swal from 'sweetalert2';

const DansonCheckoutForm = () => {

    // ===========
    const { currentUser } = useAuth();
    const { carts } = useCart();
    const total = carts.reduce(((sum, item) => sum + item.price), 0);
    const price = parseFloat(total.toFixed(2));


    const [clientSecret, setClientSecret] = useState('');
    const { instanceSecoreApis } = useAxiosSecure()
    //   ***********   
    const stripe = useStripe();
    const elements = useElements();
    //   *********** 


    /*  create-payment-intent apis first  */
    useEffect(() => {
        if (price > 0) {
            instanceSecoreApis.post('https://bd-restaurant-server.vercel.app/create-payment-intent', { price })
                .then(res => {
                    console.log('res ', res);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price])

    // ==================== 
    // hanlde all  
    const [error, setError] = useState('');
    const [processingLoading, setProcessingLoading] = useState(false)
    const [transactionId, setTransactionId] = useState('')

    // click 
    const handleSubmit = async (event) => {
        event.preventDefault();
        // 
        if (!stripe || !elements) return;
        // form
        const card = elements.getElement(CardElement);
        if (card == null) return;
        // 
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setError(error?.message)
        } else {
            setError('')
            console.log('[PaymentMethod]', paymentMethod);
        }


        setProcessingLoading(true)
        //   loading state not set then procesing card error
        const { paymentIntent, error: conformError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: currentUser?.displayName || 'unkhown',
                        email: currentUser?.email || 'anonymous'
                    },
                },
            },
        );
        if (conformError) {
            setError(conformError?.message)
            console.log('confrim error', conformError);
        }
        setProcessingLoading(false)
        console.log('======= paymentIntent=======', paymentIntent);
        status
        :
        "succeeded"
        //  
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            // save information send the server
            const paymentUser = {
                emailUser: currentUser?.email,
                date: new Date(),
                quantity: carts.length,
                price,
                transactionId: paymentIntent.id,
                cartItemId: carts.map(item => item._id),
                foodItemId: carts.map(item => item.foodItemId),
                itemNames: carts.map(item => item.foodname),
                status: 'service pending'

            }
            // send data
            console.log(paymentUser);
            instanceSecoreApis.post('https://bd-restaurant-server.vercel.app/payments', paymentUser)
                .then(res => {
                    console.log('save data res', res.data)
                    if (res.data.insertedResult.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `successfully payment`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                        // j
                    }
                })
        }
        // 

    }
    /* 
                       
    */
    return (
        <div>
            <h1 className='text-3xl mb-4'>payment now : {currentUser?.displayName} user</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <CardElement
                        options={{
                            style: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            },
                        }}
                    />
                    <button className='btn btn-sm px-3 btn-primary' type="submit" disabled={!stripe || !clientSecret || processingLoading}>
                        Pay
                    </button>
                    {error && <p className='text-red-500 font-bold'>{error}</p>}
                    {transactionId && <p className='text-green-500 font-bold'>{transactionId}</p>}
                </form>
            </section>
        </div>
    );
};

export default DansonCheckoutForm;

// __Steap__
/* 
1. react stipe js install clinet 
2.stipe js dashboard publish key * loadstipe call publish key 
3.Elements under componets call exjample checkout componets
4.payment intent post post apis clientSecret set state
5 form CardElement
6.load stipe and elements for useStipe and useElements
7.stipe crate form paymentMethod 
8.stipe confrim card payment-- /g/s
9.state set  transactionId for paymentintent.id and status===succed then send the data server
10.
*/
/* server steap 
1.sitpe install server
2. load stipe call secreet key
3.payment intent
4.server side payment data save and exist cart payment id deleted
*/