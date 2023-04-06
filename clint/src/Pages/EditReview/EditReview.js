import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import swal from 'sweetalert';


const EditReview = () => {
    const { Refresh , setRefresh } = useContext(AuthContext);
    const navigate = useNavigate();
    const {
        register,
        formState: { errors },
        handleSubmit,
      } = useForm();
    const router = useParams();
    const {id} = router;

    const [Review, setReview] = useState([]);

  useEffect(() => {
    fetch(`https://pro-motors.vercel.app/review/${id}` ,{
      headers: {
        authorization : ` Bearer ${localStorage.getItem('secret-token')}`
    }
    })
      .then((response) => response.json())
      .then((data) => setReview(data));
  }, [id]);
  const handleEdit = (data) =>{
    const editReview = {
        name: data.name,
        mail: Review.mail,
        productId: Review.productId,
        rating: data.rating,
        description: data.description,
      };
    console.log(editReview);
    fetch(`https://pro-motors.vercel.app/review/${id}`,{
        method: "PATCH",
        headers: {
            "content-type": "application/json",
            authorization : ` Bearer ${localStorage.getItem('secret-token')}`
        },
        body: JSON.stringify(editReview),
      })
          .then((response) => response.json())
          .then((data) => {
            setRefresh(!Refresh);
            console.log(data);
           
            swal({
              title: "Good job!",
              text: "You Update YOUR Review",
              icon: "success",
              button: "DONE",
            });
            navigate('/myREview');
          })
          .catch((err) => {
            console.log(err);
          })
  }

    return (
        <div className="flex justify-center  bg-gray-900">
        <div className="card w-96  bg-gray-900 shadow-2xl ">
          <div className="card-body items-center text-center">
            <h1 className="text-2xl font-bold text-white">EDIT REVIEW</h1>
            <form
              className="mt-6 text-center pb-6"
              onSubmit={handleSubmit(handleEdit)}
            >
              <input
                className="input input-bordered w-full max-w-xs mt-6"
                placeholder="name"
                defaultValue={Review.name}
                {...register("name", )}
                type="text"
              />
              {errors.name && (
                <p className="text-red-600">{errors.name?.message}</p>
              )}

              <br />
              <input
                className="input input-bordered w-full max-w-xs mt-6"
                placeholder="rating"
                defaultValue={Review.rating}
                {...register("rating", )}
                type="text"
              />
              {errors.rating && (
                <p className="text-red-600">{errors.rating?.message}</p>
              )}
              <br />
              <input
                className="input input-bordered w-full max-w-xs h-24 mt-6"
                placeholder="description"
                defaultValue={Review.description}
                {...register("description", )}
                type="text"
              />
              {errors.description && (
                <p className="text-red-600">{errors.description?.message}</p>
              )}
              <br />

              <input
                className="btn w-full max-w-xs mt-6 "
                value="Submit"
                type="submit"
              />
              
            </form>
          </div>
        </div>
      </div>
    );
};

export default EditReview;
