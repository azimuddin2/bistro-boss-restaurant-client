import React from 'react';

const BookingRow = ({ index, booking }) => {
    const { email, guest, date, time, status } = booking;

    return (
        <tr className='text-secondary font-medium'>
            <td>{index + 1}</td>
            <td>{email}</td>
            <td>{guest}</td>
            <td>{date.slice(0, 10)}</td>
            <td>{time}</td>
            <td className='flex items-center'>
                {
                    status === "success" ?
                        <>
                            <span className='badge bg-green-600 badge-xs mr-1'></span>
                            <span className='capitalize'>{status}</span>
                        </>
                        :
                        <>
                            <span className="loading loading-spinner loading-xs mr-1 text-green-500"></span>
                            <span className='capitalize'>{status}</span>
                        </>
                }
            </td>
        </tr>
    );
};

export default BookingRow;