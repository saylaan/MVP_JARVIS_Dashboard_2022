import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/globals.css';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';

import { AuthenticationProvider } from './app/providers/AuthenticationProvider';

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

ReactDOM.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <ThemeProvider theme={theme}>
        <BrowserRouter basename="/">
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </AuthenticationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
