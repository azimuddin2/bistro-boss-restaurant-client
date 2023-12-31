import React from 'react';
import swal from 'sweetalert';
import { BiSolidEdit } from 'react-icons/bi';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useNavigate } from 'react-router-dom';

const MenuRow = ({ index, menuRow, refetch }) => {
    const [axiosSecure] = useAxiosSecure();
    const { _id, image, name, category, price } = menuRow;
    const navigate = useNavigate();

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
                    axiosSecure.delete(`/menu/${id}`)
                        .then(result => {
                            if (result.data.deletedCount > 0) {
                                refetch();
                                swal("Poof! Your Product has been deleted!", {
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
                        onClick={() => navigate(`/dashboard/update-item/${_id}`)}
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