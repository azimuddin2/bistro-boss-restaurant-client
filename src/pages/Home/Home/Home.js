import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import BistroBossInfo from '../BistroBossInfo/BistroBossInfo';
import PopularMenu from '../PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <BistroBossInfo></BistroBossInfo>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;