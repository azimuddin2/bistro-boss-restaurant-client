import React from 'react';

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className='w-4/5 md:w-2/4 lg:w-1/3 mx-auto text-center mb-10'>
            <p className='text-primary mb-2 text-base'>---{subHeading}---</p>
            <h2 className='text-secondary uppercase text-3xl font-normal border-y-2 py-3'>{heading}</h2>
        </div>
    );
};

export default SectionTitle;