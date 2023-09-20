import { createContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/TreeContextProvider';


const axiosSecureApis = axios.create({
    baseURL: 'http://localhost:5000',
});

const useAxiosSecure = () => {
    const { logOutUser } = createContext(AuthContext)
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecureApis.interceptors.request.use((config) => {
            const token = localStorage.getItem('userAccessToken');
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            console.log('config me : ', config);
            return config;
        });

        axiosSecureApis.interceptors.response.use(
            (response) => response,
            //  
            async (error) => {
                console.log('response error axios -->', error);
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOutUser();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );
    }, [logOutUser, navigate]);

    return { axiosSecureApis };
};

export default useAxiosSecure;