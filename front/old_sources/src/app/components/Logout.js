import React from 'react';
import { IconButton } from '@material-ui/core';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    '@keyframes color_ease': {
        '0%': { color: 'rgba(2,254,255,1)', },
        '50%': { color: 'rgba(2,254,255,0.5)', },
        '100%': { color: 'rgba(2,254,255,1)', },
    },
    color_ease: {
        animation: '$color_ease 3s infinite ease-in-out'
    },
});

const Logout = ({ setToken }) => {
    const classes = useStyles();

    return (
        <IconButton style={{
            position: 'absolute',
            top: 0,
            right: 0,
        }}
        onClick={() => {
            localStorage.removeItem('user');
            setToken();
        }}>
            <PowerSettingsNewIcon 
                style={{ fontSize: 42 }} 
                color="secondary"
                className={classes.color_ease}
            />
        </IconButton>
    )
};

export default Logout;