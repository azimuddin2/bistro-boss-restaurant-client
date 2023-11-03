import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_Payment_Gateway_PK);

const Payment = () => {
    return (
        <section className='my-10'>
            <SectionTitle subHeading={'Please process'} heading={'Payment'}></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </section>
    );
};

export default Payment;