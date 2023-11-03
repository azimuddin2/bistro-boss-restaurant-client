import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import Button from '../../../../components/Button/Button';
import { IoRestaurant } from 'react-icons/io5';
import { useForm } from 'react-hook-form';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import swal from 'sweetalert';

const UpdateItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const menuItem = useLoaderData();
    const { _id, name, category, price, recipe } = menuItem;
    const navigate = useNavigate();

    const onSubmit = (data) => {
        const { name, price, recipe } = data;

        const updateItem = {
            name,
            price: parseFloat(price),
            recipe
        };
        axiosSecure.put(`menu/${_id}`, updateItem)
            .then(result => {
                if (result.data.modifiedCount) {
                    reset();
                    swal({
                        title: "Item updated successfully",
                        icon: "success",
                        timer: 3000,
                    });
                    navigate('/dashboard/manage-items');
                }
            })
    };

    return (
        <section className='my-10'>
            <SectionTitle subHeading={"What's edit"} heading={"Update Item"}></SectionTitle>
            <div className='p-5 lg:p-10 w-11/12 lg:w-4/5 mx-auto bg-[#F3F3F3]'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Name*</span>
                        </label>
                        <input
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Recipe name is required',
                                }
                            })}
                            type='text'
                            defaultValue={name}
                            placeholder="Recipe Name"
                            className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                        <label className="label pt-1">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.name.message}</span>}
                        </label>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Category*</span>
                            </label>
                            <input
                                type='text'
                                defaultValue={category}
                                disabled
                                className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Price*</span>
                            </label>
                            <input
                                {...register("price", {
                                    required: {
                                        value: true,
                                        message: 'Price is required',
                                    }
                                })}
                                type='number'
                                defaultValue={price}
                                placeholder="Price"
                                className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                            <label className="label pt-1">
                                {errors.price?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.price.message}</span>}
                            </label>
                        </div>
                    </div>
                    <div className="form-control mb-5">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Details*</span>
                        </label>
                        <textarea
                            {...register("recipe", {
                                required: {
                                    value: true,
                                    message: 'Recipe details is required'
                                }
                            })}
                            className='textarea rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
                            defaultValue={recipe}
                            placeholder='Recipe Details...'
                            type="text"
                            cols="10"
                            rows="5"
                        ></textarea>
                        <label className="label pt-1">
                            {errors.recipe?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.recipe.message}</span>}
                        </label>
                    </div>
                    <Button>Update Item <IoRestaurant className='text-xl'></IoRestaurant></Button>
                </form>
            </div>
        </section>
    );
};

export default UpdateItem;