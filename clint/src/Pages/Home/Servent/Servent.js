import React, { useEffect, useState } from 'react';
import ServentCard from './ServentCard';

const Servent = () => {
    const [Servent, setServent] = useState([]);

  useEffect(() => {
    fetch("https://pro-motors.vercel.app/servent")
      .then((response) => response.json())
      .then((data) => setServent(data));
  }, []);
    return (
        <div className=" bg-gray-900">
      <div className="card-actions justify-center "></div>
      <h1 className="card-title text-5xl text-white justify-center font-bold mt-11 mr-11">Best Service Provider</h1> 
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {Servent.slice(0, 3).map((servent) => (
          <ServentCard key={servent._id} servent={servent}></ServentCard>
        ))}
      </div>
    </div>
    );
};

export default Servent;