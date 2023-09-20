import React, { useContext } from 'react';
import { AuthContext } from '../context/TreeContextProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    console.log('location state : ', location);

    if (loading) {
        console.log('loading',loading);
        return <h1>Auth Loading .....</h1>
    }

    if (currentUser) {
        return children;
    }
    // state=props set do it
    return <Navigate to="/login" state={{ from: location }} replace />;

};

export default PrivateRoute;