import React, { useState } from 'react';

export const AuthenticationContext = React.createContext();

export const AuthenticationProvider = ({ children }) => {
    const [ loggedIn, setLoggedIn ] = useState(false);

    return (
        <AuthenticationContext.Provider value={{ loggedIn, setLoggedIn }}>
            { children }
        </AuthenticationContext.Provider>
    )
}