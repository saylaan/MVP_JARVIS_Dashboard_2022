import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import DateTime from './DateTime';

const Sidebar = props => {
    const { routes } = props;

    const [ links, setLinks ] = useState([]);

    useEffect(() => {
        if (routes) setLinks(routes);
    }, []);

    return (
        <div style={{
            height: '100%',
            width: '25%',
            maxWidth: '25%',
            display: 'flex',
            flexDirection: 'column',
        }}>
            <DateTime />
            <div style={{
                width: '100%',
                padding: '20px 0',
            }} />
            <Router>
                <ul>
                    <li style={{
                        width: '50%',
                        textDecoration: 'none',
                        color: '#FFFFFF',
                        fontSize: '21px',
                        fontFamily: 'sans-serif',
                        padding: '16px',
                        borderBottom: '3px solid #62EBFF'
                    }}>
                        <Link to={'/home'}>
                            {'Home'}
                        </Link>
                    </li>            
                    {links.forEach(link => {
                        console.log(link);
                        return (
                            <li style={{
                                width: '50%',
                                textDecoration: 'none',
                                color: '#FFFFFF',
                                fontSize: '21px',
                                fontFamily: 'sans-serif',
                                padding: '16px',
                                borderBottom: '3px solid #62EBFF'
                            }}>
                                <Link to={link.link}>
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </Router>
        </div>
    );
};

export default Sidebar;