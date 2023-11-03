import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe(process.env.REACT_APP_Payment_Gateway_PK);

const Payment = () => {
    return (
        <section className='bg-[#F6F6F6] py-12 h-screen'>
            <SectionTitle subHeading={'Please process'} heading={'Payment'}></SectionTitle>
            <div className='w-11/12 lg:w-1/2 mx-auto bg-white p-5 lg:p-10'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </section>
    );
};

export default Payment;