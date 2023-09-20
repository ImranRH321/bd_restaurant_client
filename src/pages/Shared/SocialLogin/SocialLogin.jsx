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
    console.log('location.state?.from?.pathname---->', location.state?.from?.pathname);
    console.log('from via tumi kota take aico -->', from);


    const hanldeGoogeUser = () => {
        googleUser()
            .then(result => {
                const gooUser = result.user;
                // console.log(gooUser) 
                const userLogInfo = { nameUser: gooUser.displayName, emailuser: gooUser.email, photo: gooUser.photoURL }
                console.log(userLogInfo, 'log info data');
                axios.post('http://localhost:5000/users', userLogInfo)
                    .then(res => {
                        console.log(res, 'res axios');
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
            <button onClick={hanldeGoogeUser} className='btn btn-outline btn-md hover:text-warning btn-circle'>
                <FaGoogle />
            </button>
        </div>
    );
};

export default SocialLogin;