import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const {signIn} = useContext(AuthContext);
  const {LoginWithGoogle} = useContext(AuthContext);
  const navigate = useNavigate();
 const location = useLocation()
 const from = location.state?.from?.pathname|| '/';


  const handleSubmit = (event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email,password)
    .then(result =>{
      const user = result.user;
      
      const currentUser = {
        email: user.email
      }

      fetch("https://pro-motors.vercel.app/jwt" , {
        method : 'POST',
        headers: {
          'content-type': 'application/json'
       },
       body: JSON.stringify(currentUser)
      })
      .then(res => res.json())
      .then(result => {
          console.log(result); 
          localStorage.setItem('secret-token' , result.token)
          toast(" login successfull");
      })
      .catch(err => console.error(err));
      form.reset();
      navigate(from , {replace : true})
    }) 
    .catch(error => console.error(error));
  }

  const handleLogin = (event) =>{
    event.preventDefault();
    LoginWithGoogle()
    .then(result => {
      const user = result.user;
      const currentUser = {
        email: user.email
      }

      fetch("https://pro-motors.vercel.app/jwt" , {
        method : 'POST',
        headers: {
          'content-type': 'application/json'
       },
       body: JSON.stringify(currentUser)
      })
      .then(res => res.json())
      .then(result => {
          console.log(result); 
          localStorage.setItem('secret-token' , result.token);
          toast(" login successfull");
      })
      .catch(err => console.error(err));
      console.log(user);
      navigate(from , {replace : true})
  
  
    })
    .catch( error => {
      console.error('error:',error);
    })
  
  
  }




    return (
       <div className='flex justify-center  bg-gray-900'>
         <div className="card w-96  bg-gray-900 shadow-2xl ">
  <div className="card-body items-center text-center">
    <h1 className='text-2xl font-bold text-white'>LOGIN</h1>
  <form onSubmit={handleSubmit}>
  <input type="email" name='email' placeholder="Type Email" className="input  mt-10 input-bordered w-full max-w-xs" />
  <input type="password" name='password' placeholder="Type Password" className="input mt-10 input-bordered w-full max-w-xs" />
  <h1 className='text-white left-0 '><Link className='underline underline-offset-1' to='/forgetPassword'>forget password</Link></h1>
  <input className='btn  mt-10' type="submit" value="LogIn" />
</form>
<div className="divider "></div>
<button onClick={handleLogin}   variant="outline-primary"> <img className='g-logo w-10 h-10' src='https://seeklogo.com/images/G/google-2015-logo-65BBD07B01-seeklogo.com.png' alt=''/> </button>
<h1 className='text-white mt-10'>Are you new here? <Link className='underline underline-offset-1' to='/signup'>SignUp</Link></h1>
    
  </div>
</div>
<ToastContainer />
       </div>
    );
};

export default Login;