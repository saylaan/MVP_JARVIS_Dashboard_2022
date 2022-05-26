import { Navigate } from 'react-router-dom';
import { lazy } from 'react';
/* ------------- || Components Imports || ------------- */
import Loadable from '../components/Loader/Loadable';
import AnimatedRoute from './AnimatedRoute';
import ProtectedRoute from './ProtectedRoute';
/* ------------- || Layouts Imports || ------------- */
import AppLayout from '../containers/AppLayout';
/* ------------- || Pages Imports || ------------- */
const Dashboard = Loadable(lazy(() => import('../pages/Dashboard')));
const Home = Loadable(lazy(() => import('../pages/Home')));
const Scenario = Loadable(lazy(() => import('../pages/Scenario')));
const EditScenario = Loadable(lazy(() => import('../pages/Scenario/EditScenario/EditScenario')));
const CreateScenario = Loadable(lazy(() => import('../pages/Scenario/CreateScenario/CreateScenario')));
const DetailsScenario = Loadable(lazy(() => import('../pages/Scenario/DetailScenario/DetailsScenario')));
const DetailsModel = Loadable(lazy(() => import('../pages/Scenario/DetailScenario/DetailsModel')));
const Monitoring = Loadable(lazy(() => import('../pages/Monitoring')));

// ==============================|| MAIN ROUTING ||============================== //
const MainRoutes = {
    path: 'app',
    element: (
        <ProtectedRoute>
            <AppLayout />
        </ProtectedRoute>
    ),
    children: [
        {
            path: 'dashboard',
            element: (
                <AnimatedRoute>
                    <Dashboard />
                </AnimatedRoute>
            )
        },
        {
            path: 'home',
            element: (
                <AnimatedRoute>
                    <Home />
                </AnimatedRoute>
            )
        },
        {
            path: 'scenario',
            element: (
                <AnimatedRoute>
                    <Scenario />
                </AnimatedRoute>
            )
        },
        {
            path: 'scenario/create',
            element: (
                <AnimatedRoute>
                    <CreateScenario />
                </AnimatedRoute>
            )
        },
        {
            path: 'scenario/edit/:id',
            element: (
                <AnimatedRoute>
                    <EditScenario />
                </AnimatedRoute>
            )
        },
        {
            path: 'scenario/detail/:id',
            element: (
                <AnimatedRoute>
                    <DetailsScenario />
                </AnimatedRoute>
            )
        },
        {
            path: 'model/*',
            element: (
                <AnimatedRoute>
                    <DetailsModel />
                </AnimatedRoute>
            )
        },
        {
            path: 'monitoring',
            element: (
                <AnimatedRoute>
                    <Monitoring />
                </AnimatedRoute>
            )
        }
    ]
};

export default MainRoutes;
