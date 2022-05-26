import { useRoutes, Navigate } from 'react-router-dom';
// routes
import AuthenticationRoutes from './AuthenticationRoutes';
import MainRoutes from './MainRoutes';
import config from '../../config';

// ==============================|| ROUTING RENDER ||============================== //
export default function Routes() {
    return useRoutes([AuthenticationRoutes, MainRoutes, { path: '*', element: <Navigate to="/404" replace /> }], config.basename);
}
