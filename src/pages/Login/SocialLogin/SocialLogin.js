import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub, BsFacebook } from 'react-icons/bs';

const SocialLogin = () => {
    return (
        <div className='mt-6'>
            <p className='text-center text-secondary font-semibold'>Or sign in with</p>
            <div className='text-center mt-3'>
                <button
                    className='btn btn-outline mr-3'
                >
                    <FcGoogle className='text-3xl'></FcGoogle>
                </button>

                <button
                    className='btn btn-outline mr-3'
                >
                    <BsFacebook style={{color: '#3b5998'}} className='text-3xl'></BsFacebook>
                </button>

                <button
                    className='btn btn-outline'
                >
                    <BsGithub className='text-3xl'></BsGithub>
                </button>

            </div>
        </div>
    );
};

export default SocialLogin;