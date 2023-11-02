import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { IoRestaurant } from 'react-icons/io5';
import Button from '../../../../components/Button/Button';
import { BiImageAdd } from 'react-icons/bi';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import swal from 'sweetalert';

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const categories = ['offered', 'coffee', 'dessert', 'pizza', 'burger', 'soup', 'salad'];

    const imgHostingToken = process.env.REACT_APP_Image_Upload_token;
    const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${imgHostingToken}`

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(imgHostingUrl, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;

                    const addNewItem = {
                        name,
                        category,
                        price: parseFloat(price),
                        image: imgURL,
                        recipe
                    };
                    axiosSecure.post('menu', addNewItem)
                        .then(data => {
                            if (data.data.insertedId) {
                                reset();
                                swal({
                                    title: "Item added successfully",
                                    icon: "success",
                                    timer: 2000,
                                });
                            }
                        })
                }
            })
    };

    return (
        <section className='my-10'>
            <SectionTitle subHeading={"What's New?"} heading={'Add an Item'}></SectionTitle>
            <div className='p-5 lg:p-10 w-11/12 lg:w-4/5 mx-auto bg-[#F3F3F3]'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
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
                                placeholder="Recipe Name"
                                className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                            <label className="label pt-1">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Category*</span>
                            </label>
                            <select
                                {...register("category")}
                                type='text'
                                className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            >
                                {
                                    categories?.map((category, index) => <option
                                        defaultValue={category}
                                        className='text-black capitalize'
                                        key={index}
                                        category={category}
                                    >{category}</option>)
                                }
                            </select>
                        </div>
                        <div className="form-control">
                            <label
                                htmlFor='image'
                                className="input w-full h-24 max-w-sm cursor-pointer text-center pt-4 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            >
                                <span className="label-text text-accent font-medium">Upload Photo</span>
                                <div className=' flex justify-center items-center'>
                                    <BiImageAdd className='text-4xl text-accent'></BiImageAdd>
                                </div>
                            </label>
                            <input
                                {...register("image", {
                                    required: {
                                        value: true,
                                        message: 'Image is required',
                                    },
                                })}
                                id="image"
                                type="file"
                                className="hidden"
                            />
                            <label className="label pt-1">
                                {errors.image?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.image.message}</span>}
                            </label>
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
                            placeholder='Recipe Details...'
                            type="text"
                            cols="10"
                            rows="5"
                        ></textarea>
                        <label className="label pt-1">
                            {errors.recipe?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.recipe.message}</span>}
                        </label>
                    </div>
                    <Button>Add Item <IoRestaurant className='text-xl'></IoRestaurant></Button>
                </form>
            </div>
        </section>
    );
};

export default AddItem;