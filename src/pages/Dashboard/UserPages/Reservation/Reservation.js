import React, { useState } from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import Button from '../../../../components/Button/Button';
import { MdOutlineDateRange, MdOutlineErrorOutline } from 'react-icons/md';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './Reservation.css';
import useAuth from '../../../../hooks/useAuth';

const Reservation = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [selectDate, setSelectDate] = useState(new Date());

    const guests = [
        '1 Guest Person',
        '2 Guests Person',
        '3 Guests Person',
        '4 Guests Person',
        '5 Guests Person',
        '6 Guests Person',
        '7 Guests Person',
        '8 Guests Person',
        '10 Guests Person'
    ];

    const onSubmit = (data) => {

    };

    return (
        <section className='my-10'>
            <SectionTitle subHeading={'Reservation'} heading={'BOOK A TABLE'}></SectionTitle>
            <div className='p-5 lg:p-10 w-11/12 lg:w-4/5 mx-auto bg-[#F3F3F3]'>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>

                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text font-semibold">Date*</span>
                            </label>
                            <ReactDatePicker
                                {...register("date")}
                                className="w-full input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                selected={selectDate}
                                onChange={(date) => setSelectDate(date)}
                            ></ReactDatePicker>
                            <MdOutlineDateRange className='text-xl absolute top-12 right-3'></MdOutlineDateRange>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name*</span>
                            </label>
                            <input
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is required',
                                    }
                                })}
                                type='text'
                                defaultValue={user?.displayName}
                                placeholder="Name"
                                className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                            <label className="label pt-1">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.name.message}</span>}
                            </label>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Guest*</span>
                            </label>
                            <select
                                {...register("category")}
                                type='text'
                                className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            >
                                {
                                    guests.map((guest, index) => <option
                                        defaultValue={guest[0]}
                                        className='text-black capitalize'
                                        key={index}
                                        guest={guest}
                                    >{guest}</option>)
                                }
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email*</span>
                            </label>
                            <input
                                {...register("email")}
                                type='email'
                                defaultValue={user?.email}
                                disabled
                                style={{ backgroundColor: '#fff' }}
                                className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Phone*</span>
                            </label>
                            <input
                                {...register("phone", {
                                    required: {
                                        value: true,
                                        message: 'Phone Number is required',
                                    }
                                })}
                                type='text'
                                placeholder="Phone Number"
                                className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                            <label className="label pt-1">
                                {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.phone.message}</span>}
                            </label>
                        </div>




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