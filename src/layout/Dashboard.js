import React from 'react';
import { BiSolidAddToQueue } from 'react-icons/bi';
import { FaCalendarAlt, FaClipboardList, FaHome, FaShoppingBasket, FaShoppingCart, FaUsers, FaWallet } from 'react-icons/fa';
import { MdContactMail, MdLibraryBooks, MdManageHistory, MdRateReview } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/Images/others/dark-logo.png';
import ActiveLink from '../components/ActiveLink/ActiveLink';

const Dashboard = () => {
    return (
        <div>
            {/* <Navbar></Navbar> */}
            <div className="drawer lg:drawer-open">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side lg:bg-[#D1A054]">
                    <Link to='/'>
                        <img src={logo} alt="Logo" className='mx-auto pt-10 pb-5' />
                    </Link>
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 lg:bg-inherit bg-base-100 text-base-content">
                        {/* user path */}
                        <li>
                            <ActiveLink to='/dashboard'>
                                <FaHome className='text-xl'></FaHome>
                                <span>User Home</span>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to='/dashboard/my-cart'>
                                <FaShoppingCart className='text-xl'></FaShoppingCart>
                                <span>My Cart</span>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to='/dashboard/reservation'>
                                <FaCalendarAlt className='text-xl'></FaCalendarAlt>
                                <span>Reservation</span>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to='/dashboard/payment-history'>
                                <FaWallet className='text-xl'></FaWallet>
                                <span>Payment History</span>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to='/dashboard/add-review'>
                                <MdRateReview className='text-xl'></MdRateReview>
                                <span>Add Review</span>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to='/dashboard/my-booking'>
                                <MdLibraryBooks className='text-xl'></MdLibraryBooks>
                                <span>My Booking</span>
                            </ActiveLink>
                        </li>

                        {/* admin path */}
                        {/* <div className="divider divide-white"></div>
                        <li><Link to='/dashboard'><FaHome className='text-xl'></FaHome> Admin Home</Link></li>
                        <li><Link to='/dashboard/add-item'><BiSolidAddToQueue className='text-xl'></BiSolidAddToQueue> Add Item</Link></li>
                        <li><Link to='/dashboard/manage-items'><MdManageHistory className='text-xl'></MdManageHistory>Manage Items</Link></li>
                        <li><Link to='/dashboard/manage-bookings'><MdManageHistory className='text-xl'></MdManageHistory> Manage Bookings</Link></li>
                        <li><Link to='/dashboard/all-users'><FaUsers className='text-xl'></FaUsers>All Users</Link></li> */}

                        <div className="divider divide-white"></div>
                        <li><Link to='/'><FaHome className='text-xl'></FaHome> Home</Link></li>
                        <li><Link to='/menu'><FaClipboardList className='text-xl'></FaClipboardList> Our Menu</Link></li>
                        <li><Link to='/order/coffee'><FaShoppingBasket className='text-xl'></FaShoppingBasket> Order Food</Link></li>
                        <li><Link to='/contact'><MdContactMail className='text-xl'></MdContactMail> Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;