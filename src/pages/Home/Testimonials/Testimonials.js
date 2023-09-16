import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import Review from './Review';
import { A11y, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/navigation";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])

    return (
        <section className='max-w-screen-lg lg:mx-auto mx-5 mb-20'>
            <SectionTitle
                subHeading={'What Our Clients Say'}
                heading={'Testimonials'}
            ></SectionTitle>
            <div>
                <Swiper
                    style={{
                        // "--swiper-navigation-color": "#D99904",
                        "--swiper-navigation-size": "30px",
                    }}
                    className="mySwiper"
                    breakpoints={{
                        576: {
                            width: 576,
                            slidesPerView: 1,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 1,
                        },
                        1024: {
                            width: 1024,
                            slidesPerView: 1,

                        },
                    }}
                    modules={[A11y, Navigation, Autoplay]}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    navigation={true}
                    pagination={{ clickable: true }}
                >
                    <div>
                        {
                            reviews.map(review => <SwiperSlide key={review._id}>
                                <Review review={review}></Review>
                            </SwiperSlide>)
                        }
                    </div>
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;