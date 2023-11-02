import React from 'react';
import swal from 'sweetalert';
import { BiSolidEdit } from 'react-icons/bi';
import { RiDeleteBin5Fill } from 'react-icons/ri';

const MenuRow = ({ index, menuRow, refetch }) => {
    const { _id, image, name, category, price } = menuRow;

    const handleDelete = (id) => {
        swal({
            title: "Are you sure?",
            text: `Food Name - ${name}`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/menu/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.deletedCount > 0) {
                                refetch();
                                swal("Poof! Your imaginary file has been deleted!", {
                                    icon: "success",
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
                <div className="w-20 flex items-center">
                    <img src={image} alt={name} className='w-full' />
                </div>
            </td>
            <td>{name}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>
                <span className='tooltip' data-tip="Edit">
                    <BiSolidEdit
                        className='text-2xl text-primary cursor-pointer'
                    ></BiSolidEdit>
                </span>
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

export default MenuRow;