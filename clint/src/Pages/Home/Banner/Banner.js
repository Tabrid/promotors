import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-gray-900">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/wBtNJRy/bmw-car-transparent-png-pictures-bmw-x6-png-free-transparent-png-download-pngkey-removebg.png" alt='car-img' className="w-1/2 " />
    <div className='w-1/2 text-white'>
      <h1 className="text-5xl font-bold">Find Your Best Service!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn ">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;