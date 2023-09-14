import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import salads from '../../../assets/Images/home/salads.jpg';
import pizzas from '../../../assets/Images/home/pizzas.jpg';
import soups from '../../../assets/Images/home/soups.jpg';
import desserts from '../../../assets/Images/home/desserts.jpg';
import drinks from '../../../assets/Images/home/drinks.jpg';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Category = () => {

    const categoryFoods = [
        {
            id: 1,
            image: salads,
            title: 'Salads'
        },
        {
            id: 2,
            image: pizzas,
            title: 'Pizzas'
        },
        {
            id: 3,
            image: soups,
            title: 'Soups'
        },
        {
            id: 4,
            image: desserts,
            title: 'Desserts'
        },
        {
            id: 5,
            image: drinks,
            title: 'Drinks'
        },
    ];

    return (
        <section className='max-w-screen-lg lg:mx-auto mx-5 my-12'>
            <SectionTitle
                subHeading={"From 11:00am to 10:00pm"}
                heading={"Order Online"}
            ></SectionTitle>
            <Swiper
                style={{
                    "--swiper-pagination-color": "#CD9003",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "12px",
                    "--swiper-pagination-bullet-horizontal-gap": "3px",
                }}
                className="mySwiper"
                breakpoints={{
                    576: {
                        width: 576,
                        slidesPerView: 1,
                    },
                    768: {
                        width: 768,
                        slidesPerView: 3,
                    },
                    1200: {
                        width: 1200,
                        slidesPerView: 4,

                    },
                }}
                modules={[A11y, Pagination, Autoplay]}
                spaceBetween={16}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
            >
                <div>
                    {
                        categoryFoods.map(categoryFood => <SwiperSlide key={categoryFood.id}>
                            <div className='mb-20'>
                                <img src={categoryFood.image} alt={categoryFood.title} className='w-full' />
                                <h2 className='text-xl uppercase -mt-14 text-center text-white'>{categoryFood.title}</h2>
                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </section>
    );
};

export default Category;