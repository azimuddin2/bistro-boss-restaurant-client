import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useAuth from '../../../../hooks/useAuth';
import './CheckoutForm.css';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ carts, refetch, price }) => {
    const [axiosSecure] = useAxiosSecure();
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.post('/create-payment-intent', { price })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            // console.log('error', error);
            toast.error(error.message);
        }
        else {
            console.log('payment method', paymentMethod)
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'unknown'
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError)
        }

        console.log('Payment intent', paymentIntent)
        setProcessing(false);
        if (paymentIntent.status === "succeeded") {
            const transactionId = paymentIntent.id;
            const date = new Date();

            // TODO: payment information to the server save
            const paymentInfo = {
                email: user?.email,
                transactionId,
                price,
                date,
                status: 'pending',
                quantity: carts.length,
                menuItems: carts?.map(item => item.menuItemId),
                itemNames: carts?.map(item => item.name),
            };
            axiosSecure.post('/payments', paymentInfo)
                .then(res => {
                    if (res.data.insertResult.insertedId || res.data.deleteResult.deletedCount) {
                        refetch();
                        swal({
                            title: "Congratulation!",
                            text: `Transaction Id: ${transactionId}`,
                            icon: "success",
                        });
                        navigate('/dashboard/payment-history');
                    }
                })
        }

    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                className='payment-input-field'
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
            <button
                className='payment-btn'
                type="submit"
                disabled={!stripe || !clientSecret || processing}
            >
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;