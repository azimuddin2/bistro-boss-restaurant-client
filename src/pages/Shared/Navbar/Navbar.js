import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/others/logo.png';
import CustomLink from './CustomLink';
import { AuthContext } from '../../../providers/AuthProvider';
import swal from 'sweetalert';
import './Navbar.css';
import useCart from '../../../hooks/useCart';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [carts] = useCart();

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
    };

    const navOptions = <>
        <li><CustomLink to="/">Home</CustomLink></li>
        <li><CustomLink to="/menu">Our Menu</CustomLink></li>
        <li><CustomLink to="/order/coffee">Order Food</CustomLink></li>
        <li><CustomLink to="/contact">Contact Us</CustomLink></li>
        {/* <li><CustomLink to="/dashboard">Dashboard</CustomLink></li> */}
        <li>
            {
                user?.uid ?
                    <button onClick={handleLogout} className='font-medium uppercase hover:text-white'>Sign Out</button>
                    :
                    <CustomLink to="/login">Login</CustomLink>
            }
        </li>
    </>

    return (
        <div className='fixed z-10 w-full'>
            <div
                style={{ background: "rgba(21, 21, 21, 0.50)" }}
                className="navbar mx-auto max-w-screen-xl text-white lg:px-10"
            >
                <div className="navbar-start">
                    <div className="dropdown">
                        <label htmlFor='' tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul style={{ background: "rgba(21, 21, 21, 0.80)" }} tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-56">
                            {navOptions}
                        </ul>
                    </div>
                    <Link to="/">
                        <img className='w-full' style={{ height: "40px" }} src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex items-center">
                    <ul className="flex items-center menu menu-horizontal p-0 text-white">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end-modify flex items-center ml-3">
                    <Link to="/dashboard/my-cart">
                        <div className="indicator cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item bg-primary border-none text-white">{carts?.length}</span>
                        </div>
                    </Link>
                    
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;