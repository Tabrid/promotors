import React from 'react';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import { Link, Outlet } from 'react-router-dom';

const ProfileLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
             <div className='flex flex-wrap bg-gray-900'>
                <div className='bg-gray-900 w-1/4 h-3/4'>
                <Link to="/profile"><button className="btn w-3/4 m-5">Profile</button></Link>
                <Link to="/profile/password"><button className="btn w-3/4 m-5"> Change Password</button></Link>
                </div>
                <div className='bg-gray-900 w-3/4 h-screen'>
                    <Outlet></Outlet>
                </div>

             </div>
            <Footer></Footer>
        </div>
    );
};

export default ProfileLayout;