import React from "react";
import { Link } from "react-router-dom";
import "react-photo-view/dist/react-photo-view.css";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ServiceCard = ({ service }) => {
  return (
    <PhotoProvider>
      <div className="card w-96 bg-gray-900 shadow-2xl">
        <figure className="px-10 pt-10">
          <PhotoView src={service.img}>
            <img src={service.img} alt="Shoes" className="rounded-xl" />
          </PhotoView>
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title text-white">{service.name}</h2>
          <p className="text-white">Price:{service.price} taka</p>
          <p className="text-white">Rating:{service.rating}</p>
          <div className="card-actions">
            <Link to={`/product/${service._id}`}>
              <button className="btn btn-s">view</button>
            </Link>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default ServiceCard;
