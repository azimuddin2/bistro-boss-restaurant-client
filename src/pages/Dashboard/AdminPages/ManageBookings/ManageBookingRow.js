import React from 'react';
import { GoCheckCircleFill } from 'react-icons/go';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import swal from 'sweetalert';

const ManageBookingRow = ({ index, booking, refetch }) => {
    const [axiosSecure] = useAxiosSecure();
    const { _id, name, email, phone, guest, date, time, status } = booking;

    const handleStatusUpdate = (id) => {
        axiosSecure.patch(`/bookings/${id}`, { status: 'success' })
            .then(result => {
                if(result.data.modifiedCount){
                    swal({
                        title: "Status updated successfully",
                        icon: "success",
                        timer: 3000,
                    });
                    refetch();
                }
            })
    };

    return (
        <tr className='text-secondary font-medium'>
            <td>{index + 1}</td>
            <td>
                {name}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>
            <td>{phone}</td>
            <td>{guest}</td>
            <td>
                {date.slice(0, 10)}
                <br />
                <span className="badge badge-ghost badge-sm">{time}</span>
            </td>
            <td>
                {
                    status === "success" ?
                        <span className='capitalize text-green-600 font-bold'>{status}</span>
                        :
                        <span className='capitalize text-primary font-bold'>{status}</span>
                }
            </td>

            <td>
                {
                    status === "success" ?
                        <GoCheckCircleFill className='text-4xl text-green-700'></GoCheckCircleFill>
                        :
                        <GoCheckCircleFill
                            onClick={() => handleStatusUpdate(_id)}
                            className='text-4xl text-green-300 cursor-pointer'
                        ></GoCheckCircleFill>
                }
            </td>
        </tr>
    );
};

export default ManageBookingRow;