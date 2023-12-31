import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../components/MenuItem/MenuItem';
import { Link } from 'react-router-dom';
import useMenu from '../../../hooks/useMenu';
import Loading from '../../Shared/Loading/Loading';
import Error from '../../Shared/Error/Error';

const PopularMenu = () => {
    const [menu, isLoading, error] = useMenu();

    const popularMenu = menu?.filter(item => item.category === 'popular');

    if (error) {
        return <Error message={error.message}></Error>
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='max-w-screen-lg lg:mx-auto mx-5 my-12'>
            <SectionTitle
                subHeading={"Popular Items"}
                heading={"From Our Menu"}
            ></SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10'>
                {
                    popularMenu?.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <Link
                to={'/menu'}
                className='flex justify-center mt-10'
            >
                <button className='btn btn-outline border-0 border-b-2'>View Full Menu</button>
            </Link>
        </section>
    );
};

export default PopularMenu;