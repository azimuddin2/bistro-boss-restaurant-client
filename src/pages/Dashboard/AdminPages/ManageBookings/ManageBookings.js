import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Error from '../../../Shared/Error/Error';
import Loading from '../../../Shared/Loading/Loading';
import ManageBookingRow from './ManageBookingRow';

const ManageBookings = () => {
    const [axiosSecure] = useAxiosSecure();

    const { data: bookings, isLoading, error, refetch } = useQuery({
        queryKey: ['all-bookings'],
        queryFn: async () => {
            const res = await axiosSecure.get('/all-bookings');
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
        <section className='bg-[#F6F6F6] pb-20 p-10 h-full'>
            <SectionTitle subHeading={"At a Glance!"} heading={"Manage All Bookings"}></SectionTitle>
            <div className='w-11/12 lg:w-5/6 mx-auto bg-white p-5 lg:p-10'>
                <div className='flex justify-between items-center mb-6'>
                    <h2 className='lg:text-xl uppercase font-bold font-family text-secondary'>All Bookings: {bookings?.length}</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead className='bg-[#D1A054] text-white font-family uppercase'>
                            <tr className='font-normal'>
                                <th></th>
                                <th>Name & Email</th>
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
        </section>
    );
};

export default ManageBookings;