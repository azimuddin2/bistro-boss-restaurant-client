import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useAuth from '../../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Error from '../../../Shared/Error/Error';
import Loading from '../../../Shared/Loading/Loading';
import PaymentRow from './PaymentRow';

const PaymentHistory = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: payments, isLoading, error } = useQuery({
        queryKey: ['payments', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments?email=${user?.email}`)
            return res.data;
        }
    });

    if (error) {
        return <Error message={error.message}></Error>
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='bg-[#F6F6F6] py-10 lg:p-10 h-full'>
            <SectionTitle subHeading={'At a Glance!'} heading={'Payment History'}></SectionTitle>
            <div className='w-11/12 lg:w-4/5 mx-auto bg-white p-5 lg:p-10'>
                <div className='flex justify-between items-center mb-3 lg:mb-6'>
                    <h2 className='text-lg lg:text-xl uppercase font-bold font-family text-secondary'>Total Payment: {payments.length}</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className='bg-[#D1A054] text-white font-family uppercase'>
                            <tr className='font-normal'>
                                <th></th>
                                <th>Email</th>
                                <th>Total Price</th>
                                <th>Payment Date</th>
                                <th>TransactionId</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments?.map((payment, index) => <PaymentRow
                                    key={payment._id}
                                    index={index}
                                    payment={payment}
                                ></PaymentRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default PaymentHistory;