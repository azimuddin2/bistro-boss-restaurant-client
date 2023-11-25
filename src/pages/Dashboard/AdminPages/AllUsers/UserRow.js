import React from 'react';
import userImg from '../../../../assets/Images/others/user.png';
import { RiAdminFill, RiDeleteBin5Fill } from 'react-icons/ri';
import swal from 'sweetalert';

const UserRow = ({ index, user, refetch }) => {
    const { name, email, role, image } = user;

    const handleMakeAdmin = (user) => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    swal({
                        icon: 'success',
                        title: `${user.email}`,
                        text: `${user.name} is an Admin Now!`,
                        timer: 2000,
                    })
                }
            })
    };

    const handleDelete = (user) => {
        swal({
            title: "Are you sure?",
            text: `User account - ${user.email}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/users/${user._id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.deletedCount > 0) {
                                refetch();
                                swal(`${user.email} has been deleted!`, {
                                    icon: "success",
                                    timer: 2000,
                                });
                            }
                        })
                }
            });
    };

    return (
        <tr className='text-secondary font-semibold'>
            <td>{index + 1}</td>
            <td>
                <div className="w-12 flex items-center rounded-full border">
                    {
                        image ?
                            <img src={image} alt='user-photo' className='w-full rounded-full' />
                            :
                            <img src={userImg} alt='user-photo' className='w-full rounded-full' />
                    }
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
                            <RiAdminFill
                                onClick={() => handleMakeAdmin(user)}
                                className='text-2xl text-primary cursor-pointer'
                            ></RiAdminFill>
                        </span>
                }
            </td>
            <td>
                <span className='tooltip' data-tip="Delete">
                    <RiDeleteBin5Fill
                        onClick={() => handleDelete(user)}
                        className='text-2xl text-red-600 cursor-pointer'
                    ></RiDeleteBin5Fill>
                </span>
            </td>
        </tr>
    );
};

export default UserRow;