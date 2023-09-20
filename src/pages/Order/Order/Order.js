import React, { useState } from 'react';
import PageCover from '../../Shared/PageCover/PageCover';
import orderFoodImg from '../../../assets/Images/others/order-food.jpg';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import './Order.css';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import Error from '../../Shared/Error/Error';

const Order = () => {
    const categories = ['offered', 'coffee', 'dessert', 'pizza', 'burger', 'soup', 'salad']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    
    const [menu, isLoading, error] = useMenu();

    const offered = menu?.filter(item => item.category === 'offered');
    const coffee = menu?.filter(item => item.category === 'coffee');
    const dessert = menu?.filter(item => item.category === 'dessert');
    const pizza = menu?.filter(item => item.category === 'pizza');
    const burger = menu?.filter(item => item.category === 'burger');
    const soup = menu?.filter(item => item.category === 'soup');
    const salad = menu?.filter(item => item.category === 'salad');

    if(error){
        return <Error message={error.message}></Error>
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <section>
            <PageCover
                image={orderFoodImg}
                title={'Order Food'}
                details={'Would you like to try a dish?'}
            ></PageCover>

            <div className='max-w-screen-lg lg:mx-auto mx-5 mt-16'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>Offer</Tab>
                        <Tab>Coffee</Tab>
                        <Tab>Dessert</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Burger</Tab>
                        <Tab>Soup</Tab>
                        <Tab>Salad</Tab>
                    </TabList>

                    <TabPanel>
                        <OrderTab items={offered}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={coffee}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={burger}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>
                    
                </Tabs>
            </div>

        </section>
    );
};

export default Order;