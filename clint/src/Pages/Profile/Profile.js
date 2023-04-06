import React, { useContext } from 'react';
import { AuthContext } from '../../../src/contexts/UserContext';

const Profile = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            {
                user?.displayName?
                <div>
                    
                    <div className="avatar">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={user.photoURL} alt=''/>
                        </div>
                        </div>
                        <h1 className='text-white'>{user.displayName}</h1>
                </div>
                :
                <h1>name</h1>
            }
        </div>
    );
};

export default Profile;