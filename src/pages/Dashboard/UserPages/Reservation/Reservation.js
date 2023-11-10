import React, { useState } from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import Button from '../../../../components/Button/Button';
import { MdOutlineDateRange, MdOutlineErrorOutline } from 'react-icons/md';
import { FiCheckCircle } from 'react-icons/fi';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './Reservation.css';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import OurLocation from '../../../ContactUs/OurLocation/OurLocation';

const Reservation = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [selectDate, setSelectDate] = useState(new Date());
    const navigate = useNavigate();

    const times = [
        "08:00 AM - 08:30 AM",
        "08:30 AM - 09:00 AM",
        "09:00 AM - 09:30 AM",
        "09:30 AM - 10:00 AM",
        "10:00 AM - 10:30 AM",
        "10:30 AM - 11:00 AM",
        "11:00 AM - 11:30 AM",
        "11:30 AM - 12:00 AM",
        "01:00 PM - 01:30 PM",
        "01:30 PM - 02:00 PM",
        "02:00 PM - 02:30 PM",
        "02:30 PM - 03:00 PM",
        "03:00 PM - 03:30 PM",
        "03:30 PM - 04:00 PM",
        "04:00 PM - 04:30 PM",
        "04:30 PM - 05:00 PM",
        "05:00 PM - 05:30 PM",
        "05:30 PM - 06:00 PM",
        "06:00 PM - 06:30 PM",
        "06:30 PM - 07:00 PM",
        "07:00 PM - 07:30 PM",
        "07:30 PM - 08:00 PM",
        "08:00 PM - 09:00 PM",
        "09:00 PM - 10:00 PM"
    ];

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
        const { time, guest, name, phone } = data;

        const bookingInfo = {
            selectDate,
            time,
            guest,
            name,
            email: user?.email,
            phone,
            status: 'pending'
        };
        axiosSecure.post('bookings', bookingInfo)
            .then(result => {
                if (result.data.insertedId) {
                    reset();
                    swal({
                        title: "Table booking successfully",
                        icon: "success",
                    });
                    navigate('/dashboard/my-booking');
                }
            })
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
                                <span className="label-text font-semibold">Time Available*</span>
                            </label>
                            <select
                                {...register("time")}
                                type='text'
                                className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            >
                                {
                                    times.map((time, index) => <option
                                        key={index}
                                        time={time}
                                    >{time}</option>)
                                }
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Guest*</span>
                            </label>
                            <select
                                {...register("guest")}
                                type='text'
                                className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            >
                                {
                                    guests.map((guest, index) => <option
                                        className='text-black capitalize'
                                        key={index}
                                        guest={guest}
                                    >{guest}</option>)
                                }
                            </select>
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
                    <div className='mt-6'>
                        <Button>Book A Table <FiCheckCircle className='text-xl'></FiCheckCircle></Button>
                    </div>
                </form>
            </div>
            <div className='w-11/12 lg:w-4/5 mx-auto my-12'>
                <OurLocation></OurLocation>
            </div>
        </section>
    );
};

export default Reservation;