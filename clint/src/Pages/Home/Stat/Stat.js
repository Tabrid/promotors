import React from "react";
import swal from 'sweetalert';

const Stat = () => {


  const handleSubmit = () =>{
    swal({
      title: "Good job!",
      text: "Your massege is submited!",
      icon: "success",
    });
  
  }
  
  return (
    <div className="hero  bg-gray-900">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center w-1/2 lg:text-left">
      <h1 className="text-5xl text-white font-bold">Connect With Us!</h1>
      <p className="py-6 text-white">You can send us mail and we will reply as soon as possible for us.</p>
    </div>
    <div className="card  w-1/2 flex-shrink-0 w-full max-w-sm ">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Name</span>
          </label>
          <input type="text" placeholder="Name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Comment</span>
          </label>
          <input type="text-box" placeholder="Comment" className="input h-14 input-bordered" />
          
        </div>
        <div className="form-control mt-6">
          <button onClick={() => handleSubmit()} className="btn ">Send</button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default Stat;
