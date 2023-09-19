import React from 'react';
import PageCover from '../Shared/PageCover/PageCover';
import menuBgImage from '../../assets/Images/menu/menu-bg.jpg';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
import coffeeCoverImg from '../../assets/Images/menu/coffee-bg.jpg';
import dessertCoverImg from '../../assets/Images/menu/dessert-bg.jpg';
import pizzaCoverImg from '../../assets/Images/menu/pizza-bg.jpg';
import burgerCoverImg from '../../assets/Images/menu/burger-bg.png';
import soupCoverImg from '../../assets/Images/menu/soup-bg.jpg';
import saladCoverImg from '../../assets/Images/menu/salad-bg.jpg';

const Menu = () => {
    const [menu, isLoading, isError] = useMenu();

    const offered = menu?.filter(item => item.category === 'offered');
    const coffee = menu?.filter(item => item.category === 'coffee');
    const dessert = menu?.filter(item => item.category === 'dessert');
    const pizza = menu?.filter(item => item.category === 'pizza');
    const burger = menu?.filter(item => item.category === 'burger');
    const soup = menu?.filter(item => item.category === 'soup');
    const salad = menu?.filter(item => item.category === 'salad');

    if (isError) {
        return <p>Error</p>
    }

    if (isLoading) {
        return <p>Loading...</p>
    }

    return (
        <section>
            <PageCover
                image={menuBgImage}
                title={"Our Menu"}
                details={"Would you like to try a dish?"}
            ></PageCover>
            <div className='mt-16'>
                <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>
                <MenuCategory items={offered}></MenuCategory>
                <MenuCategory items={coffee} image={coffeeCoverImg} title={"Coffee"}></MenuCategory>
                <MenuCategory items={dessert} image={dessertCoverImg} title={"dessert"}></MenuCategory>
                <MenuCategory items={pizza} image={pizzaCoverImg} title={"Pizza"}></MenuCategory>
                <MenuCategory items={burger} image={burgerCoverImg} title={"Burger"}></MenuCategory>
                <MenuCategory items={soup} image={soupCoverImg} title={"Soup"}></MenuCategory>
                <MenuCategory items={salad} image={saladCoverImg} title={"Salad"}></MenuCategory>
            </div>
        </section>
    );
};

export default Menu;