import React, { useState } from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import Error from '../../../Shared/Error/Error';
import Loading from '../../../Shared/Loading/Loading';
import MenuRow from './MenuRow';
import { useLoaderData } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import useTitle from '../../../../hooks/useTitle';

const ManageItems = () => {
    useTitle('Manage Items');
    const [axiosSecure] = useAxiosSecure();
    const { totalMenus } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(6);

    const totalPages = Math.ceil(totalMenus / itemsPerPage);
    const pageNumbers = [...Array(totalPages).keys()];

    const options = [4, 5, 6, 7, 8, 9, 10];
    const handleSelectChange = (event) => {
        setItemsPerPage(parseInt(event.target.value));
        setCurrentPage(0);
    };

    const { data: menus, isLoading, error, refetch } = useQuery({
        queryKey: ['all-menus', currentPage, itemsPerPage],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-menus?page=${currentPage}&limit=${itemsPerPage}`);
            return res.data;
        }
    })

    if (error) {
        return <Error message={error.message}></Error>
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='bg-[#F6F6F6] py-10 lg:p-10 min-h-screen'>
            <SectionTitle subHeading={'Hurry Up'} heading={'Manage All Items'}></SectionTitle>
            <div className='w-11/12 lg:w-4/5 mx-auto bg-white p-5 lg:p-10'>
                <div className='flex justify-between items-center mb-4 lg:mb-6'>
                    <h2 className='text-lg lg:text-xl uppercase font-bold font-family text-secondary'>Total Items: {totalMenus}</h2>
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
                                menus?.map((menuRow, index) => <MenuRow
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
            {/* pagination */}
            <div className=' text-center mt-10 mb-2 w-11/12 mx-auto'>
                {
                    pageNumbers?.map(number => <button
                        onClick={() => setCurrentPage(number)}
                        className={`btn btn-sm mb-1 mr-1 ${currentPage === number ? 'bg-primary text-white hover:bg-primary' : 'bg-white'}`}
                        key={number}
                    >{number + 1}</button>)
                }
                <select
                    value={itemsPerPage}
                    onChange={handleSelectChange}
                    className="select select-sm select-bordered ml-2"
                >
                    {
                        options.map(option => <option
                            key={option}
                            value={option}
                        >{option}</option>)
                    }
                </select>
            </div>
        </section>
    );
};

export default ManageItems;