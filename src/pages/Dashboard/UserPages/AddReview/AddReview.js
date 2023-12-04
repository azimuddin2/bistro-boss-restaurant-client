import React, { useState } from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import Button from '../../../../components/Button/Button';
import { IoRocketSharp } from 'react-icons/io5';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../hooks/useAuth';
import StarRatings from 'react-star-ratings';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import swal from 'sweetalert';
import useTitle from '../../../../hooks/useTitle';

const AddReview = () => {
    useTitle('Add Review');
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [rating, setRating] = useState(0);

    const changeRating = (newRating, name) => {
        setRating(newRating);
    };

    const onSubmit = (data) => {
        const { name, details } = data;

        const reviewInfo = {
            rating,
            name,
            email: user?.email,
            details
        };
        axiosSecure.post('/reviews', reviewInfo)
            .then(result => {
                if (result.data.insertedId) {
                    reset();
                    swal({
                        title: "Review successfully",
                        icon: "success",
                        timer: 5000,
                    });
                }
            })
    };

    return (
        <section className='my-10'>
            <SectionTitle subHeading={'Sharing is Caring!'} heading={'Give a Review'}></SectionTitle>
            <div className='px-5 py-8 lg:p-12 w-11/12 lg:w-3/5 mx-auto bg-[#F3F3F3]'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='text-center mb-6'>
                        <h2 className='text-xl uppercase font-medium mb-2 font-family'>Rate Us!</h2>
                        <StarRatings
                            rating={rating}
                            starRatedColor="#D99904"
                            name="rating"
                            starSpacing="2px"
                            changeRating={changeRating}
                            starDimension="34px"
                            starHoverColor="#D99904"
                        />
                    </div>
                    <div className='grid grid-cols-1 mb-5'>
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
                                placeholder="Enter Name"
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
                                style={{ background: '#fff' }}
                                className="input rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                            />
                        </div>
                        <div className="form-control mt-3">
                            <label className="label">
                                <span className="label-text font-semibold">Review Message*</span>
                            </label>
                            <textarea
                                {...register("details", {
                                    required: {
                                        value: true,
                                        message: 'Review Message details is required'
                                    }
                                })}
                                className='textarea rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary'
                                placeholder='Review Message Details...'
                                type="text"
                                cols="10"
                                rows="5"
                            ></textarea>
                            <label className="label pt-1">
                                {errors.details?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.details.message}</span>}
                            </label>
                        </div>
                    </div>
                    <Button>Send Review <IoRocketSharp className='text-xl animate-bounce' /></Button>
                </form>
            </div>
        </section>
    );
};

export default AddReview;