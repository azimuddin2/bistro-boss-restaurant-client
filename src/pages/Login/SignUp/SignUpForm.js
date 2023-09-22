import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUpForm = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        console.log(data)
    };

    return (
        <div className='px-12'>
            <h1 className='text-2xl font-bold text-center my-8'>Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        placeholder="Enter your name"
                        className="input rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                    <label className="label pt-1">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500 text-sm">{errors.name.message}</span>}
                    </label>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Email*</span>
                    </label>
                    <input
                        {...register("email", {
                            required: {
                                value: true,
                                message: 'Email is required',
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a valid Email',
                            }
                        })}
                        type='email'
                        placeholder="Enter your email"
                        className="input rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                    <label className="label pt-1">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 text-sm">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 text-sm">{errors.email.message}</span>}
                    </label>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-semibold">Password*</span>
                    </label>
                    <input
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is required',
                            },
                        })}
                        type='password'
                        placeholder="Enter your password"
                        className="input rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                    <label className="label pt-1">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 text-sm">{errors.password.message}</span>}
                    </label>
                </div>

                <button style={{ background: '#D1A054' }} className='btn text-white w-full mt-5'>Sign Up</button>
            </form>
            <p className='text-center mt-4 text-accent'>Already registered?<Link to="/login" className='text-primary font-semibold underline'> Go to login</Link></p>
        </div>
    );
};

export default SignUpForm;