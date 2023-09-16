import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/Images/home/featured.jpg';
import { Link } from 'react-router-dom';

const Featured = () => {
    return (
        <section
            className='max-w-screen-xl lg:mx-auto my-20 bg-fixed'
            style={{
                backgroundImage: `url(${featuredImg})`,
                backgroundSize: 'cover'
            }}
        >
            <div className=' bg-black bg-opacity-60 py-16'>
                <div className='max-w-screen-lg lg:mx-auto mx-5'>
                    <SectionTitle
                        subHeading={'Check it out'}
                        heading={'Featured Item'}
                    ></SectionTitle>
                    <div className='lg:flex items-center'>
                        <div>
                            <img src={featuredImg} alt="featured" className='w-full' />
                        </div>
                        <div className='text-white lg:ml-10 mt-8 lg:mt-0'>
                            <p className='mb-1'>January 01, 2024</p>
                            <p className='mb-2'>WHERE CAN I GET SOME?</p>
                            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                            <Link
                                to={'/'}
                            >
                                <button className='btn btn-outline border-0 border-b-2 text-white mt-6'>Order Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;