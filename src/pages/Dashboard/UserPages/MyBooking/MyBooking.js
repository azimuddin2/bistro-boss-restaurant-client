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
import useTitle from '../../../../hooks/useTitle';

const MyBooking = () => {
    useTitle('My Booking');
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
                    <div className='bg-[#F6F6F6] py-10 lg:p-10 min-h-screen'>
                        <SectionTitle subHeading={'Excellent Ambience'} heading={'My Bookings'}></SectionTitle>
                        <div className='w-11/12 lg:w-4/5 mx-auto bg-white p-5 lg:p-10'>
                            <div className='flex justify-between items-center mb-3 lg:mb-6'>
                                <h2 className='text-lg lg:text-xl uppercase font-bold font-family text-secondary'>Total Bookings: {bookings?.length}</h2>
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
                    <div className='w-11/12 lg:w-3/5 mx-auto my-20 lg:my-10'>
                        <img src={bookingImg} alt="" className='w-full' />
                        <Link to={'/dashboard/reservation'} className='flex justify-center mt-2 w-/'>
                            <Button>Book A Table <TbCalendarShare className='text-xl'></TbCalendarShare></Button>
                        </Link>
                    </div>
            }
        </>
    );
};

export default MyBooking;