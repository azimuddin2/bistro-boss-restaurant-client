import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useCart from '../../../../hooks/useCart';
import Loading from '../../../Shared/Loading/Loading';
import Error from '../../../Shared/Error/Error';
import CartRow from './CartRow';

const MyCart = () => {
    const [carts, , isLoading, error] = useCart();
    const totalPrice = carts?.reduce((sum, item) => item.price + sum, 0);

    if (error) {
        return <Error message={error.message}></Error>
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='max-h-screen'>
            <div className='bg-[#F6F6F6] pb-20 pt-10'>
                <SectionTitle subHeading={'My Cart'} heading={'WANNA ADD MORE?'}></SectionTitle>
                <div className='w-11/12 lg:w-3/4 mx-auto bg-white p-5 lg:p-10'>
                    <div className='flex justify-between items-center mb-6'>
                        <h2 className='lg:text-xl uppercase font-semibold font-family text-secondary'>Total Orders: {carts?.length}</h2>
                        <h2 className='lg:text-xl uppercase font-semibold font-family text-secondary'>Total Price: ${totalPrice}</h2>
                        <button className='btn btn-primary bg-[#D1A054] text-white border-none btn-sm font-family rounded-sm'>Pay</button>
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
                                    ></CartRow>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyCart;