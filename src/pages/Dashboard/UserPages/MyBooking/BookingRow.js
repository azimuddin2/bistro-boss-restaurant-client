import React from 'react';
import { GoCheckCircleFill } from 'react-icons/go';

const BookingRow = ({ index, booking }) => {
    const { name, email, guest, date, time, status } = booking;

    return (
        <tr className='text-secondary font-medium'>
            <td>{index + 1}</td>
            <td>
                {name}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{guest}</td>
            <td>
                {date.slice(0, 10)}
                <br />
                <span className="badge badge-ghost badge-sm">{time}</span>
            </td>
            <td className='flex items-center'>
                {
                    status === "success" ?
                        <>
                            <GoCheckCircleFill className='text-xl text-green-600 mr-1'></GoCheckCircleFill>
                            <span className='capitalize text-green-600'>{status}</span>
                        </>
                        :
                        <>
                            <span className="loading loading-spinner loading-xs mr-1 text-primary"></span>
                            <span className='capitalize text-primary'>{status}</span>
                        </>
                }
            </td>
        </tr>
    );
};

export default BookingRow;