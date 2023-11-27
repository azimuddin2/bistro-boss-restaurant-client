import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { IoFastFood } from 'react-icons/io5';
import { RiLuggageCartFill } from 'react-icons/ri';
import { FaUsers, FaSackDollar } from 'react-icons/fa6';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Error from '../../../Shared/Error/Error';
import Loading from '../../../Shared/Loading/Loading';
import CountUp from 'react-countup';

const AdminHome = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: stats = {}, isLoading, error } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const res = await axiosSecure.get('/admin-stats');
            return res.data;
        }
    })

    const { revenue, users, menuItems, orders } = stats;

    if (error) {
        return <Error message={error.message}></Error>
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='h-full bg-[#F6F6F6] px-5 lg:px-10 py-10'>
            <h1 className='text-2xl lg:text-left text-center uppercase font-bold font-family text-secondary'>Hi, Welcome Back!</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-6'>
                <div
                    style={{ background: 'linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)' }}
                    className='card lg:card-side rounded-lg text-white'
                >
                    <figure className='w-full lg:w-12 lg:ml-8 mt-6 lg:mt-0'>
                        <FaSackDollar className='text-6xl'></FaSackDollar>
                    </figure>
                    <div className="card-body pt-2 lg:pt-8">
                        <h2 className="card-title justify-center lg:justify-start text-4xl font-bold">
                            <CountUp end={revenue} duration={5} />
                        </h2>
                        <p className='text-center lg:text-left text-xl font-family font-medium'>Revenue</p>
                    </div>
                </div>

                <div
                    style={{ background: 'linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)' }}
                    className='card lg:card-side rounded-lg text-white'
                >
                    <figure className='w-full lg:w-16 lg:ml-8 mt-6 lg:mt-0'>
                        <FaUsers className='text-6xl'></FaUsers>
                    </figure>
                    <div className="card-body pt-2 lg:pt-8">
                        <h2 className="card-title justify-center lg:justify-start text-4xl font-bold">
                            <CountUp end={users} duration={5} />
                        </h2>
                        <p className='text-center lg:text-left text-xl font-family font-medium'>Users</p>
                    </div>
                </div>

                <div
                    style={{ background: 'linear-gradient(90deg, #FE4880 0%, #FECDE9 100%)' }}
                    className='card lg:card-side rounded-lg text-white'
                >
                    <figure className='w-full lg:w-16 lg:ml-8 mt-6 lg:mt-0'>
                        <IoFastFood className='text-6xl'></IoFastFood>
                    </figure>
                    <div className="card-body pt-2 lg:pt-8">
                        <h2 className="card-title justify-center lg:justify-start text-4xl font-bold">
                            <CountUp end={menuItems} duration={5} />
                        </h2>
                        <p className='text-center lg:text-left text-xl font-family font-medium'>MenuItem</p>
                    </div>
                </div>

                <div
                    style={{ background: 'linear-gradient(90deg, #6AAEFF 0%, #B6F7FF 100%)' }}
                    className='card lg:card-side rounded-lg text-white'
                >
                    <figure className='w-full lg:w-14 lg:ml-8 mt-6 lg:mt-0'>
                        <RiLuggageCartFill className='text-6xl'></RiLuggageCartFill>
                    </figure>
                    <div className="card-body pt-2 lg:pt-8">
                        <h2 className="card-title justify-center lg:justify-start text-4xl font-bold">
                            <CountUp end={orders} duration={5} />
                        </h2>
                        <p className='text-center lg:text-left text-xl font-family font-medium'>Orders</p>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AdminHome;