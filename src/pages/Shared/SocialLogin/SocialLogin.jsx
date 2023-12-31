import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../context/TreeContextProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const SocialLogin = ({ setError }) => {
    const { googleUser } = useContext(AuthContext)
    //
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";


    const hanldeGoogeUser = () => {
        googleUser()
            .then(result => {
                const gooUser = result.user;
                const userLogInfo = { nameUser: gooUser.displayName, emailuser: gooUser.email, photo: gooUser.photoURL }

                axios.post('https://bd-restaurant-server.vercel.app/users', userLogInfo)
                    .then(res => {
                        if (res.data) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your work has been saved',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate(from, { replace: true })
                        }
                    })
                // 
            })
            .catch(err => { console.log('goo err', err), setError(err) })
    }
    return (
        <div className='flex justify-center my-3'>
            <button onClick={hanldeGoogeUser} className='btn btn-primary hover:btn-outline btn-md btn-circle'>
                <FaGoogle />
            </button>
        </div>
    );
};

export default SocialLogin;