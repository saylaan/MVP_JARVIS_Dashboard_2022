// ==============================|| EXTERNAL COMPONENT IMPORT ||============================== //
import { Typography } from '@mui/material';
// ==============================|| COMPONENT IMPORT ||============================== //
import NavGroup from './NavGroup';
import menuItem from '../../../../menu-items';

// ==============================|| SIDEBAR MENU LIST ||============================== //
const MenuList = () => {
    <>
        <div>Menu</div>
    </>;
    const navItems = menuItem.items.map((item) => {
        switch (item.type) {
            case 'group':
                return <NavGroup key={item.id} item={item} />;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });
    return <>{navItems}</>;
};

export default MenuList;
