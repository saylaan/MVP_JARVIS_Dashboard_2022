import React from 'react';
import { useSelector } from 'react-redux';
/* ------------- || External Components Library || ------------- */
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
/* ------------- || Components Imports || ------------- */
import NavigationScroll from './app/components/NavigationScroll';
/* ------------- || Routes Imports || ------------- */
import Routes from './app/routes';
/* ------------- || Third Party Imports || ------------- */
import { AnimatePresence } from 'framer-motion';
/* ------------- || Providers Imports || ------------- */
import { SocketProvider } from './app/providers/SocketProvider';
/* ------------- || defaultTheme || ------------- */
import themes from './app/themes';
/* ------------- || Styles || ------------- */
import './app/styles/globals.css';

// ==============================|| MAIN APP ||============================== //
const App = () => {
    const customization = useSelector((state) => state.customization.value);

    return (
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={themes(customization)}>
                <CssBaseline />
                <NavigationScroll>
                    <AnimatePresence exitBeforeEnter>
                        <SocketProvider>{Routes()}</SocketProvider>
                    </AnimatePresence>
                </NavigationScroll>
            </ThemeProvider>
        </StyledEngineProvider>
    );
};

export default App;
