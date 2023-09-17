import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useCart = () => {
    const userName = 'jhon'


    const { isLoading, error, data } = useQuery({
        queryKey: ['/cart/getItem'],
        queryFn: async () => {
            const res = await fetch('https://api.github.com/repos/TanStack/query')
            const data = res.json()
          console.log(data ,'cart data');
        }
    })


    return (
        <div>

        </div>
    );
};

export default useCart;