import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import Loading from "../Loading/Loading";

const Service = () => {
  const [Services, setService] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("https://pro-motors.vercel.app/product")
      .then((response) => response.json())
      .then((data) => {
        setService(data);
        setLoading(true);
      });
  }, []);
  return (
    <div className=" bg-gray-900">
      <div className="card-actions justify-center"></div>
      <h1 className="card-title text-5xl text-white justify-center font-bold mt-11 mr-11">Our Service</h1> 
      
        {
        loading?
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
        {
          Services.slice(0, 3).map((service) => (
            <ServiceCard key={service._id} service={service}></ServiceCard>
          ))
        } 
        </div>: <Loading></Loading>}
     
      <div className="card-actions justify-center mt-10">
        <Link to="/allService">
          <button className="btn-s btn mr-11">View ALL</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
