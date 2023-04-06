import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/UserContext";
import swal from 'sweetalert';
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
    const {user ,Refresh , setRefresh} = useContext(AuthContext);
    
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const handleAddProduct = (data) => {
        const image = data.img[0];
        const formData = new FormData();
        formData.append('image',image);
        const url = 'https://api.imgbb.com/1/upload?key=6b61fed2ade9e1cb6596b28fb4315762';
        fetch(url, {
            method: 'POST',
            body:formData
        })
        .then(res => res.json())
        .then(imageData => {

            if(imageData.success){
                const product = {
                    name : data.name,
                    mail : data.mail,
                    price : data.price,
                    rating : data.rating,
                    description : data.description,
                    img : imageData.data.url


                }
                console.log(product);


                fetch('https://pro-motors.vercel.app/product', {
                    method: 'POST',
                    headers: {
                       'content-type': 'application/json',
                       authorization : ` Bearer ${localStorage.getItem('secret-token')}`
                    },
                    body: JSON.stringify(product)
                })
                    .then(res => res.json())
                    .then(result => {
                        console.log(result);
                        setRefresh(!Refresh);
                        swal({
                          title: "Good job!",
                          text: `${data.name} is successfully added`,
                          icon: "success",
                          button: "DONE",
                        });
                        navigate('/allService');
                    })
                    .catch(err => console.error(err));
            }
        });
        

    }
  return (
    <div className="flex justify-center  bg-gray-900">
      <div className="card w-96  bg-gray-900 shadow-2xl ">
        <div className="card-body items-center text-center">
          <h1 className="text-2xl font-bold text-white">ADD PRODUCT</h1>
          <form
            className="mt-6 text-center pb-6"
            onSubmit={handleSubmit(handleAddProduct)}
          >
            <input
              className="input input-bordered w-full max-w-xs mt-6"
              value={user?.email}
              {...register("mail")}
              type="text"
            />
            <br />
            <input
              className="input input-bordered w-full max-w-xs mt-6"
              placeholder="name"
              {...register("name", {
                required: "name is required",
              })}
              type="text"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name?.message}</p>
            )}
            <br />
            <input
              className="input input-bordered w-full max-w-xs mt-6"
              placeholder="price"
              {...register("price", { required: "price is required" })}
              type="text"
            />
            {errors.price && (
              <p className="text-red-600">{errors.price?.message}</p>
            )}
            <br />         
            <input
              className="input input-bordered w-full max-w-xs mt-6"
              placeholder="rating"
              {...register("rating", { required: "rating is required" })}
              type="text"
            />
            {errors.rating && (
              <p className="text-red-600">{errors.rating?.message}</p>
            )}
            <br />
            <input
              className="input input-bordered w-full max-w-xs mt-6"
              placeholder="description"
              {...register("description", {
                required: "description is required",
              })}
              type="text"
            />
            {errors.description && (
              <p className="text-red-600">{errors.description?.message}</p>
            )}
            <br />

            <input
              className="input input-bordered w-full max-w-xs mt-6"
              {...register("img", { required: "image is required" })}
              type="file"
              alt="img"
              placeholder="picture url"
            />
            {errors.img && (
              <p className="text-red-600">{errors.img?.message}</p>
            )}

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

export default AddProduct;
