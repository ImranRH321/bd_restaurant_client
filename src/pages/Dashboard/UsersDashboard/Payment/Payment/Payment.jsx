import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import DansonCheckoutForm from '../CheckoutForm/DansonCheckoutForm';


const stripePromise = loadStripe('pk_test_51LLMJnHSBkwSV8IkTMECV2W3r3HUStksNU6eiBNI1wmqSKW7LxERw8L7p7cryCr2UmekZL3zhyqZfaW8YcNXL3EQ00m1zFx96b')
// const stripePromise = 'pk_test_51LLMJnHSBkwSV8IkTMECV2W3r3HUStksNU6eiBNI1wmqSKW7LxERw8L7p7cryCr2UmekZL3zhyqZfaW8YcNXL3EQ00m1zFx96b';
const stripePromise2 = loadStripe(import.meta.env.VITE_APP_PAYMENT_PUBLISH_KEY)



const Payment = () => {
    console.log('----------- stripePromise----------', stripePromise2);


    return (
        <div className='mx-auto w-3/4'>
            <h2>payment page </h2>
            <Elements stripe={stripePromise2} >
                {/* <CheckoutForm />  */}
                <DansonCheckoutForm></DansonCheckoutForm> 
            </Elements>
        </div>
    );
};

export default Payment;