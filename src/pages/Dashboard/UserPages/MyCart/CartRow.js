import React from 'react';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const CartRow = ({ row, index }) => {
    const { name, image, price } = row;

    return (
        <tr className='text-secondary font-semibold'>
            <td>{index + 1}</td>
            <td>
                <div className="w-20 flex items-center">
                    <img src={image} alt={name} className='w-full' />
                </div>
            </td>
            <td>{name}</td>
            <td>${price}</td>
            <td>
                <RiDeleteBin5Fill className='text-2xl text-red-600 cursor-pointer'></RiDeleteBin5Fill>
            </td>
        </tr>
    );
};

export default CartRow;