import React from 'react';
import { Link } from 'react-router-dom';
import authenticationBgImg from '../../../assets/Images/others/authentication-bg.png';
import authenticationImg from '../../../assets/Images/others/authentication.png';
import logo from '../../../assets/Images/others/dark-logo.png';
import SignUpForm from './SignUpForm';
import useTitle from '../../../hooks/useTitle';

const SignUp = () => {
    useTitle('Sign Up')
    return (
        <section
            className='max-w-screen-xl mx-auto pb-20'
            style={{
                backgroundImage: `url(${authenticationBgImg})`,
                backgroundSize: 'cover'
            }}
        >
            <Link to="/">
                <img src={logo} alt="logo" className='mx-auto pt-2' style={{ height: "54px" }} />
            </Link>
            <div
                className='pt-12 pb-16 max-w-screen-lg lg:mx-auto mx-5 shadow-2xl rounded-sm mt-3'
                style={{
                    backgroundImage: `url(${authenticationBgImg})`,
                    backgroundSize: 'cover'
                }}
            >
                <div className='hero-content p-0 flex-col lg:flex-row-reverse'>
                    <div className='flex-1 w-full'>
                        <img src={authenticationImg} alt="" className='w-full' />
                    </div>
                    <div className='flex-1 w-full'>
                        <SignUpForm></SignUpForm>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;