import React from 'react';

const ServentCard = ({servent}) => {
    return (
        <div className="card mt-10 bg-gray-900 shadow-2xl">   
        <div className="card-body items-center text-center">
            <h2 className="card-title text-white">{servent.name}</h2>   
        </div>
        <div className='flex justify-between px-10'>
        <div className="avatar m-4 ">
            <div className="w-14 h-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={servent.photo} alt="img" className="rounded-full" />
            </div>
         </div>
         <div className='my-3 text-white'>
         <h2 >{servent.address}</h2>
         <h4>{servent.email}</h4>
         <h4>{servent.phone}</h4>
         </div>
        </div>
    </div>
    );
};

export default ServentCard;