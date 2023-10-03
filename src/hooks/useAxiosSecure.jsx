import axios from 'axios';
import React, { useEffect } from 'react';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';



const instanceSecoreApis = axios.create({
    // https://bd-restaurant-server.vercel.app 
    baseURL: 'https://bd-restaurant-server.vercel.app/'
})
const useAxiosSecure = () => {

    const { logOutUser } = useAuth();
    const navigate = useNavigate();


    useEffect(() => {
        // Add a request interceptor
        instanceSecoreApis.interceptors.request.use(function (config) {
            // Do something before request is sent
            const token = localStorage.getItem('userAccessToken');
            if (token) {
                // console.log('secore isntac request-->', token, config);
                config.headers.Authorization = `Beare ${token}`
            }
            return config;
        });

        // Add a response interceptor
        instanceSecoreApis.interceptors.response.use((response) => response, function (error) {
            // Any status codes that falls outside the range of 2xx cause this function to trigger
            // Do something with response error
            console.log('error me kondo intercepttor secure mama lang kha', error);
            if (error && error.response.status === 401 || error.response.status === 403) {
                // alert('mas dora porche bondo ',error)
                console.log('error.response.status===401=====>', error.response.status === 401);
                console.log('error.response.status===403=====>', error.response.status === 403);
                console.log('error tore khaiya deci mone kor');
                // navigate('/')
                navigate('/login')
                logOutUser();
                console.log('')
            }

            return Promise.reject(error);
        });


    }, [])

    return { instanceSecoreApis, navigate };
};

export default useAxiosSecure;