import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { IoRestaurant } from 'react-icons/io5';
import Button from '../../../../components/Button/Button';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <section className='my-10'>
            <SectionTitle subHeading={"What's New?"} heading={'Add an Item'}></SectionTitle>
            <div className='p-8 w-4/5 mx-auto bg-[#F3F3F3]'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Recipe Name*</span>
                        </label>
                        <input
                            {...register("name", {
                                required: {
                                    value: true,
                                    message: 'Recipe Name is required',
                                }
                            })}
                            type='text'
                            placeholder="Recipe name"
                            className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                        />
                        <label className="label pt-1">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.name.message}</span>}
                        </label>
                    </div>

                    <Button>Add Item <IoRestaurant className='text-xl animate-pulse'></IoRestaurant></Button>
                </form>
            </div>
        </section>
    );
};

export default AddItem;