import React, { useEffect, useState } from 'react';

import ServiceCard from './ServiceCard';
import Loading from '../Loading/Loading';

const AllService = () => {
    const [Services, setService] = useState([]);
    const [loading, setLoading] = useState(false);

    
    useEffect(() => {
        fetch('https://pro-motors.vercel.app/product')
            .then((response) => response.json())
            .then((data) =>{
                setService(data)
                setLoading(true);
            } );
    }, [])

    return (
        <div className=' bg-gray-900'>
        <div className="card-actions justify-center">
    </div>
    {
        loading?
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {
          Services.map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))
        } 
        </div>: <Loading></Loading>}
        </div>
    );
};

export default AllService;