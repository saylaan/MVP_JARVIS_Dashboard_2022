import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <p>Try to come back to the homepage</p>
            <Link to="/app/dashboard">Dashboard</Link>
        </div>
    );
};

export default NotFound;
