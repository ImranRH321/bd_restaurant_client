import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const AddItems = () => {

    const imagesStorekey = '428322d13b73eac9cb47c3c4911691c0';
    const { instanceSecoreApis } = useAxiosSecure();

    // 
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        //  image file
        const formData = new FormData();
        formData.append("image", data.image[0]);
        const url = `https://api.imgbb.com/1/upload?key=${imagesStorekey}`;
        console.log('url me :', url);
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then(res => res.json())
            .then(imageData => {
                const imageUrl = imageData.data.display_url;
                console.log('some =========', imageData.data.display_url === imageData.data.url);
                // properti
                const { name, category, price, recipe } = data;
                // 
                const newAddItem = {
                    name,
                    category,
                    price: parseFloat(price),
                    recipe,
                    image: imageUrl,
                };
                console.log('newAddItem======', newAddItem);
                // send the server save mongodb menu collection 
                instanceSecoreApis.post('http://localhost:5000/menu/addItem', newAddItem)
                    .then(response => {
                        console.log('axios responseo==', response);
                        if (response.data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'successfully add item',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            reset();
                        }
                    })

            })
            .catch(error => {
                console.log('imagae hosting errro====', error);
            })
    }
    return (
        <div className="w-full px-12">
            {/* TODO: route page tilte */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="">
                    <label htmlFor="name">Recipe Name:</label> <br />
                    <input
                        type="text"
                        placeholder="recipe name"
                        id="name"
                        {...register("name", { required: true, maxLength: 20 })}
                        className="input input-bordered w-full"
                    />
                </div>
                {/* C */}
                <div className="flex items-center justify-center">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Category*</span>
                        </label>
                        <select
                            defaultValue={"Pic One"}
                            {...register("category", { required: true })}
                            className="select select-bordered"
                        >
                            <option >Pick One</option>
                            <option>pizza</option>
                            <option>salad</option>
                            <option>iccCream</option>
                            <option>chicken</option>
                        </select>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label htmlFor="name">Price*</label>
                        <input
                            type="number"
                            placeholder="price"
                            id="name"
                            {...register("price", { required: true })}
                            className="input input-bordered w-full"
                        />
                    </div>
                </div>
                {/* Tx  */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text fw-bolder">Recipe Details</span>
                    </label>
                    <textarea
                        {...register("recipe", { required: true })}
                        className="textarea textarea-bordered h-24"
                        placeholder="recipe details"
                    ></textarea>
                </div>
                {/* FL */}
                <div className="form-control my-4">
                    <input
                        type="file"
                        {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full"
                    />
                </div>

                <input
                    type="submit"
                    value="Add item"
                    className="btn btn-sm btn-primary mt-4"
                />
            </form>
            {/*  */}
        </div>
    );
};

export default AddItems;