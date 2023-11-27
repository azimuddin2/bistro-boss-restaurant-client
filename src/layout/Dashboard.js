import React from 'react';
import { BiSolidAddToQueue } from 'react-icons/bi';
import { FaCalendarAlt, FaClipboardList, FaHome, FaShoppingBasket, FaShoppingCart, FaUsers, FaWallet } from 'react-icons/fa';
import { MdLibraryBooks, MdManageHistory, MdMarkEmailRead, MdRateReview } from 'react-icons/md';
import { RiFileList3Fill } from 'react-icons/ri';
import { Link, Outlet } from 'react-router-dom';
import ActiveLink from '../components/ActiveLink/ActiveLink';
import useCart from '../hooks/useCart';
import useAdmin from '../hooks/useAdmin';
import DashboardNavbar from '../pages/Shared/DashboardNavbar/DashboardNavbar';
import logo from '../assets/Images/others/dark-logo.png';

const Dashboard = () => {
    const [carts] = useCart();
    const [isAdmin] = useAdmin();

    return (
        <div>
            <DashboardNavbar></DashboardNavbar>
            <div className="drawer block lg:grid lg:drawer-open mx-auto max-w-screen-xl">
                <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side ">
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 h-full w-64 lg:bg-inherit bg-base-100 text-base-content">
                        <Link to='/'>
                            <img src={logo} alt="Logo" className='mx-6 mb-5 lg:hidden' style={{ height: '44px' }} />
                        </Link>
                        {
                            isAdmin ?
                                <>
                                    <li>
                                        <ActiveLink to='/dashboard/admin-home'>
                                            <FaHome className='text-xl' />
                                            <span>Admin Home</span>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink to='/dashboard/add-item'>
                                            <BiSolidAddToQueue className='text-xl' />
                                            <span>Add Item</span>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink to='/dashboard/manage-items'>
                                            <MdManageHistory className='text-xl' />
                                            <span>Manage Items</span>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink to='/dashboard/manage-bookings'>
                                            <RiFileList3Fill className='text-xl' />
                                            <span>Manage Bookings</span>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink to='/dashboard/all-users'>
                                            <FaUsers className='text-xl' />
                                            <span>All Users</span>
                                        </ActiveLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li>
                                        <ActiveLink to='/dashboard/user-home'>
                                            <FaHome className='text-xl' />
                                            <span>User Home</span>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink to='/dashboard/my-cart'>
                                            <div className="indicator cursor-pointer">
                                                <FaShoppingCart className='text-xl' />
                                                <span className="bg-green-500 badge badge-sm indicator-item border-none text-white">{carts?.length}</span>
                                            </div>
                                            <span>My Cart</span>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink to='/dashboard/reservation'>
                                            <FaCalendarAlt className='text-xl' />
                                            <span>Reservation</span>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink to='/dashboard/payment-history'>
                                            <FaWallet className='text-xl' />
                                            <span>Payment History</span>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink to='/dashboard/add-review'>
                                            <MdRateReview className='text-xl' />
                                            <span>Add Review</span>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink to='/dashboard/my-booking'>
                                            <MdLibraryBooks className='text-xl' />
                                            <span>My Booking</span>
                                        </ActiveLink>
                                    </li>
                                </>
                        }
                        <div className="divider divide-white"></div>
                        <li>
                            <ActiveLink to='/'>
                                <FaHome className='text-xl' />
                                <span>Home</span>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to='/menu'>
                                <FaClipboardList className='text-xl' />
                                <span>Our Menu</span>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to='/order/coffee'>
                                <FaShoppingBasket className='text-xl' />
                                <span>Order Food</span>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to='/contact'>
                                <MdMarkEmailRead className='text-xl' />
                                <span>Contact Us</span>
                            </ActiveLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;