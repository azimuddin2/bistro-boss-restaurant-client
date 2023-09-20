import React from 'react';
import { FiShoppingCart } from 'react-icons/fi'

const FoodCard = ({ item }) => {
    const { image, name, price, recipe } = item;

    return (
        <div className="card bg-base-100 shadow-lg rounded-md">
            <figure>
                <img src={image} alt="Shoes" className='w-full' />
            </figure>
            <p className=' rounded-full font-medium bg-secondary text-white absolute right-2 top-2 py-1 px-3'>${price}</p>
            <div className="card-body text-center pt-5">
                <h2 className="card-title flex justify-center capitalize text-secondary ">{name}</h2>
                <p className='text-sm text-accent'>{recipe}</p>
                <div className='flex justify-center mt-2 group'>
                    <button
                        style={{ background: 'var(--Dark-07, #F3F3F3)' }}
                        className='add-cart-btn btn btn-outline border-0 border-b-2 text-primary px-10 group-hover:text-primary group-hover:border-primary'
                    >
                        Add to cart<FiShoppingCart className=' text-xl'></FiShoppingCart>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;