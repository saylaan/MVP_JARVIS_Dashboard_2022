import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
/* ------------- || Api-client || ------------- */
// import { apiClient } from '../../adapters/api-client';
import AuthService from '../adapters/api-client/authentification/auth.service';

const ProtectedRoute = ({ children }) => {
    const isAuth = AuthService.getCurrentUser();
    let location = useLocation(); // get the current URL location

    if (!isAuth) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }
    return children;
};

export default ProtectedRoute;
