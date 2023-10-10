import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub, BsFacebook } from 'react-icons/bs';
import { AuthContext } from '../../../providers/AuthProvider';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const SocialLogin = () => {
    const { signInWithGoogle, signInWithFacebook, signInWithGithub } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSignInWithGoogle = () => {
        signInWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    };

    const handleSignInWithFacebook = () => {
        signInWithFacebook(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    };

    const handleSignInWithGithub = () => {
        signInWithGithub(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    };

    return (
        <div className='mt-6'>
            <p className='text-center text-secondary font-semibold'>Or sign in with</p>
            <div className='text-center mt-3'>
                <button
                    onClick={handleSignInWithGoogle}
                    className='btn btn-outline mr-3'
                >
                    <FcGoogle className='text-3xl'></FcGoogle>
                </button>

                <button
                    onClick={handleSignInWithFacebook}
                    className='btn btn-outline mr-3'
                >
                    <BsFacebook style={{ color: '#3b5998' }} className='text-3xl'></BsFacebook>
                </button>

                <button
                    onClick={handleSignInWithGithub}
                    className='btn btn-outline'
                >
                    <BsGithub className='text-3xl'></BsGithub>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;