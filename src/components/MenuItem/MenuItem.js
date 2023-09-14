import React from 'react';

const MenuItem = ({item}) => {
    const {image, name, recipe, price} = item;

    return (
        <div className='flex justify-between'>
            <img src={image} alt="" className=' w-20 h-20'/>
            <div className='mx-5'>
                <h3>{name}</h3>
                <p>{recipe}</p>
            </div>
            <p>${price}</p>
        </div>
    );
};

export default MenuItem;