import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login/Login/Login";
import SignUp from "../pages/Login/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";
import UserHome from "../pages/Dashboard/UserPages/UserHome/UserHome";
import MyCart from "../pages/Dashboard/UserPages/MyCart/MyCart";
import Reservation from "../pages/Dashboard/UserPages/Reservation/Reservation";
import PaymentHistory from "../pages/Dashboard/UserPages/PaymentHistory/PaymentHistory";
import AddReview from "../pages/Dashboard/UserPages/AddReview/AddReview";
import MyBooking from "../pages/Dashboard/UserPages/MyBooking/MyBooking";
import AllUsers from "../pages/Dashboard/AdminPages/AllUsers/AllUsers";
import AdminHome from "../pages/Dashboard/AdminPages/AdminHome/AdminHome";
import AdminRoute from "./AdminRoute";
import AddItem from "../pages/Dashboard/AdminPages/AddItem/AddItem";
import ManageItems from "../pages/Dashboard/AdminPages/ManageItems/ManageItems";
import ManageBookings from "../pages/Dashboard/AdminPages/ManageBookings/ManageBookings";
import UpdateItem from "../pages/Dashboard/AdminPages/UpdateItem/UpdateItem";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'menu',
                element: <Menu></Menu>
            },
            {
                path: 'order/:category',
                element: <Order></Order>
            },
            {
                path: 'contact',
                element: <ContactUs></ContactUs>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <SignUp></SignUp>
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: 'user-home',
                element: <UserHome></UserHome>
            },
            {
                path: 'my-cart',
                element: <MyCart></MyCart>
            },
            {
                path: 'reservation',
                element: <Reservation></Reservation>
            },
            {
                path: 'payment-history',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: 'add-review',
                element: <AddReview></AddReview>
            },
            {
                path: 'my-booking',
                element: <MyBooking></MyBooking>
            },

            //TODO: admin route path
            {
                path: 'admin-home',
                element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
            },
            {
                path: 'add-item',
                element: <AdminRoute><AddItem></AddItem></AdminRoute>
            },
            {
                path: 'manage-items',
                element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path: 'update-item/:id',
                element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>
            },
            {
                path: 'manage-bookings',
                element: <AdminRoute><ManageBookings></ManageBookings></AdminRoute>
            },
            {
                path: 'all-users',
                element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
            }
        ],
    },

]);

export default router;