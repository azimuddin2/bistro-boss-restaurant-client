import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub, BsFacebook } from 'react-icons/bs';
import { AuthContext } from '../../../providers/AuthProvider';
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import swal from 'sweetalert';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const { signInWithGoogle, signInWithFacebook, signInWithGithub } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSignInWithGoogle = () => {
        signInWithGoogle(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                saveUserDatabase(user.displayName, user.email);
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

    const handleSignInWithFacebook = () => {
        signInWithFacebook(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                swal({
                    title: "User Login Successful!",
                    text: "You clicked the button!",
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

    const handleSignInWithGithub = () => {
        signInWithGithub(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                swal({
                    title: "User Login Successful!",
                    text: "You clicked the button!",
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

    const saveUserDatabase = (name, email) => {
        const user = { name, email };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
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