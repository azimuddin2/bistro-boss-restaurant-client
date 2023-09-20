import React from 'react';
import { FadeLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <FadeLoader color="#D99904" />
        </div>
    );
};

export default Loading;