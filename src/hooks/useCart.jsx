import React, { useContext } from 'react';
import { AuthContext } from '../context/TreeContextProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAxiosSecure2 from './useAxiosSecure2';

const useCart = () => {
    const { currentUser } = useContext(AuthContext)

    const getToken = localStorage.getItem('userAccessToken');
    // 
    /*  
      const { refetch, data: carts = [], error } = useQuery({
           queryKey: ['carts', currentUser?.email],
           queryFn: async () => {
               const res = await axios.get(`http://localhost:5000/carts?email=${currentUser.email}`, {
                   headers: { authorizatoin: `Bearer ${getToken}` }
               })
               console.log('cart get  res me: ',res);
               return res.data;
           },
       }) 
       */
    // 
    const { axiosSecureApis } = useAxiosSecure();
    // 
    const { rootRouteApis } = useAxiosSecure2();
    // 


    /*    const { refetch, data: carts = [], error } = useQuery({
           queryKey: ['carts', currentUser?.email],
           queryFn: async () => {
               const res = await axiosSecureApis(`/carts?email=${currentUser.email}`)
               console.log('cart get  res me: ', res);
               return res.data;
           },
       }) */

    const { refetch, data: carts = [], error } = useQuery({
        queryKey: ['carts', currentUser?.email],
        queryFn: async () => {
            const res = await rootRouteApis(`/carts?email=${currentUser.email}`)
            // console.log('cart get  res me: ', res);
            return res.data;
        },
    })

    return { carts, refetch }
};

export default useCart;