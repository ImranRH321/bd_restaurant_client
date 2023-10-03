import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/TreeContextProvider";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import PageRouteTitle from "../../Shared/PageRouteTitle/PageRouteTitle";

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
        <div className="font-mono mt-10">
            {/* TODO: Helmat not install   */}
          <PageRouteTitle pageTitle={'Login'}></PageRouteTitle>
            <br />
            {/* <section className="grid md:grid-cols-2 mb-5"> */}
            <section className="flex justify-center items-center">
                <div className="formContainer mx-12 border-t-5 ">
                    <h1 className="text-5xl font-semibold text-priamry py-3 text-center uppercase font-mono">Login page </h1>
                    <form onSubmit={handleLoginFormUser} className="text-black">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="text"
                                placeholder="email"
                                className="input input-bordered  "
                                required
                                name="email"
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="password"
                                className="input input-bordered  "
                                required
                                name="password"
                            />
                        </div>

                        {/* TODO: Firebase error */}
                        <p className="text-red-500">{error?.message}</p>
                        <div className="form-control mt-4">
                            {/* TODO: disabled captcha  button after last change disabled */}
                            <input
                                type="submit"
                                value="Login"
                                className="btn btn-sm btn-success w-full"
                            />
                        </div>
                    </form>
                    <p className="mt-3 ">
                        New here?{" "}
                        <Link to="/register" className="link ms-2 text-info">
                            Create a New Account
                        </Link>
                    </p>
                    {/* SocialLogin */}
                    <div className="flex text-center items-center gap-x-2 justify-center">
                        <SocialLogin setError={setError}></SocialLogin>
                        <SocialLogin setError={setError}></SocialLogin>
                        <SocialLogin setError={setError}></SocialLogin>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;