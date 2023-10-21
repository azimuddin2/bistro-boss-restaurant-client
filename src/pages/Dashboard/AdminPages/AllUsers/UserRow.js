import React from 'react';

const UserRow = ({ index, user, refetch }) => {
    const { name, email } = user;

    return (
        <tr className='text-secondary font-semibold'>
            <td>{index + 1}</td>
            <td>
                <div className="w-20 flex items-center">
                    <img src="" alt="" />
                </div>
            </td>
            <td>
                {name}
                <br />
                <span className="badge badge-ghost badge-sm">{email}</span>
            </td>


            {/* <td>{name}</td> */}
            {/* <td>{email}</td> */}
            {/* <td>
                <span className='tooltip' data-tip="Delete">
                    <RiDeleteBin5Fill
                        onClick={() => handleDelete(_id)}
                        className='text-2xl text-red-600 cursor-pointer'
                    ></RiDeleteBin5Fill>
                </span>
            </td> */}
        </tr>
    );
};

export default UserRow;