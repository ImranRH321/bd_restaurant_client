import React from 'react';
import useAuth from '../../../../hooks/useAuth';

const UserHome = () => {
    const { currentUser } = useAuth();
    return (
        <div className='w-full m-4'>
            <h1 className='text-3xl'>Welcome back, {currentUser?.displayName}</h1>
        </div>
    );
};

export default UserHome;