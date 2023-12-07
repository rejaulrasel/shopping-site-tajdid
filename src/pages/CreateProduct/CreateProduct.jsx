import { useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import './CreateProduct.css';
import Swal from 'sweetalert2';

const SignupSchema = yup.object().shape({
    title: yup.string().required(),
    price: yup.number().required().positive().integer(),
    description: yup.string().required()
});


const CreateProduct = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SignupSchema)
    });

    
    const onSubmit = (data) => {
        console.log(data)
        fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(data)
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

            Swal.fire({
                title: "Product Added Succesfully",
                icon: "success"
              });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };



    return (
        <div className='create-product -mt-5 mx-4'>
            


            <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold'>Create Product</h1>
                <div >
                    <button className="btn bg-white">Cancel</button>
                    <input className="btn btn-primary ms-4 text-white submit-button" type="submit" value="CREATE" />
                </div>
            </div>
            <hr />
                <div className=''>
                    <label>Title</label>
                    <input {...register("title")} placeholder='Enter title of your product' />
                    {errors.title && <p className='text-red-800'>{errors.title.message}</p>}
                </div>
                <hr />
                <div>
                    <label>Price</label>
                    <input type="number" {...register("price", { valueAsNumber: true })} placeholder='Enter the price of your product' />
                    {errors.price && <p className='text-red-800'>{errors.price.message}</p>}
                </div>
                <hr />
                <div className='flex mt-10'>
                    <div>
                        <label>Product Photo <br /></label>
                        <p className='text-xs'>This will be displayed on your product</p>
                    </div>
                    <div className='flex ms-36'>
                        <div className='w-40 h-44 border-2 p-2'>
                            <img src={selectedImage} alt="Product Image" className='w-32 h-40 ' />
                        </div>
                        {/* <input {...register("photo")} /> */}
                        <input
                            className='ms-8 w-72 h-44 mt-0 p-16 '
                            type="file"
                            id="imageUpload"
                            accept="image/*"

                            {...register('image')}
                            onChange={handleImageChange}
                        />
                    </div>
                    {errors.photo && <p className='text-red-800'>{errors.photo.message}</p>}
                </div>
                <hr />
                <div className='flex my-4'>
                    <div>
                        <label>Description<br /></label>
                        <p className='text-xs'>Write a short description</p>
                    </div>
                    <input
                        className='pb-32 ms-52'
                        {...register("description")} placeholder='Write Something about your products...' />

                </div>
                    {errors.description && <p className='text-red-800'>{errors.description.message}</p>}
            </form>


        </div>
    );
};

export default CreateProduct;