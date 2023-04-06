import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import swal from 'sweetalert';
const ForgetPassword = () => {
    const {ForgetPassword} = useContext(AuthContext);
    
    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
       console.log(email);
       ForgetPassword(email)
       .then(res =>{
        swal({
            title: "Good job!",
            text: "You reset mail sent successfully",
            icon: "success",
            button: "DONE",
          });
       })
       .catch(err =>{
        console.error(err);
        
        swal({
            title: "WARNING!",
            text: "Your mail cannot exits!",
            icon: "warning",
            button: "done!",
          });

       })
       form.reset();
       
    }
    return (
        <div>
            <div className='flex justify-center min-h-screen  bg-gray-900'>
         <div className="card w-96  h-1/2 bg-gray-900 shadow-2xl ">
            <div className="card-body items-center text-center">
                <h1 className='text-2xl font-bold text-white'>RESET PASSWORD</h1>
                
            <form onSubmit={handleSubmit}>
            <input type="email" name='email' placeholder="Type Email" className="input  mt-10 input-bordered w-full max-w-xs" />
            
            <input className='btn  mt-10' type="submit" value="SEND" />
            </form>

            </div>
       </div>
        </div>
        </div>
    );
};

export default ForgetPassword;