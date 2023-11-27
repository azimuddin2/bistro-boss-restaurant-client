import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useMenu from '../../../../hooks/useMenu';
import Error from '../../../Shared/Error/Error';
import Loading from '../../../Shared/Loading/Loading';
import MenuRow from './MenuRow';

const ManageItems = () => {
    const [menu, isLoading, error, refetch] = useMenu();

    if (error) {
        return <Error message={error.message}></Error>
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='bg-[#F6F6F6] py-10 lg:p-10 h-full'>
            <SectionTitle subHeading={'Hurry Up'} heading={'Manage All Items'}></SectionTitle>
            <div className='w-11/12 lg:w-4/5 mx-auto bg-white p-5 lg:p-10'>
                <div className='flex justify-between items-center mb-4 lg:mb-6'>
                    <h2 className='text-lg lg:text-xl uppercase font-bold font-family text-secondary'>Total Items: {menu.length}</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table uppercase font-family">
                        <thead className='bg-[#D1A054] text-white'>
                            <tr className='font-normal'>
                                <th></th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Category</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                menu?.map((menuRow, index) => <MenuRow
                                    key={menuRow._id}
                                    index={index}
                                    menuRow={menuRow}
                                    refetch={refetch}
                                ></MenuRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default ManageItems;