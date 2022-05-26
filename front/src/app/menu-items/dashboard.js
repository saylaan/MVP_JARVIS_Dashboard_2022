// ==============================|| EXTERNAL COMPONENT IMPORT ||============================== //
import DashboardIcon from '@mui/icons-material/DashboardTwoTone';
// ==============================|| DASHBOARD MENU ITEMS ||============================== //
const dashboard = {
    id: 'dashboard',
    type: 'group',
    children: [
        {
            id: 'default',
            title: 'Dashboard',
            type: 'item',
            url: 'dashboard',
            icon: DashboardIcon,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
