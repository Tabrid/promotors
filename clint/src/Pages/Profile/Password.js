import React from 'react';

const Password = () => {

    const handleSubmit = (event)=>{
        event.preventDefault();
        const form = event.target;
        const password = form.password.value;
       console.log(password);
    }
    return (
        <div>
            <div className='flex justify-center  bg-gray-900'>
         <div className="card w-96  bg-gray-900 shadow-2xl ">
                        <div className="card-body items-center text-center">
                <h1 className='text-2xl font-bold text-white'>CHANGE PASSWORD</h1>
            <form onSubmit={handleSubmit}>
            <input type="password" name='password' placeholder="Type new password" className="input  mt-10 input-bordered w-full max-w-xs" />
            
            <input className='btn  mt-10' type="submit" value="CHANGE" />
            </form>

            </div>

       </div>
        </div>
        </div>
    );
};

export default Password;