import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useAuth from '../../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Error from '../../../Shared/Error/Error';
import Loading from '../../../Shared/Loading/Loading';

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
        <section className='my-10'>
            <SectionTitle subHeading={'At a Glance!'} heading={'Payment History'}></SectionTitle>
        </section>
    );
};

export default PaymentHistory;