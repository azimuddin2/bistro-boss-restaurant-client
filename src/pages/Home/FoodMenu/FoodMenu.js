import React from 'react';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import FoodCard from '../../../components/FoodCard/FoodCard';
import Error from '../../Shared/Error/Error';
import Loading from '../../Shared/Loading/Loading';

const FoodMenu = () => {
    const [menu, isLoading, error] = useMenu();
    const menuCollection = menu?.slice(0, 3);

    if(error){
        return <Error message={error.message}></Error>
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <section className='max-w-screen-lg lg:mx-auto mx-5 mt-12'>
            <SectionTitle
                subHeading={'Should Try'}
                heading={'CHEF RECOMMENDS'}
            ></SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    menuCollection.map(item => <FoodCard
                        key={item._id}
                        item={item}
                    ></FoodCard>)
                }
            </div>
        </section>
    );
};

export default FoodMenu;