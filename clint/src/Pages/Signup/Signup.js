import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Signup = () => {
  const [error, setError] = useState(null);
  const { createUser, LoginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
 const location = useLocation()
 const from = location.state?.from?.pathname|| '/';


  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    console.log(email, password, confirm);

    if (password.length < 6) {
      setError("password should be 6 character or more.");
      return;
    }

    if (password !== confirm) {
      setError("Your Password did not match");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from , {replace : true})
      })
      .catch((error) => console.error(error));
  };
  const handleLogin = (event) => {
    console.log("working");
    event.preventDefault();
    LoginWithGoogle()
      .then((result) => {
        const user = result.user;
        const Address = "";
        const Phone = "";
        const userData = {
          name : user.displayName,
          mail : user.mail,
          phone : Phone,
          address : Address,
          img : user.photoURL,
      }
      fetch('https://pro-motors.vercel.app/product', {
        method: 'POST',
        headers: {
           'content-type': 'application/json',
      
        },
        body: JSON.stringify(userData)
    })
        .then(res => res.json())
        .then(result => {
            console.log(result);
        })
        .catch(err => console.error(err));
        console.log(user);
        navigate(from , {replace : true})
      })
      .catch((error) => {
        console.error("error:", error);
      });
  };

  return (
    <div className="flex justify-center  bg-gray-900">
      <div className="card w-96  bg-gray-900 shadow-2xl ">
        <div className="card-body items-center text-center">
          <h1 className="text-2xl font-bold text-white">SIGNUP</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Type Email"
              className="input  mt-10 input-bordered w-full max-w-xs"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Type Password"
              className="input mt-10 input-bordered w-full max-w-xs"
              required
            />
            <input
              type="password"
              name="confirm"
              placeholder="Confirm Password"
              className="input mt-10 input-bordered w-full max-w-xs"
              required
            />
            <input className="btn mt-10" type="submit" value="SIgnup" />
          </form>
          <p className="text-error">{error}</p>
          <div className="divider "></div>
          <button onClick={handleLogin} variant="outline-primary">
            {" "}
            <img
              className="g-logo w-10 h-10"
              src="https://seeklogo.com/images/G/google-2015-logo-65BBD07B01-seeklogo.com.png"
              alt=""
            />{" "}
          </button>
          <h1 className="text-white mt-10">
            Already have account?{" "}
            <Link className="underline underline-offset-1" to="/login">
              logIn
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Signup;
