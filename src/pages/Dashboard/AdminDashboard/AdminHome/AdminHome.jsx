import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const AdminHome = () => {
    const { currentUser } = useAuth();
    const { instanceSecoreApis } = useAxiosSecure();

    const {data: state = {}, } = useQuery({
        queryKey: ['/admin/state'],
        queryFn: async () => {
            const res = await instanceSecoreApis(`/admin/state`)
            console.log('cart get  res me: ', res);
            return res.data;
        },
    })
    console.log('data me admin ==========', state);
    return (
        <div className='w-full m-4'>
            <h1 className='text-3xl'>Welcome back, {currentUser?.displayName}</h1>
        </div>
    );
};

export default AdminHome;