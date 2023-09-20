import React from 'react';
import chefService from '../../../assets/Images/home/chef-service.jpg';

const BistroBossInfo = () => {
    return (
        <section className='max-w-screen-lg lg:mx-auto mx-5'>
            <div
                style={{
                    backgroundImage: `url(${chefService})`,
                    backgroundSize: 'cover',
                    width: '100%',
                    backgroundPosition: '100%'
                }}
                className='p-8 lg:p-20'
            >
                <div className='bg-white text-center p-5 lg:px-28 lg:py-12'>
                    <h1 className='font-family text-secondary text-2xl lg:text-4xl'>Bistro Boss</h1>
                    <p className='text-sm mt-2 text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </section>
    );
};

export default BistroBossInfo;