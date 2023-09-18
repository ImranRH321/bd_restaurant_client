import React, { useContext } from 'react';
import { AuthContext } from '../context/TreeContextProvider';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

const useCart = () => {
    const { currentUser } = useContext(AuthContext)

    console.log('============================');
    console.log(currentUser);
    console.log('============================');

    const { refetch, data:carts=[], error } = useQuery({
        queryKey: ['carts', currentUser?.email],
        queryFn: async () => {
            // mistik: 5173--->50000
            // const res = await axios.get(`http://localhost:5173/rcarts?email=${currentUser.email}`)
            const res = await axios.get(`http://localhost:5000/carts?email=${currentUser.email}`)
            console.log('res axios carts: ', res);
            return res.data;
        },
    })


    console.log('carts data', carts.length);

    return {carts,refetch}
};

export default useCart;