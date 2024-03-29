import React from 'react';
import logo from '../../../assets/Images/others/dark-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import userImg from '../../../assets/Images/others/user.png';
import { CgLogOut } from "react-icons/cg";
import { BiSolidEdit } from 'react-icons/bi';
import { MdOutlineNotificationsActive } from 'react-icons/md';
import swal from 'sweetalert';

const DashboardNavbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => {
                swal({
                    title: "Oops...",
                    text: `${error.message}`,
                    icon: "error",
                    button: "Try again",
                });
            })
        navigate('/login');
    };

    return (
        <div className="navbar bg-base-100 mx-auto max-w-screen-xl lg:px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
                <Link to={'/'}>
                    <img src={logo} alt="logo" className='w-full' style={{ height: '48px' }} />
                </Link>
            </div>
            <div className="navbar-end">
                <div className="indicator cursor-pointer" style={{ marginRight: '20px' }}>
                    <MdOutlineNotificationsActive className='text-2xl' />
                    <span className="badge badge-sm indicator-item bg-primary border-none text-white">{0}</span>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className='avatar'>
                            <div className="w-10 rounded-full ring ring-primary ring-offset-2">
                                {
                                    user.photoURL ?
                                        <img src={user.photoURL} alt='userImg' className='w-full rounded-full' />
                                        :
                                        <img src={userImg} alt='userImg' className='w-full rounded-full' />
                                }
                            </div>
                        </div>
                    </label>
                    <ul tabIndex={0} className=" menu menu-sm dropdown-content mt-3 z-[1] py-8 px-6 shadow bg-base-100 rounded-box w-80">
                        <div className='text-center mb-4'>
                            <div className="avatar">
                                <div className="w-20 rounded-full ring ring-primary ring-offset-2">
                                    {
                                        user.photoURL ?
                                            <img src={user.photoURL} alt='userImg' className='w-full rounded-full' />
                                            :
                                            <img src={userImg} alt='userImg' className='w-full rounded-full' />
                                    }
                                </div>
                            </div>
                            <h1 className='text-lg font-family font-medium mt-2'>Hi, {user.displayName}!</h1>
                            <h1 className='text-md mb-3'>{user.email}</h1>
                        </div>
                        <li>
                            <Link to={'/dashboard/edit-profile'} className="justify-between text-lg">
                                Edit Profile
                                <span className="badge"><BiSolidEdit className='text-lg' /></span>
                            </Link>
                        </li>
                        <li>
                            <button onClick={handleLogout} className='text-lg'>
                                Logout
                                <span className="badge"><CgLogOut className='text-lg' /></span>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardNavbar;