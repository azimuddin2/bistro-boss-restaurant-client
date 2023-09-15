import React from 'react';
import { HiOutlinePhoneArrowUpRight } from 'react-icons/hi2'

const Contact = () => {
    return (
        <section className='max-w-screen-lg lg:mx-auto mx-5 mb-12'>
            <div className="md:flex justify-center items-center bg-secondary rounded-none py-14">
                <figure>
                    <HiOutlinePhoneArrowUpRight className='text-5xl text-white mx-auto'></HiOutlinePhoneArrowUpRight>
                </figure>
                <div className="lg:ml-5 mt-3">
                    <h2 className="text-2xl lg:text-3xl text-center text-white font-sans">Call Us: +88 01883061967</h2>
                </div>
            </div>
        </section>
    );
};

export default Contact;