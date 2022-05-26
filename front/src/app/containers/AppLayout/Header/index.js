// ==============================|| THIRD PARTY||============================== //
import PropTypes from 'prop-types';
// ==============================|| EXTERNAL COMPONENT IMPORT ||============================== //
import { useTheme } from '@mui/material/styles';
import { Avatar, Box, ButtonBase } from '@mui/material';
// ==============================|| COMPONENT IMPORT ||============================== //
import LogoSection from '../LogoSection';
import ProfileSection from './ProfileSection';
import NotificationSection from './NotificationSection';
import MenuIcon from '@mui/icons-material/MenuTwoTone';
import MenuOpenIcon from '@mui/icons-material/MenuOpenTwoTone';

const Header = ({ drawerOpen, handleLeftDrawerToggle }) => {
    const theme = useTheme();

    return (
        <>
            <Box sx={{ width: 230, display: 'flex', [theme.breakpoints.down('md')]: { width: 'auto' } }}>
                <Box component="span" sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}>
                    <LogoSection />
                </Box>
                <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
                    <Avatar
                        variant="rounded"
                        sx={{
                            ...theme.typography.commonAvatar,
                            ...theme.typography.mediumAvatar,
                            transition: 'all .2s ease-in-out',
                            background: theme.palette.secondary.light,
                            color: theme.palette.secondary.dark,
                            '&:hover': {
                                background: theme.palette.secondary.dark,
                                color: theme.palette.secondary.light
                            }
                        }}
                        onClick={handleLeftDrawerToggle}
                        color="inherit"
                    >
                        {drawerOpen ? (
                            <MenuOpenIcon stroke={1.5} size="1rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                        ) : (
                            <MenuIcon stroke={1.5} size="1rem" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                        )}
                    </Avatar>
                </ButtonBase>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ flexGrow: 1 }} />
            <NotificationSection />
            <ProfileSection />
        </>
    );
};

Header.propTypes = {
    handleLeftDrawerToggle: PropTypes.func
};

export default Header;
