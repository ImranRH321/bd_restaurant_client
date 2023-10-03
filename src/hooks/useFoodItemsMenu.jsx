// import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
const useFoodItemsMenu = () => {

    /*    const [foodMenus, setFoodMenus] = useState([]);
       const [loading, setLoading] = useState(true)
   
       useEffect(() => { 
           axios.get('https://bd-restaurant-server.vercel.app/foodMenu')
               .then(function (response) {
                   // handle success
                   setFoodMenus(response.data);
                   setLoading(false)
               })
   
       }, []) */

    const { refetch, data: foodMenus = [], isLoading: loading } = useQuery({
        queryKey: ['foodMenu'],
        queryFn: async () => {
            const res = await fetch('https://bd-restaurant-server.vercel.app/foodMenu');
            return res.json();
        }
    })


    return { foodMenus, loading, refetch }
};

export default useFoodItemsMenu;