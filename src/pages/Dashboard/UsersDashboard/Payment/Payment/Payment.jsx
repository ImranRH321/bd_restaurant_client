import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import DansonCheckoutForm from '../CheckoutForm/DansonCheckoutForm';
import PageRouteTitle from '../../../../Shared/PageRouteTitle/PageRouteTitle';

const stripePromise2 = loadStripe(import.meta.env.VITE_APP_PAYMENT_PUBLISH_KEY)



const Payment = () => {
    return (
        <div className='mx-auto w-3/4'>
                <PageRouteTitle pageTitle={'Payment'}></PageRouteTitle>
            <Elements stripe={stripePromise2} >
                {/* <CheckoutForm />  */}
                <DansonCheckoutForm></DansonCheckoutForm> 
            </Elements>
        </div>
    );
};

export default Payment;