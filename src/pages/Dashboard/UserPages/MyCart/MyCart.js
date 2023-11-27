import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useCart from '../../../../hooks/useCart';
import Loading from '../../../Shared/Loading/Loading';
import Error from '../../../Shared/Error/Error';
import CartRow from './CartRow';
import { FaShoppingCart } from 'react-icons/fa';
import orderFoodImg from '../../../../assets/Images/others/order-food.gif';
import { Link } from 'react-router-dom';

const MyCart = () => {
    const [carts, refetch, isLoading, error] = useCart();
    const totalPrice = carts?.reduce((sum, item) => item.price + sum, 0);

    if (error) {
        return <Error message={error.message}></Error>
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <>
            {
                carts.length > 0 ?
                    <div className='bg-[#F6F6F6] py-10 lg:p-10 h-full'>
                        <SectionTitle subHeading={'My Cart'} heading={'WANNA ADD MORE?'}></SectionTitle>
                        <div className='w-11/12 lg:w-3/4 mx-auto bg-white p-5 lg:p-10'>
                            <div className='lg:flex justify-between items-center mb-4 lg:mb-6'>
                                <h2 className='text-lg lg:text-xl uppercase font-bold font-family text-secondary'>Total Orders: {carts?.length}</h2>
                                <h2 className='text-lg lg:text-xl uppercase font-bold font-family text-secondary'>Total Price: ${totalPrice.toFixed(2)}</h2>
                                <Link to={'/dashboard/payment'} className='flex justify-end'>
                                    <button disabled={carts.length < 1} className='btn btn-primary bg-[#D1A054] text-white border-none btn-sm font-family rounded-sm'>Pay</button>
                                </Link>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="table uppercase font-family">
                                    <thead className='bg-[#D1A054] text-white'>
                                        <tr className='font-normal'>
                                            <th></th>
                                            <th>Item Image</th>
                                            <th>Item Name</th>
                                            <th>Price</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            carts?.map((row, index) => <CartRow
                                                key={row._id}
                                                index={index}
                                                row={row}
                                                refetch={refetch}
                                            ></CartRow>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='py-12'>
                        <img src={orderFoodImg} alt="Order Food" className='mx-auto' />
                        <Link to={'/order/coffee'} className='flex justify-center'>
                            <button className='absolute bottom-20 btn btn-primary text-white'>Please Order Food <FaShoppingCart className='text-xl'></FaShoppingCart></button>
                        </Link>
                    </div>
            }
        </>
    );
};

export default MyCart;