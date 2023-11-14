import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import CountUp from 'react-countup';
import { FaCalendarAlt, FaLuggageCart } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const UserHome = () => {
    const { user } = useAuth();

    return (
        <section className='h-full bg-[#F6F6F6] px-5 lg:px-10'>
            <h1 className='lg:text-2xl uppercase font-bold font-family text-secondary pt-10'>Hi, Welcome {user.displayName}!</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-6'>

                <div
                    style={{ background: 'linear-gradient(90deg, #BB34F5 0%, #FCDBFF 100%)' }}
                    className='card lg:card-side rounded-lg text-white'
                >
                    <figure className='w-full lg:w-12 lg:ml-8 mt-6 lg:mt-0'>
                        <FaMoneyCheckDollar className='text-6xl' />
                    </figure>
                    <div className="card-body pt-2 lg:pt-8">
                        <h2 className="card-title justify-center lg:justify-start text-4xl font-bold">
                            <CountUp end={100} duration={3} />
                        </h2>
                        <p className='text-center lg:text-left text-xl font-family font-medium'>Revenue</p>
                    </div>
                </div>

                <div
                    style={{ background: 'linear-gradient(90deg, #D3A256 0%, #FDE8C0 100%)' }}
                    className='card lg:card-side rounded-lg text-white'
                >
                    <figure className='w-full lg:w-8 lg:ml-8 mt-6 lg:mt-0'>
                        <FaCalendarAlt className='text-6xl' />
                    </figure>
                    <div className="card-body pt-2 lg:pt-8">
                        <h2 className="card-title justify-center lg:justify-start text-4xl font-bold">
                            <CountUp end={100} duration={3} />
                        </h2>
                        <p className='text-center lg:text-left text-xl font-family font-medium'>Shop</p>
                    </div>
                </div>

                <div
                    style={{ background: 'linear-gradient(90deg, #FE4880 0%, #FECDE9 100%)' }}
                    className='card lg:card-side rounded-lg text-white'
                >
                    <figure className='w-full lg:w-12 lg:ml-8 mt-6 lg:mt-0'>
                        <FaCalendarAlt className='text-6xl' />
                    </figure>
                    <div className="card-body pt-2 lg:pt-8">
                        <h2 className="card-title justify-center lg:justify-start text-4xl font-bold">
                            <CountUp end={100} duration={3} />
                        </h2>
                        <p className='text-center lg:text-left text-xl font-family font-medium'>Booking</p>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default UserHome;