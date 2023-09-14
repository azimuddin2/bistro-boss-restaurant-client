import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../components/MenuItem/MenuItem';

const PopularMenu = () => {
    const [foodMenu, setFoodMenu] = useState([]);

    useEffect(() => {
        fetch('food-menu.json')
            .then(res => res.json())
            .then(data => {
                const popularItems = data.filter(item => item.category === 'popular');
                setFoodMenu(popularItems);
            })
    }, [])

    return (
        <section className='max-w-screen-lg lg:mx-auto mx-5 my-12'>
            <SectionTitle
                subHeading={"Popular Items"}
                heading={"From Our Menu"}
            ></SectionTitle>
            <div className=' grid grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    foodMenu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </section>
    );
};

export default PopularMenu;