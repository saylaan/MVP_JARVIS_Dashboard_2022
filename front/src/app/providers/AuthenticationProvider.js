import React from 'react';

export const AuthenticationContext = React.createContext();

export const AuthenticationProvider = ({ children }) => {

    const isLoggedIn = () => {
        return !!JSON.parse(localStorage.getItem('user'));
    };

    return (
        <AuthenticationContext.Provider value={{ isLoggedIn }}>
            { children }
        </AuthenticationContext.Provider>
    )
}