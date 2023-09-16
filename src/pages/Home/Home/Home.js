import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import BistroBossInfo from '../BistroBossInfo/BistroBossInfo';
import PopularMenu from '../PopularMenu/PopularMenu';
import Contact from '../Contact/Contact';
import Featured from '../Featured/Featured';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroBossInfo></BistroBossInfo>
            <PopularMenu></PopularMenu>
            <Contact></Contact>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;