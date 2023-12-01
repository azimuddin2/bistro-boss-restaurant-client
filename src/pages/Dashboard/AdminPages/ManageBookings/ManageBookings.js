import React, { useState } from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Error from '../../../Shared/Error/Error';
import Loading from '../../../Shared/Loading/Loading';
import ManageBookingRow from './ManageBookingRow';
import { useLoaderData } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ManageBookings = () => {
    const [axiosSecure] = useAxiosSecure();
    const { totalBookings } = useLoaderData();
    const [currentPage, setCurrentPage] = useState(0);
    const [bookingsPerPage, setBookingsPerPage] = useState(5);

    const totalPages = Math.ceil(totalBookings / bookingsPerPage);

    const handlePrevClick = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const { data: bookings, isLoading, error, refetch } = useQuery({
        queryKey: ['all-bookings', currentPage, bookingsPerPage],
        queryFn: async () => {
            const res = await axiosSecure.get(`/all-bookings?page=${currentPage}&limit=${bookingsPerPage}`);
            return res.data;
        }
    });

    if (error) {
        return <Error message={error.message}></Error>
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <section className='bg-[#F6F6F6] py-10 lg:p-10 h-full'>
            <SectionTitle subHeading={"At a Glance!"} heading={"Manage All Bookings"}></SectionTitle>
            <div className='w-11/12 lg:w-5/6 mx-auto bg-white p-5 lg:p-10'>
                <div className='flex justify-between items-center mb-3'>
                    <h2 className='text-lg lg:text-xl uppercase font-bold font-family text-secondary'>All Bookings: {totalBookings}</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className='bg-[#D1A054] text-white font-family uppercase'>
                            <tr className='font-normal'>
                                <th></th>
                                <th>Name & Email</th>
                                <th>Phone Number</th>
                                <th>Guest Member</th>
                                <th>Booking Date & Time</th>
                                <th>Activity</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings?.map((booking, index) => <ManageBookingRow
                                    key={booking._id}
                                    index={index}
                                    booking={booking}
                                    refetch={refetch}
                                ></ManageBookingRow>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            {/* pagination */}
            <div className='flex items-center justify-center mt-10'>
                <button
                    onClick={handlePrevClick}
                    disabled={currentPage === 0}
                    className='btn btn-primary text-white btn-sm'
                >
                    <MdKeyboardArrowLeft className='text-xl' /> Previous
                </button>

                {/* <span>{`Page ${currentPage} of ${totalPages} of bookings: ${bookingsPerPage}`}</span> */}

                <button
                    onClick={handleNextClick}
                    disabled={currentPage === totalPages}
                    className='btn btn-sm btn-primary text-white ml-3'
                >
                    Next <MdKeyboardArrowRight className='text-xl' />
                </button>
            </div>
        </section>
    );
};

export default ManageBookings;