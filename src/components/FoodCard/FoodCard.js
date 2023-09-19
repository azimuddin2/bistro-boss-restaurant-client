import React from 'react';

const FoodCard = ({ item }) => {
    const { image, name, price, recipe } = item;

    return (
        <div className="card bg-base-100 shadow-xl rounded-md">
            <figure>
                <img src={image} alt="Shoes"  className='w-full'/>
            </figure>
            <div className="card-body text-center pt-5">
                <h2 className="card-title flex justify-center capitalize text-secondary ">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;