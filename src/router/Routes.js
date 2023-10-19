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
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <UserHome></UserHome>
            },
            {
                path: '/dashboard/my-cart',
                element: <MyCart></MyCart>
            },
            {
                path: '/dashboard/reservation',
                element: <Reservation></Reservation>
            },
            {
                path: '/dashboard/payment-history',
                element: <PaymentHistory></PaymentHistory>
            },
            {
                path: '/dashboard/add-review',
                element: <AddReview></AddReview>
            },
            {
                path: '/dashboard/my-booking',
                element: <MyBooking></MyBooking>
            },


            {
                path: '/dashboard/all-users',
                element: <AllUsers></AllUsers>
            }
        ],
    },

]);

export default router;