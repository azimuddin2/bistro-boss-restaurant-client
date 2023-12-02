import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { IoFastFood, IoCalendar } from 'react-icons/io5';
import { RiLuggageCartFill } from 'react-icons/ri';
import { FaUsers } from 'react-icons/fa6';
import { GiMoneyStack } from "react-icons/gi";
import { PiShootingStarFill } from "react-icons/pi";
import { BiEdit } from "react-icons/bi"
import { MdMarkEmailUnread } from "react-icons/md";
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Error from '../../../Shared/Error/Error';
import Loading from '../../../Shared/Loading/Loading';
import CountUp from 'react-countup';
import { Link } from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import userImg from '../../../../assets/Images/others/user.png';
import AdminChart from './AdminChart';

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

    const { revenue, users, menuItems, orders, bookings, reviews } = stats;

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
                    className='lg:flex items-center justify-center rounded-lg text-white'
                >
                    <figure className='lg:ml-8 mt-6 lg:mt-0 text-center'>
                        <GiMoneyStack className='text-6xl inline-block' />
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
                    className='lg:flex items-center justify-center rounded-lg text-white'
                >
                    <figure className='lg:ml-8 mt-6 lg:mt-0 text-center'>
                        <FaUsers className='text-6xl inline-block' />
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
                    className='lg:flex items-center justify-center rounded-lg text-white'
                >
                    <figure className='lg:ml-8 mt-6 lg:mt-0 text-center'>
                        <IoFastFood className='text-6xl inline-block' />
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
                    className='lg:flex items-center justify-center rounded-lg text-white'
                >
                    <figure className='lg:ml-8 mt-6 lg:mt-0 text-center'>
                        <RiLuggageCartFill className='text-6xl inline-block' />
                    </figure>
                    <div className="card-body pt-2 lg:pt-8">
                        <h2 className="card-title justify-center lg:justify-start text-4xl font-bold">
                            <CountUp end={orders} duration={5} />
                        </h2>
                        <p className='text-center lg:text-left text-xl font-family font-medium'>Orders</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                <div className='grid grid-cols-1 lg:grid-cols-2  gap-3'>
                    <div
                        style={{ background: 'linear-gradient(90deg, rgb(0, 236, 159) 0%, rgb(0, 200, 159) 100%)' }}
                        className='lg:flex items-center justify-center rounded-lg text-white'
                    >
                        <figure className='lg:ml-8 mt-6 lg:mt-0 text-center'>
                            <IoCalendar className='text-5xl inline-block' />
                        </figure>
                        <div className="card-body pt-2 lg:pt-8">
                            <h2 className="card-title justify-center lg:justify-start text-4xl font-bold">
                                <CountUp end={bookings} duration={5} />
                            </h2>
                            <p className='text-center lg:text-left text-xl font-family font-medium'>Bookings</p>
                        </div>
                    </div>
                    <div
                        style={{ background: 'linear-gradient(90deg, rgb(255, 220, 40) 0%, rgb(255, 140, 40) 100%)' }}
                        className='lg:flex items-center justify-center rounded-lg text-white'
                    >
                        <figure className='lg:ml-8 mt-6 lg:mt-0 text-center'>
                            <PiShootingStarFill className='text-6xl inline-block' />
                        </figure>
                        <div className="card-body pt-2 lg:pt-8">
                            <h2 className="card-title justify-center lg:justify-start text-4xl font-bold">
                                <CountUp end={reviews} duration={5} />
                            </h2>
                            <p className='text-center lg:text-left text-xl font-family font-medium'>Reviews</p>
                        </div>
                    </div>
                    <div
                        style={{ background: 'linear-gradient(90deg, rgb(283, 120, 66) 0%, rgb(255, 165, 66) 100%)' }}
                        className='lg:flex items-center justify-center rounded-lg text-white'
                    >
                        <figure className='lg:ml-8 mt-6 lg:mt-0 text-center'>
                            <MdMarkEmailUnread className='text-5xl inline-block' />
                        </figure>
                        <div className="card-body pt-2 lg:pt-8">
                            <h2 className="card-title justify-center lg:justify-start text-4xl font-bold">
                                <CountUp end={20} duration={5} />
                            </h2>
                            <p className='text-center lg:text-left text-xl font-family font-medium'>Contact</p>
                        </div>
                    </div>
                </div>
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
            </div>
            <div className='mt-4'>
                <AdminChart></AdminChart>
            </div>
        </section>
    );
};

export default AdminHome;