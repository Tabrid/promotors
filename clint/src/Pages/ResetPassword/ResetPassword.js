import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { useLocation } from 'react-router-dom';
import swal from 'sweetalert';

const useQuery = () =>{
    const location = useLocation();
    return new URLSearchParams(location.search)
}



const ResetPassword = () => {

    const {ResetPassword} = useContext(AuthContext);

    const query = useQuery();

    console.log(query.get('mode'));
    console.log(query.get('oobCode'));
    console.log(query.get('continueUrl'));

    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
       console.log(password);
       ResetPassword(query.get('oobCode') , password)
       .then( res => {
        swal({
            title: "Good job!",
            text: "You reset password successfully",
            icon: "success",
            button: "DONE",
          });
       })
       .catch( err =>{
        swal({
            title: "WARNING!",
            text: "something wrong!",
            icon: "warning",
            button: "done!",
          });
       }
       )
       form.reset();
    }
    return (
        <div>
        <div className='flex justify-center min-h-screen  bg-gray-900'>
     <div className="card w-96  h-1/2 bg-gray-900 shadow-2xl ">
        <div className="card-body items-center text-center">
            <h1 className='text-2xl font-bold text-white'>RESET PASSWORD</h1>
            
        <form onSubmit={handleSubmit}>
        <input type="password" name='password' placeholder="Type new password" className="input  mt-10 input-bordered w-full max-w-xs" />
        
        <input className='btn  mt-10' type="submit" value="Submit" />
        </form>

        </div>
   </div>
    </div>
    </div>
    );
};

export default ResetPassword;