import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
// ==============================|| PROVIDER IMPORT ||============================== //
import useSocket from '../../providers/SocketProvider';
// ==============================|| EXTERNAL COMPONENT IMPORT ||============================== //
import { styled, useTheme } from '@mui/material/styles';
import { AppBar, Box, CssBaseline, Toolbar, useMediaQuery } from '@mui/material';
// ==============================|| COMPONENT IMPORT ||============================== //
import Header from './Header';
import Sidebar from './Sidebar';
import Customization from '../Customization';
// ==============================|| REDUX IMPORT ||============================== //
import { drawerWidth } from '../../redux/constant';
import { setMenu } from '../../redux/slices';
// ==============================|| STYLES MAIN ||============================== //
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    ...theme.typography.mainContent,
    ...(!open && {
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        [theme.breakpoints.up('md')]: {
            marginLeft: -(drawerWidth - 20),
            width: `calc(100% - ${drawerWidth}px)`
        },
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px',
            width: `calc(100% - ${drawerWidth}px)`,
            padding: '16px',
            marginRight: '10px'
        }
    }),
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen
        }),
        marginLeft: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 0,
        width: `calc(100% - ${drawerWidth}px)`,
        [theme.breakpoints.down('md')]: {
            marginLeft: '20px'
        },
        [theme.breakpoints.down('sm')]: {
            marginLeft: '10px'
        }
    })
}));

const AppLayout = () => {
    const { socket, connect } = useSocket();
    const dispatch = useDispatch();
    const theme = useTheme();
    const matchDownMd = useMediaQuery(theme.breakpoints.down('lg'));
    const leftDrawerOpened = useSelector((state) => state.customization.value.opened);
    const handleLeftDrawerToggle = () => {
        dispatch(setMenu(!leftDrawerOpened));
    };
    useEffect(() => {
        dispatch(setMenu(!matchDownMd));
    }, [matchDownMd]);

    useEffect(() => {
        if (!socket) connect();
    }, [socket, connect]);

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                enableColorOnDark
                position="fixed"
                color="inherit"
                elevation={0}
                sx={{
                    bgcolor: theme.palette.background.default,
                    transition: leftDrawerOpened ? theme.transitions.create('width') : 'none'
                }}
            >
                <Toolbar>
                    <Header drawerOpen={leftDrawerOpened} handleLeftDrawerToggle={handleLeftDrawerToggle} />
                </Toolbar>
            </AppBar>
            <Sidebar drawerOpen={leftDrawerOpened} drawerToggle={handleLeftDrawerToggle} />
            <Main theme={theme} open={leftDrawerOpened}>
                <Outlet />
            </Main>
            <Customization />
        </Box>
    );
};

export default AppLayout;
