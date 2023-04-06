import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";
import swal from 'sweetalert';

const MyReviewCard = ({Review}) => {
  const {Refresh ,setRefresh} = useContext(AuthContext);
  const handleDelete = (id) =>{


    swal({
      title: "Are you sure?",
      text: "Are you sure?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        fetch(`https://pro-motors.vercel.app/review/${id}`,{
        method: "DELETE",
        headers: {
          authorization : ` Bearer ${localStorage.getItem('secret-token')}`
       },
      })
          .then((response) => response.json())
          .then((data) => {
            setRefresh(!Refresh)
            console.log(data);
            swal("Your review successfully deleted", {
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          })
       
      } else {
        swal("Your review is safe");
      }
    });
   
             
  }
const navigate = useNavigate();
const handleEdit = (id) =>{
  navigate(`/review/edit/${id}`)

}



  return (
    <div className="card w-96 bg-gray-900 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-white">{Review.productName}</h2>
        <p className="text-white">
        {Review.date}
        </p>
        <p className="text-white">
        {Review.rating}
        </p>
        <p className="text-white">
        {Review.description}
        </p>
        <div className="flex justify-between mt-2">
        <div className="card-actions justify-start">
          <button onClick={() => handleEdit(Review._id)} className="btn btn-s">Edit</button>
        </div>
        <div className="card-actions justify-end">
          <button onClick={() => handleDelete(Review._id)} className="btn btn-s">Delete</button>
        </div>
        
        </div>
      </div>
    </div>
  );
};

export default MyReviewCard;
