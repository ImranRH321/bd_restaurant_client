import React, { useContext } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import CustomLoading from '../pages/Shared/CustomLoading/CustomLoading';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';

const AdminRoute = ({ children }) => {
    const { currentUser, authLoading } = useAuth();


    const { isAdmin, isAdminLoading } = useAdmin();


    const location = useLocation();

    if (authLoading || isAdminLoading) {
        return <CustomLoading></CustomLoading>
    }

    if (currentUser && isAdmin) {
        return children;
    }
    // state=props set do it
    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default AdminRoute;