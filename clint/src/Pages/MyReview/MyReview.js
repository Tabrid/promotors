import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import MyReviewCard from './MyReviewCard';

const MyReview = () => {
    const { user ,logOut ,Refresh} = useContext(AuthContext);
    
    const [Review, setReview] = useState([]);
    
   

    useEffect(() => {
        fetch(`https://pro-motors.vercel.app/review?mail=${user.email}` ,{
            headers: {
              authorization : ` Bearer ${localStorage.getItem('secret-token')}`
          }
          })
            .then((response) => {
                if (response.status === 401 || response.status === 403) {
                  return  logOut();
                }
              return response.json()
            })
            .then((data) => setReview(data))
    }, [user?.email , logOut ,Refresh]
    
    ); 


    return (
        <div className="bg-gray-900 p-11 min-h-screen">
          {
                Review.length < 1 &&
                <div className='min-h-[70vh] flex justify-center items-center'>
                    <h1 className='text-white font-bold'>there is no review</h1>
                </div>
            }


      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
        
            {

                Review.length > 0 &&

                Review.map(Review => <MyReviewCard


                    key={Review._id}
                    Review={Review}
                ></MyReviewCard>)

            }
        </div>

      </div>
    );
};

export default MyReview;