import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../context/TreeContextProvider";
import { useForm } from "react-hook-form";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import axios from "axios";
import sideImage from '../../../assets/others/authentication.gif'
import PageRouteTitle from "../../Shared/PageRouteTitle/PageRouteTitle";

const Register = () => {
    const { registerUser, updateProfileUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const imagesStorekey = '428322d13b73eac9cb47c3c4911691c0';

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    // firebase show error
    console.log(error, 'firebase');

    const onSubmit = (data) => {
        console.log(data, 'for data');

        //  image file
       /*  
       const formData = new FormData();
        formData.append("image", data.image[0]);
        const url = `https://api.imgbb.com/1/upload?key=${imagesStorekey}`;
        axios.post(url,formData)
        .then(res => {

        }) */


        // image host img
        {
            registerUser(data.email, data.password)
                .then((userCredential) => {
                    const cratedUser = userCredential.user;
                    console.log(cratedUser, "-->RegisterUser newUser");
                    updateProfileUser(data.name, data.photo)
                        .then(() => {
                            // lot of code.......
                            const userLogInfo = { nameUser: data.name, emailUser: data.email, photo: data.photo }
                            console.log(userLogInfo, 'log info data');
                            axios.post('https://bd-restaurant-server.vercel.app/users', userLogInfo)
                                .then(res => {
                                    console.log(res, 'res axios');
                                    if (res.data.insertedId) {
                                        Swal.fire({
                                            position: 'top-end',
                                            icon: 'success',
                                            title: 'Your work has been saved',
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        navigate('/')
                                        reset();
                                    }
                                })
                            console.log('Profile updated!')
                        })
                        .catch((err) => setError(err));
                })
                .catch((err) => setError(err));
        }
    };

    return (
        <>
            <PageRouteTitle pageTitle={'Register'}></PageRouteTitle>
            <div className="hero min-h-screen bg-base-200 font-mono">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold capitalize text-center mb-3 text-cyan-500">SingUp now!</h1>
                        <img src={sideImage} alt="no-found" />
                    </div>
                    <div className="card flex-shrink-0 w-full me-16 max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body pb-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    name="name"
                                    className="input input-bordered"
                                    {...register("name", { required: true })}
                                />
                                <p className="text-red-600">
                                    {" "}
                                    {errors.name && <span>This field is required</span>}
                                </p>
                            </div>
                            {/* photo  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your photo"
                                    className="input input-bordered"
                                    {...register("photo", { required: true })}
                                />
                                {/* <input
                                    type="file"
                                    placeholder="Your photo"
                                    className="input input-bordered"
                                    {...register("image", { required: true })}

                                /> */}
                                <p className="text-red-600">
                                    {" "}
                                    {errors.photoUrl && <span>PhotoUrl is required</span>}
                                </p>


                            </div>


                            {/* email  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your email"
                                    className="input input-bordered"
                                    name="email"
                                    {...register("email", { required: true })}
                                />
                                <p className="text-red-600">
                                    {" "}
                                    {errors.email && <span>Email is required</span>}
                                </p>
                            </div>
                            {/* Password  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="Your password"
                                    className="input input-bordered"
                                    name="password"
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*?[0-9])/,
                                    })}
                                />
                                <p className="text-red-600">
                                    {errors.password?.type === "required" && (
                                        <span>Password must be required</span>
                                    )}
                                </p>
                                <p className="text-red-600">
                                    {errors.password?.type === "minLength" && (
                                        <span>Password must be 6 character </span>
                                    )}
                                </p>
                                <p className="text-red-600">
                                    {errors.password?.type === "maxLength" && (
                                        <span>Password maximum 20 character </span>
                                    )}
                                </p>
                                <p className="text-red-600">
                                    {errors.password?.type === "pattern" && (
                                        <span>At least one digit</span>
                                    )}
                                </p>
                            </div>
                            {/* firebase error  */}
                            <p className="text-red-600 mb-2">{error?.message}</p>
                            <div className="form-control mt-2">
                                <input type="submit" value="SingUp" className="capitalize btn btn-info" />
                            </div>
                        </form>
                        <p className=" font-semibold mx-auto">
                            Already registered?{" "}
                            <Link to="/login" className="link ms-2 text-primary">
                                please  login
                            </Link>
                        </p>

                        {/* socialLogin */}
                        <SocialLogin setError={setError}></SocialLogin>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;