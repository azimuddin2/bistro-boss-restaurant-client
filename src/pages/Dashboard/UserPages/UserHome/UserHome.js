import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import CountUp from 'react-countup';
import { FaCalendarAlt, FaLuggageCart, FaShopify, FaStar } from "react-icons/fa";
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Error from '../../../Shared/Error/Error';
import Loading from '../../../Shared/Loading/Loading';
import { GiMoneyStack } from "react-icons/gi";
import { BiEdit } from "react-icons/bi";
import userImg from '../../../../assets/Images/others/user.png';
import { Link } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import useTitle from '../../../../hooks/useTitle';

const UserHome = () => {
    useTitle('User Home');
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: stats = {}, isLoading, error } = useQuery({
        queryKey: ['user-stats', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user-stats?email=${user?.email}`)
            return res.data;
        }
    })

    const { revenue, booking, payment, review } = stats;

    if (error) {
        return <Error message={error.message}></Error>
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='h-full bg-[#F6F6F6] px-5 lg:px-10 py-10'>
            <h1 className='text-2xl lg:text-left text-center uppercase font-bold font-family text-secondary'>Hi, Welcome Back!</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6'>
                <div
                    style={{ background: 'linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)' }}
                    className='card lg:card-side rounded-lg text-white'
                >
                    <figure className='w-full lg:w-12 lg:ml-8 mt-6 lg:mt-0'>
                        <GiMoneyStack className='text-6xl' />
                    </figure>
                    <div className="card-body pt-2 lg:pt-8">
                        <h2 className="card-title justify-center lg:justify-start text-4xl font-bold">
                            $<CountUp end={revenue} duration={3} />
                        </h2>
                        <p className='text-center lg:text-left text-xl font-family font-medium'>Revenue</p>
                    </div>
                </div>
                <div
                    style={{ background: 'linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)' }}
                    className='card lg:card-side rounded-lg text-white'
                >
                    <figure className='w-full lg:w-12 lg:ml-8 mt-6 lg:mt-0'>
                        <FaShopify className='text-6xl' />
                    </figure>
                    <div className="card-body pt-2 lg:pt-8">
                        <h2 className="card-title justify-center lg:justify-start text-4xl font-bold">
                            <CountUp end={payment} duration={3} />
                        </h2>
                        <p className='text-center lg:text-left text-xl font-family font-medium'>Shop</p>
                    </div>
                </div>
                <div
                    style={{ background: 'linear-gradient(90deg, #FE4880 0%, #FECDE9 100%)' }}
                    className='card lg:card-side rounded-lg text-white'
                >
                    <figure className='w-full lg:w-9 lg:ml-8 mt-6 lg:mt-0'>
                        <FaCalendarAlt className='text-6xl' />
                    </figure>
                    <div className="card-body pt-2 lg:pt-8">
                        <h2 className="card-title justify-center lg:justify-start text-4xl font-bold">
                            <CountUp end={booking} duration={3} />
                        </h2>
                        <p className='text-center lg:text-left text-xl font-family font-medium'>Booking</p>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-3'>
                <div className='bg-[#FFEDD5] text-center px-8 py-12'>
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-1">
                            {
                                user.photoURL ?
                                    <img src={user.photoURL} alt='' className='w-full rounded-full' />
                                    :
                                    <img src={userImg} alt='' className='w-full rounded-full' />
                            }
                        </div>
                    </div>
                    <h1 className='text-2xl font-medium font-family my-3'>{user.displayName}</h1>
                    <Link to={'/dashboard/edit-profile'}>
                        <Button>Edit Profile <BiEdit className='text-xl' /></Button>
                    </Link>
                </div>
                <div className='bg-[#FEF9C3] py-16 px-16'>
                    <p className='text-2xl font-family font-semibold text-secondary mb-4'>Your Activities</p>
                    <div>
                        <p className='flex items-center text-[#00C4A1] mb-1'>
                            <FaLuggageCart className='text-lg' />
                            <span className='font-family font-medium ml-1'>Orders: {payment}</span>
                        </p>
                        <p className='flex items-center text-[#FFBB28] mb-1'>
                            <FaStar className='text-lg' />
                            <span className='font-family font-medium ml-1'>Review: {review}</span>
                        </p>
                        <p className='flex items-center text-[#FF8042] mb-1'>
                            <GiMoneyStack className='text-lg' />
                            <span className='font-family font-medium ml-1'>Payment: {payment}</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserHome;