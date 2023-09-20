import React from 'react';

const Error = ({message}) => {
    return (
        <div className='text-center py-28'>
            <p className='text-red-500'>Error: {message}</p>
        </div>
    );
};

export default Error;