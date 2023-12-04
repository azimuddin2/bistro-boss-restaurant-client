import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { MdOutlineErrorOutline } from 'react-icons/md';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import swal from 'sweetalert';
import useAuth from '../../../hooks/useAuth';

const LoginForm = () => {
    const { signIn, resetPassword } = useAuth();
    const { register, handleSubmit, formState: { errors }, } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                swal({
                    title: "User Login Successful!",
                    text: `Welcome - ${user?.displayName}`,
                    icon: "success",
                });
                navigate(from, { replace: true });
            })
            .catch(error => {
                swal({
                    title: "Oops...",
                    text: `${error.message}`,
                    icon: "error",
                    button: "Try again",
                });
            })
    };

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    };

    const handleResetPassword = () => {
        if (!email) {
            swal({
                title: "Oops...",
                text: 'Please provide your email address to reset password',
                icon: "error",
                button: "Try again",
            })
            return;
        }
        else {
            resetPassword(email)
                .then(() => {
                    swal({
                        title: "Success...",
                        text: "Please check your email",
                        icon: "success",
                    });
                })
                .catch(error => {
                    swal({
                        title: "Oops...",
                        text: `${error.message}`,
                        icon: "error",
                        button: "Try again",
                    });
                })
        }
    };

    return (
        <div className='lg:pr-16 px-5 lg:px-0'>
            <h1 className='text-2xl font-bold text-center lg:mb-8'>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                        onBlur={handleEmailBlur}
                        type='email'
                        placeholder="Enter your email"
                        className="input rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                    <label className="label pt-1">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.email.message}</span>}
                    </label>
                </div>

                <div className="form-control relative">
                    <div className='flex items-center justify-between'>
                        <label className="label">
                            <span className="label-text font-semibold">Password*</span>
                        </label>
                        <label className="label" onClick={handleResetPassword}>
                            <span className="btn-link font-medium cursor-pointer">Forgot Password?</span>
                        </label>
                    </div>
                    <input
                        {...register("password", {
                            required: {
                                value: true,
                                message: 'Password is required',
                            },
                        })}
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        className="input rounded-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                    />
                    <p
                        onClick={() => setShowPassword(!showPassword)}
                        className='absolute cursor-pointer'
                        style={{ top: '55px', right: '12px' }}
                    >
                        {
                            showPassword ?
                                <FaEyeSlash className='text-gray-400'></FaEyeSlash>
                                :
                                <FaEye className='text-gray-400'></FaEye>
                        }
                    </p>
                    <label className="label pt-1">
                        {errors.password?.type === 'required' && <span className="label-text-alt text-red-500 text-sm flex items-center"><MdOutlineErrorOutline className='text-lg' style={{ marginRight: '2px' }}></MdOutlineErrorOutline>{errors.password.message}</span>}
                    </label>
                </div>
                <button style={{ background: '#D1A054' }} className='btn text-white w-full mt-5'>Login</button>
            </form>
            <p className='text-center mt-4 text-accent'>New here? <Link to="/signup" className='text-primary font-semibold underline'>Create a New Account</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default LoginForm;