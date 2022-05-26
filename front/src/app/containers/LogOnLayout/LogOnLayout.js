import React from 'react';
import { Outlet } from 'react-router-dom';

const LogOnLayout = () => {
    return (
        <div>
            <div
                style={{
                    margin: 'auto',
                    marginTop: '15%',
                    width: '50%',
                    padding: '2.2rem',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '1rem',
                    color: 'black'
                }}
            >
                <Outlet />
            </div>
        </div>
    );
};

export default LogOnLayout;
