import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../../context/TreeContextProvider';
import { useNavigate } from 'react-router-dom';

const SocialLogin = ({ setError }) => {
    const { googleUser } = useContext(AuthContext)
    const navigate = useNavigate();

    const hanldeGoogeUser = () => {
        googleUser()
            .then(result => {
                const gooUser = result.user;
                console.log(gooUser)
                  navigate('/')
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