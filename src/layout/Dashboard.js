import React from 'react';
import { Link, Outlet } from 'react-router-dom';

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
                    <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-64 lg:bg-inherit bg-base-100 text-base-content">
                        {/* user path */}
                        <li><Link to='/dashboard'>User Home</Link></li>
                        <li><Link to='/dashboard/my-cart'>My Cart</Link></li>
                        <li><Link to='/dashboard/reservation'>Reservation</Link></li>
                        <li><Link to='/dashboard/payment-history'>Payment History</Link></li>
                        <li><Link to='/dashboard/add-review'>Add Review</Link></li>

                        {/* admin path */}
                        {/* <li><Link to='/dashboard'>Admin Home</Link></li>
                        <li><Link to='/dashboard/add-item'>Add Item</Link></li>
                        <li><Link to='/dashboard/manage-items'>Manage Items</Link></li>
                        <li><Link to='/dashboard/manage-bookings'>Manage Bookings</Link></li>
                        <li><Link to='/dashboard/all-users'>All Users</Link></li> */}

                        {/* normal path */}
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/menu'>Our Menu</Link></li>
                        <li><Link to='/order/coffee'>Order Food</Link></li>
                        <li><Link to='/contact'>Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;