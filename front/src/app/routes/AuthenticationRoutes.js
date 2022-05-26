import { Navigate, useRoutes } from 'react-router-dom';
import { lazy } from 'react';
/* ------------- || Layouts Imports || ------------- */
import LogOnLayout from '../containers/LogOnLayout';
/* ------------- || Components Imports || ------------- */
import Loadable from '../components/Loader/Loadable';
/* ------------- || Pages Imports || ------------- */
const Login = Loadable(lazy(() => import('../pages/Login')));
const NotFound = Loadable(lazy(() => import('../pages/NotFound')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //
const AuthenticationRoutes = {
    path: '/',
    element: <LogOnLayout />,
    children: [
        { path: '/', element: <Login /> },
        { path: '/app', element: <Navigate to="/login" /> },
        { path: 'login', element: <Login /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> }
    ]
};

export default AuthenticationRoutes;
