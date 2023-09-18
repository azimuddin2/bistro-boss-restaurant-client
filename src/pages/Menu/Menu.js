import React from 'react';
import PageCover from '../Shared/PageCover/PageCover';
import menuBgImage from '../../assets/Images/menu/menu-bg.jpg';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory/MenuCategory';
import menuCoverImg from '../../assets/Images/home/chef-service.jpg';

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
            <div>
                <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>
                <MenuCategory items={offered}></MenuCategory>
                <MenuCategory items={coffee} image={menuCoverImg} title={"Coffee"}></MenuCategory>
                <MenuCategory items={dessert} image={menuCoverImg} title={"dessert"}></MenuCategory>
                <MenuCategory items={pizza} image={menuCoverImg} title={"Pizza"}></MenuCategory>
                <MenuCategory items={burger} image={menuCoverImg} title={"Burger"}></MenuCategory>
                <MenuCategory items={soup} image={menuCoverImg} title={"Soup"}></MenuCategory>
                <MenuCategory items={salad} image={menuCoverImg} title={"Salad"}></MenuCategory>
            </div>
        </section>
    );
};

export default Menu;