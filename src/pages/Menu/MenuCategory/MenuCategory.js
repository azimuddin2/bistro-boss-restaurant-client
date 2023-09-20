import React from 'react';
import MenuItem from '../../../components/MenuItem/MenuItem';
import MenuCover from './MenuCover';
import { Link } from 'react-router-dom';

const MenuCategory = ({ items, image, title }) => {
    return (
        <div>
            {
                image && <MenuCover image={image} title={title}></MenuCover>
            }
            <div className='max-w-screen-lg lg:mx-auto mx-5'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10'>
                    {
                        items?.map(item => <MenuItem
                            key={item._id}
                            item={item}
                        ></MenuItem>)
                    }
                </div>
                <Link
                    to={`/order/${title}`}
                    className='flex justify-center my-10'
                >
                    <button className='btn btn-outline border-0 border-b-2'>Order your favorite food</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;