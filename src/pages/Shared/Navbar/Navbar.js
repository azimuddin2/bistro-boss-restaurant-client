import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Images/others/logo.png';
import CustomLink from './CustomLink';

const Navbar = () => {

    const navOptions = <>
        <li><CustomLink to="/">Home</CustomLink></li>
        <li><CustomLink to="/menu">Our Menu</CustomLink></li>
        <li><CustomLink to="/order">Order Food</CustomLink></li>
        <li><CustomLink to="/contact">Contact</CustomLink></li>
    </>

    return (
        <div className='fixed z-10 w-full'>
            <div
                style={{ background: "rgba(21, 21, 21, 0.50)" }}
                className="navbar mx-auto max-w-screen-xl text-white px-10"
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
                {/* <div className="navbar-end lg:hidden">
                    <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div> */}
            </div>
        </div>
    );
};

export default Navbar;