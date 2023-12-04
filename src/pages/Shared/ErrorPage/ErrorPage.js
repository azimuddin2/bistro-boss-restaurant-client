import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import errorGif from '../../../assets/Images/others/error.gif';
import useTitle from '../../../hooks/useTitle';

const ErrorPage = () => {
    useTitle('Error');
    return (
        <div className='my-20 text-center w-full lg:w-1/2 mx-auto'>
            <img src={errorGif} alt="error" className='mx-auto' />
            <Link to="/">
                <button className='btn btn-primary text-white'>
                    <FaHome className='text-xl'></FaHome>
                    <span className='mt-1 ml-1 font-family font-semibold'>Back to Home</span>
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;