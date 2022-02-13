import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';

import io from 'socket.io-client';
import {IoTProvider} from "./providers/IoTProvider";
import { AuthenticationProvider } from "./providers/AuthenticationProvider";
import { SocketProvider } from "./providers/SocketProvider";
import Layout from "./main/Layout";

const theme = createTheme({
  palette: {
    primary: {
      light: '#4F5B62',
      main: '#23238',
      dark: '#000A12',
    },
    secondary: {
      light: '#62EBFF',
      main: '#00B8D4',
      dark: '#0088A3',
    },
  },
});

const App = () => {
    return (
      <React.StrictMode>
        <AuthenticationProvider>
          <IoTProvider>
            <SocketProvider>
              <ThemeProvider theme={theme}>
                <BrowserRouter basename="/">
                  <Layout />
                </BrowserRouter>
              </ThemeProvider>
            </SocketProvider>
          </IoTProvider>
        </AuthenticationProvider>
      </React.StrictMode>
    );
};

export default App;
