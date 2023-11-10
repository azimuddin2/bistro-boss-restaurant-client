import React from 'react';

const BookingRow = ({ index, booking }) => {
    const { email, phone, guest, date, time, status } = booking;

    return (
        <tr className='text-secondary font-medium'>
            <td>{index + 1}</td>
            <td>{email}</td>
            <td>{phone}</td>
            <td>{guest}</td>
            <td>{date.slice(0, 10)}</td>
            <td className='w-full'>{time}</td>
            <td><span className="loading loading-spinner loading-xs">{status}</span></td>
        </tr>
    );
};

export default BookingRow;