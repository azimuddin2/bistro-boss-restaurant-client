import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import logo from '../../../assets/Images/others/logo.png';
import ScrollToTop from 'react-scroll-to-top';

const Footer = () => {
    return (
        <footer
            style={{ background: '#111827', color: '#fff' }}
            className="pt-20 px-6 lg:px-0 max-w-screen-xl mx-auto"
        >
            <div className='footer max-w-screen-lg lg:mx-auto pb-8 border-b'>
                <div>
                    <img src={logo} alt="Logo" style={{ height: "44px" }} />
                    <p className='my-3 text-sm'>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial.</p>
                    <div className='flex items-center mt-5'>
                        <p className='text-2xl mr-2 cursor-pointer'><FaFacebook></FaFacebook></p>
                        <p className='text-2xl mr-2 cursor-pointer'><FaTwitter></FaTwitter></p>
                        <p className='text-2xl mr-2 cursor-pointer'><FaInstagram></FaInstagram></p>
                        <p className='text-2xl cursor-pointer'><FaLinkedin></FaLinkedin></p>
                    </div>
                </div>
                <div>
                    <span className=" text-white font-semibold text-lg mb-2">Quick Links</span>
                    <a href="/" className="link link-hover">About Us</a>
                    <a href="/" className="link link-hover">Our Menu</a>
                    <a href="/" className="link link-hover">Order Food</a>
                    <a href="/" className="link link-hover">Contact Us</a>
                    <a href="/" className="link link-hover">Online Payment</a>
                </div>
                <div>
                    <span className="text-white font-semibold text-lg mb-2">Working Hours Time</span>
                    <a href="/" className="link link-hover">Sunday - 10 am to 7 pm</a>
                    <a href="/" className="link link-hover">Monday - 10 am to 7 pm</a>
                    <a href="/" className="link link-hover">Tuesday - 10 am to 7 pm</a>
                    <a href="/" className="link link-hover">Wednesday - 10 am to 7 pm</a>
                    <a href="/" className="link link-hover">Thursday - 10 am to 7 pm</a>
                </div>
            </div>
            <p className='text-center py-6'><small>Copyright © 2024 - Bistro Boss Restaurant</small></p>
            <ScrollToTop
                smooth
                className="animate-bounce flex justify-center items-center"
                color="#D99904"
                width="16"
                height="16"
                top="400"
            // style={{ background: "#D99904", boxShadow: 'none', borderRadius: "5px" }}
            />
        </footer>
    );
};

export default Footer;