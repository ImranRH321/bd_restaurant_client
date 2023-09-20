import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/TreeContextProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const Login = () => {
    const { loginUser } = useContext(AuthContext);

    //
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    console.log('from via tumi kota take aico-->', from);
    // err
    const [error, setError] = useState("");

    const handleLoginFormUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then((userCredential) => {
                const loggedUser = userCredential.user;
                console.log("loggedUser-->", loggedUser)
                Swal.fire("user login successfully");
                // navigate(from, { replace: true }); 
                navigate(from, { replace: true })
            })
            .catch((err) => setError(err));
    };

    return (
        <div className="bg-primary">
            {/* TODO: Helmat not install   */}

            <br />
            {/* <section className="grid md:grid-cols-2 mb-5"> */}
            <section className="flex justify-center items-center">
                {/* <div className="imgParent">
                    <img
                        className="w-full"
                        src={
                            "https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo="
                        }
                        alt=""
                    />
                </div> */}
                <div className="formContainer mx-12 border-t-5 ">
                    <h1 className="text-5xl font-semibold text-white py-7 text-center ">Login page </h1>
                    <form onSubmit={handleLoginFormUser} className="card-body ">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="email"
                                className="input input-bordered w- "
                                required
                                name="email"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered w- "
                                required
                                name="password"
                            />
                        </div>

                        {/* TODO: Firebase error */}
                        <p className="text-red-500">{error?.message}</p>
                        <div className="form-control mt-2">
                            {/* TODO: disabled captcha  button after last change disabled */}
                            <input
                                type="submit"
                                value="Login"
                                className="btn btn-warning w-full"
                            />
                        </div>
                    </form>
                    <p className="mb-6 text-white">
                        New here?{" "}
                        <Link to="/register" className="link ms-2 text-warning">
                            Create a New Account
                        </Link>
                    </p>
                    {/* SocialLogin */}
                    <SocialLogin setError={setError}></SocialLogin>
                </div>
            </section>
        </div>
    );
};

export default Login;