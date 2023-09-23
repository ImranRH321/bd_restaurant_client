import React, { useContext } from 'react';
import { AuthContext } from '../context/TreeContextProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import useAxiosSecure from './useAxiosSecure';

const useCart = () => {
    const { currentUser, authLoading } = useContext(AuthContext)
    const navigate = useNavigate();
    const getToken = localStorage.getItem('userAccessToken');
    const {instanceSecoreApis} = useAxiosSecure();
    // TODO: funciton not music underhod
    // console.log('how is it work instanceSecoreApis-->',instanceSecoreApis);
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

    // second 2 
    const { refetch, data: carts = [], error } = useQuery({
        queryKey: ['carts', currentUser?.email],
        queryFn: async () => {
            const res = await instanceSecoreApis(`/carts?email=${currentUser.email}`)
            console.log('cart get  res me: ', res);
            return res.data;
        },
    })




    /* 
        const { refetch, data: carts = [], error: response } = useQuery({
            queryKey: ['carts', currentUser?.email],
            enabled: !authLoading,
            queryFn: async () => {
                const res = await axios.get(`http://localhost:5000/carts?email=${currentUser.email}`, {
                    headers: { authorization: `Bearer ${localStorage.getItem('userAccessToken')}` }
                })
                console.log('cart get data  respone me: ', res);
                if (res.status === 401) {
                    navigate('/login')
                    alert("go status check")
                    return; 
                }
                return res.data;
    
            }
        })
    
        console.log('bahire error a response pai na eror akan take ase keno .....?', response
            , 'just line eror r'); */

    return { carts, refetch }
};

export default useCart; 