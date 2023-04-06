import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddProduct from "../../Pages/AddProduct/AddProduct";
import Blog from "../../Pages/Blog/Blog";
import EditReview from "../../Pages/EditReview/EditReview";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import MyReview from "../../Pages/MyReview/MyReview";
import ProductDetails from "../../Pages/ProductDetails/ProductDetails";
import AllService from "../../Pages/Service/AllService";
import Signup from "../../Pages/Signup/Signup";
import Profile from "../../Pages/Profile/Profile";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ProfileLayout from "../../Layout/ProfileLayout";
import Password from "../../Pages/Profile/Password";
import ForgetPassword from "../../Pages/ForgetPassword/ForgetPassword";
import ResetPassword from "../../Pages/ResetPassword/ResetPassword";

export const router = createBrowserRouter([
    {
        path : '/',
        element: <Main></Main>,
        children: [
            {
                path : '/',
                element: <Home></Home>


            },
            {
                path : '/login',
                element: <Login></Login>
            },
            {
                path : '/login',
                element: <Login></Login>
            },
            {
                path : '/signup',
                element: <Signup></Signup>
            },
            {
                path : '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
            {
                path : '/allService',
                element: <AllService></AllService>
            },
            {
                path : '/blog',
                element: <Blog></Blog>
            },
            {
                path : '/review/edit/:id',
                element: <EditReview></EditReview>
            },
            {
                path : '/product/:id',
                element: <ProductDetails></ProductDetails>,
                loader : ({params}) => fetch(`https://pro-motors.vercel.app/product/${params.id}`)
            },
            {
                path : '/myReview',
                element: <PrivateRoute><MyReview></MyReview></PrivateRoute>
                
            },
            {
                path : '/profile',
                element: <Profile></Profile>
                
            },
            {
                path : '/forgetPassword',
                element: <ForgetPassword></ForgetPassword>
                
            },
            {
                path : '/PasswordReset',
                element: <ResetPassword></ResetPassword>
                
            },
        ]
    },
    {
        path : '/profile',
        element: <PrivateRoute><ProfileLayout></ProfileLayout></PrivateRoute>,
        children: [
            {
                path : '/profile',
                element: <Profile></Profile>


            },
            {
                path : '/profile/password',
                element: <Password></Password>


            },
            
        ]
    }
])