// ==============================|| EXTERNAL COMPONENT IMPORT ||============================== //
import HomeIcon from '@mui/icons-material/HomeTwoTone';
// ==============================|| MYHOME MENU ITEMS ||============================== //
const myhome = {
    id: 'myhome',
    type: 'group',
    children: [
        {
            id: 'home',
            title: 'My Home',
            type: 'item',
            url: 'home',
            icon: HomeIcon,
            breadcrumbs: false
        }
    ]
};

export default myhome;
