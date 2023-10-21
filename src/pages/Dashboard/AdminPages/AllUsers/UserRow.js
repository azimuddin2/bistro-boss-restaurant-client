import React from 'react';
import userImg from '../../../../assets/Images/others/user.png';
import { RiAdminFill, RiDeleteBin5Fill } from 'react-icons/ri';

const UserRow = ({ index, user, refetch }) => {
    const { _id, name, email, role } = user;

    const handleDelete = () => {

    };

    return (
        <tr className='text-secondary font-semibold'>
            <td>{index + 1}</td>

            <td>
                <div className="w-12 flex items-center rounded-full border">
                    <img src={userImg} alt="User" className='w-full rounded-full' />
                </div>
            </td>

            <td>
                {name}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>


            <td>
                {
                    role === 'admin' ?
                        <span className='uppercase font-bold text-secondary font-family'>Admin</span>
                        :
                        <span className='tooltip' data-tip="Make Admin">
                            <RiAdminFill className='text-2xl text-primary cursor-pointer'></RiAdminFill>
                        </span>
                }
            </td>

            <td>
                <span className='tooltip' data-tip="Delete">
                    <RiDeleteBin5Fill
                        onClick={() => handleDelete(_id)}
                        className='text-2xl text-red-600 cursor-pointer'
                    ></RiDeleteBin5Fill>
                </span>
            </td>

        </tr>
    );
};

export default UserRow;