import React, { useContext } from 'react';
import { AuthContext } from '../context/TreeContextProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const { currentUser } = useContext(AuthContext)

    const getToken = localStorage.getItem('userAccessToken');
    // console.log(getToken,'getToken me');
    // console.log(currentUser,'currentUser me');

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

    return { carts, refetch }
};

export default useCart;