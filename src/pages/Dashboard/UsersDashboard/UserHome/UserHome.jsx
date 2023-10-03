import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import PageRouteTitle from '../../../Shared/PageRouteTitle/PageRouteTitle';

const UserHome = () => {
    const { currentUser } = useAuth();


    return (
        <div className='w-full m-4'>
              <PageRouteTitle pageTitle={'User Home'}></PageRouteTitle>
            <h1 className='text-3xl ms-3 font-mono'>Welcome back, {currentUser?.displayName}</h1>
        </div>
    );
};

export default UserHome;