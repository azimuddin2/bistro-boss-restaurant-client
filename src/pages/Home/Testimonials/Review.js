import React from 'react';
import quote from '../../../assets/Images/others/quote.png';
import StarRatings from 'react-star-ratings';

const Review = ({ review }) => {
    const { name, details, rating } = review;

    return (
        <div className='px-10 lg:px-40'>
            <div className='text-center mb-6'>
                <StarRatings
                    rating={rating}
                    starRatedColor="#D99904"
                    name="rating"
                    starSpacing="2px"
                    starDimension="30px"
                />
            </div>
            <img src={quote} alt="quote" className='mx-auto w-16 h-16' />
            <div className='text-center mt-6'>
                <p className='text-base text-accent'>{details}</p>
                <h2 className='text-primary text-2xl mt-3'>{name}</h2>
            </div>
        </div>
    );
};

export default Review;