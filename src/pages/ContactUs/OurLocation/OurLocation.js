import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { BiSolidPhoneCall } from 'react-icons/bi';
import { HiLocationMarker } from 'react-icons/hi';
import { BsFillClockFill } from 'react-icons/bs';

const OurLocation = () => {
    return (
        <section>
            <SectionTitle subHeading={'Visit Us'} heading={'Our Location'}></SectionTitle>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div>
                    <div className='text-white p-3' style={{ backgroundColor: '#D1A054' }}>
                        <BiSolidPhoneCall className='text-3xl mx-auto'></BiSolidPhoneCall>
                    </div>
                    <div className='border border-t-0'>
                        <div className='text-center m-4 mt-0 pt-5 pb-10 px-5' style={{ backgroundColor: '#F3F3F3' }}>
                            <h3 className='text-secondary text-xl uppercase font-semibold mb-2'>Phone</h3>
                            <p className='text-accent text-sm'>+88 01883-061967</p>
                            <p className='text-accent text-sm'>+88 01883-061967</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='text-white p-3' style={{ backgroundColor: '#D1A054' }}>
                        <HiLocationMarker className='text-3xl mx-auto'></HiLocationMarker>
                    </div>
                    <div className='border border-t-0'>
                        <div className='text-center m-4 mt-0 pt-5 px-5 pb-10' style={{ backgroundColor: '#F3F3F3' }}>
                            <h3 className='text-secondary text-xl uppercase font-semibold mb-2'>Address</h3>
                            <p className='text-accent text-sm'>Dhanmondi 17, Dhaka -1200, Bangladesh</p>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='text-white p-4' style={{ backgroundColor: '#D1A054' }}>
                        <BsFillClockFill className='text-2xl mx-auto'></BsFillClockFill>
                    </div>
                    <div className='border border-t-0'>
                        <div className='text-center m-4 mt-0 pt-5 pb-10 px-5' style={{ backgroundColor: '#F3F3F3' }}>
                            <h3 className='text-secondary text-xl uppercase font-semibold mb-2'>WORKING HOURS</h3>
                            <p className='text-accent text-sm'>Mon - Fri: 08:00 - 22:00</p>
                            <p className='text-accent text-sm'>Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurLocation;