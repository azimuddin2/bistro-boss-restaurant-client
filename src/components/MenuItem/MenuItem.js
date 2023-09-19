import React from 'react';

const MenuItem = ({ item }) => {
    const { image, name, recipe, price } = item;

    return (
        <div className='md:flex md:justify-between md:items-center shadow-md lg:shadow-none p-5 lg:p-0 rounded-sm'>
            <img src={image} alt={name} className='w-32' />
            <div className='lg:mx-5'>
                <div className='flex justify-between mt-2 md:mt-0'>
                    <h3 className='uppercase text-secondary text-base md:text-lg'>{name} --------------</h3>
                    <p className='text-primary font-semibold'>${price}</p>
                </div>
                <p className='text-accent text-sm md:text-base mt-1 md:mt-0'>{recipe}</p>
            </div>
        </div>
    );
};

export default MenuItem;