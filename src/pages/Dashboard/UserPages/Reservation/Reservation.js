import React, { useState } from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import Button from '../../../../components/Button/Button';
import { MdOutlineDateRange, MdOutlineErrorOutline } from 'react-icons/md';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Reservation = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [selectDate, setSelectDate] = useState(new Date());

    const onSubmit = (data) => {

    };

    return (
        <section className='my-10'>
            <SectionTitle subHeading={'Reservation'} heading={'BOOK A TABLE'}></SectionTitle>
            <div className='p-5 lg:p-10 w-11/12 lg:w-4/5 mx-auto bg-[#F3F3F3]'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Date*</span>
                        </label>

                        <ReactDatePicker
                            name='date'
                            className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            showIcon
                            selected={selectDate}
                            onChange={(date) => setSelectDate(date)}
                            // dateFormat='Pp'
                        ></ReactDatePicker>

                        <MdOutlineDateRange className='text-xl mr-2 absolute right-1 top-3'></MdOutlineDateRange>
                    </div>




                    {/* <div className="form-control">
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
                    </div> */}

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

                    <div>
                        <Button>Book A Table</Button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Reservation;