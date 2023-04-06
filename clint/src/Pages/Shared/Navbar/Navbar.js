import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';



const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);

    const MenuItems = <React.Fragment>
        <li className='text-white'><Link to="/">Home</Link></li>
        <li className='text-white'><Link to="/addProduct">Add Product</Link></li>
        <li className='text-white'><Link to="/blog">Blog</Link></li>
        
        {
            user?.uid ?
            <>
            <li className='text-white'><Link to="/myReview">My Review</Link></li>
            
            <li>
            <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full ">
                        <img alt='' src="https://i.ibb.co/yh1JYmH/am-a-19-year-old-multimedia-artist-student-from-manila-21.png" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-6 p-2 shadow bg-gray-900 rounded-box w-52">
                        <li>
                        <Link className="justify-between text-white mr-5">
                            
                            <Link to="/profile">Profile</Link>
                            <span className="badge">New</span>
                        </Link>
                        </li>
                        
                        <li><Link  onClick={logOut} className=" text-white mr-5">Logout</Link></li>
                    </ul>
                    </div>
            </li>
            </>
            :
           <>
            <li className='text-white'><Link to="/login">Login</Link></li>
           </>}
        
    </React.Fragment>


    return (
        <div className="navbar  top-0 bg-gray-900 flex justify-between ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-900 rounded-box w-52">
                        {MenuItems}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost">
                <figure><img className='h-8' src="https://i.ibb.co/jhg3KNP/logo.png" alt="logo" /></figure>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex cursor-pointer">
                <ul className="menu menu-horizontal p-0">
                    {MenuItems}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;