// ==============================|| EXTERNAL COMPONENT IMPORT ||============================== //
import AnalyticsIcon from '@mui/icons-material/AnalyticsTwoTone';
// ==============================|| MONITORING MENU ITEMS ||============================== //
const monitoring = {
    id: 'log',
    type: 'group',
    children: [
        {
            id: 'monitoring',
            title: 'Monitoring',
            type: 'item',
            url: 'monitoring',
            icon: AnalyticsIcon,
            breadcrumbs: false
        }
    ]
};

export default monitoring;
