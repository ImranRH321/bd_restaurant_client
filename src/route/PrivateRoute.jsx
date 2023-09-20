import React, { useContext } from 'react';
import { AuthContext } from '../context/TreeContextProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import CustomLoading from '../pages/Shared/CustomLoading/CustomLoading';

const PrivateRoute = ({ children }) => {
    const { currentUser, authLoading } = useContext(AuthContext)

    const location = useLocation();

    if (authLoading) {
        return <CustomLoading></CustomLoading>
    }

    if (currentUser) {
        return children;
    }
    // state=props set do it
    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default PrivateRoute;