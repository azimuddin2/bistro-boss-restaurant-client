import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from '../../../assets/Images/home/banner1.jpg';
import banner2 from '../../../assets/Images/home/banner2.jpg';
import banner3 from '../../../assets/Images/home/banner3.png';
import banner4 from '../../../assets/Images/home/banner4.jpg';
import banner5 from '../../../assets/Images/home/banner5.png';
import banner6 from '../../../assets/Images/home/banner6.png';
import './Banner.css';

const Banner = () => {
    return (
        <section className='max-w-screen-xl lg:mx-auto'>
            <Carousel>
                <div>
                    <img src={banner1} alt='banner' />
                </div>
                <div>
                    <img src={banner2} alt='banner' />
                </div>
                <div>
                    <img src={banner3} alt='banner' />
                </div>
                <div>
                    <img src={banner4} alt='banner' />
                </div>
                <div>
                    <img src={banner5} alt='banner' />
                </div>
                <div>
                    <img src={banner6} alt='banner' />
                </div>
            </Carousel>
        </section>
    );
};

export default Banner;