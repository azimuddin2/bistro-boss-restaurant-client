import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import useCart from '../../../../hooks/useCart';

const stripePromise = loadStripe(process.env.REACT_APP_Payment_Gateway_PK);

const Payment = () => {
    const [carts, refetch] = useCart();

    const totalPrice = carts?.reduce((sum, item) => item.price + sum, 0);
    const price = parseFloat(totalPrice.toFixed(2))

    return (
        <section className='bg-[#F6F6F6] py-12 h-screen'>
            <SectionTitle subHeading={'Please process'} heading={'Payment'}></SectionTitle>
            <div className='w-11/12 lg:w-1/2 mx-auto bg-white p-5 lg:p-10'>
                <h1 className='text-center font-family text-secondary font-semibold text-lg mb-5'>Total Price: ${totalPrice.toFixed(2)}</h1>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        carts={carts}
                        refetch={refetch}
                        price={price}
                    ></CheckoutForm>
                </Elements>
            </div>
        </section>
    );
};

export default Payment;