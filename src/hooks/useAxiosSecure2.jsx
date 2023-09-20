import axios from 'axios';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/TreeContextProvider';


const rootRouteApis = axios.create({
    baseURL: 'http://localhost:5000/'
});

const useAxiosSecure2 = () => {
    const navigate = useNavigate();
    const { logOutUser } = useContext(AuthContext)

    // Add a request interceptor
    rootRouteApis.interceptors.request.use((config) => {
        // Do something before request is sent
        const token = localStorage.getItem("userAccessToken");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        console.log('config set token  route-->', config);
        return config;
    });
    // 

    // Add a response interceptor
    rootRouteApis.interceptors.response.use((response) => response, async (error) => {
        if (error.response && (error.response.status
            === 401 || error.response.status === 403)) {
            console.log('error response me bondo if: ', error);
            navigate('/login');
            await logOutUser();
        }
        return Promise.reject(error);
    })


    return { rootRouteApis };

};

export default useAxiosSecure2;

/* 
  if (error.response && (error.response.status === 401 || error.response.status === 403)) {
            console.log('error response me bondo if: ', error);
            await logOutUser();
            navigate('/login');
        }
*/