import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import { IoFastFood } from 'react-icons/io5';
import { RiLuggageCartFill } from 'react-icons/ri';
import { FaUsers, FaSackDollar } from 'react-icons/fa6';

const AdminHome = () => {
    const { user } = useAuth();

    return (
        <section className='h-full bg-[#F6F6F6] px-5 lg:px-10'>
            <h1 className='lg:text-xl uppercase font-bold font-family text-secondary'>Hello, Welcome {user.displayName}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>

                <div
                    style={{ background: 'linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)' }}
                    className='card lg:card-side pt-6 lg:pt-0 rounded-lg text-white'
                >
                    <figure className='w-16'>
                        <FaSackDollar className='lg'></FaSackDollar>
                    </figure>
                    <div className="card-body pt-4 lg:pt-8">
                        <h2 className="card-title justify-center lg:justify-start">{0}</h2>
                        <p className='text-center lg:text-left text-lg'>Revenue</p>
                    </div>
                </div>

                <div
                    style={{ background: 'linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)' }}
                    className='card lg:card-side pt-6 lg:pt-0 rounded-lg text-white'
                >
                    <figure className='w-16'>
                        <FaUsers className='text-xl'></FaUsers>
                    </figure>
                    <div className="card-body pt-4 lg:pt-8">
                        <h2 className="card-title justify-center lg:justify-start">{0}</h2>
                        <p className='text-center lg:text-left text-lg'>Users</p>
                    </div>
                </div>

                <div
                    style={{ background: 'linear-gradient(90deg, #FE4880 0%, #FECDE9 100%)' }}
                    className='card lg:card-side pt-6 lg:pt-0 rounded-lg text-white'
                >
                    <figure className='w-16'>
                        <IoFastFood className='text-xl'></IoFastFood>
                    </figure>
                    <div className="card-body pt-4 lg:pt-8">
                        <h2 className="card-title justify-center lg:justify-start">{0}</h2>
                        <p className='text-center lg:text-left text-lg'>Menu Item</p>
                    </div>
                </div>

                <div
                    style={{ background: 'linear-gradient(90deg, #6AAEFF 0%, #B6F7FF 100%)' }}
                    className='card lg:card-side pt-6 lg:pt-0 rounded-lg text-white'
                >
                    <figure className='w-16'>
                        <RiLuggageCartFill className='text-xl'></RiLuggageCartFill>
                    </figure>
                    <div className="card-body pt-4 lg:pt-8">
                        <h2 className="card-title justify-center lg:justify-start">{0}</h2>
                        <p className='text-center lg:text-left text-lg'>Orders</p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AdminHome;