import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Error from '../../../Shared/Error/Error';
import Loading from '../../../Shared/Loading/Loading';
import BookingRow from './BookingRow';
import bookingImg from '../../../../assets/Images/others/authentication1.png';
import Button from '../../../../components/Button/Button';
import { Link } from 'react-router-dom';
import { TbCalendarShare } from 'react-icons/tb';

const MyBooking = () => {
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: bookings, isLoading, error } = useQuery({
        queryKey: ['bookings', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/bookings?email=${user?.email}`)
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
        <>
            {
                bookings.length > 0 ?
                    <div className='bg-[#F6F6F6] pb-20 p-10 h-full'>
                        <SectionTitle subHeading={'Excellent Ambience'} heading={'My Bookings'}></SectionTitle>
                        <div className='w-11/12 lg:w-5/6 mx-auto bg-white p-5 lg:p-10'>
                            <div className='flex justify-between items-center mb-6'>
                                <h2 className='lg:text-xl uppercase font-bold font-family text-secondary'>Total Bookings: {bookings?.length}</h2>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="table">
                                    <thead className='bg-[#D1A054] text-white font-family uppercase'>
                                        <tr className='font-normal'>
                                            <th></th>
                                            <th>Email</th>
                                            <th>Guest Member</th>
                                            <th>Booking Date</th>
                                            <th>Booking Time</th>
                                            <th>Activity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            bookings?.map((booking, index) => <BookingRow
                                                key={booking._id}
                                                index={index}
                                                booking={booking}
                                            ></BookingRow>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='w-full lg:w-3/5 mx-auto my-10'>
                        <img src={bookingImg} alt="" className='w-full' />
                        <Link to={'/dashboard/reservation'} className='flex justify-center mt-2'>
                            <Button>Book A Table <TbCalendarShare className='text-xl'></TbCalendarShare></Button>
                        </Link>
                    </div>
            }
        </>
    );
};

export default MyBooking;