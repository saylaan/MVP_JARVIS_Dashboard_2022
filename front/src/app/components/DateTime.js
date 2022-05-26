import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    '@keyframes rotate': {
        '0%': { transform: 'rotateZ(0deg)' },
        '100%': { transform: 'rotateZ(360deg)' }
    },
    '@keyframes rotate_anti': {
        '0%': { transform: 'rotateZ(360deg)' },
        '100%': { transform: 'rotateZ(0deg)' }
    },
    date_rotate: {
        animation: '$rotate 3s linear infinite'
    },
    date_rotate_anti: {
        animation: '$rotate_anti 5s linear infinite'
    },
    time_rotate_anti: {
        animation: '$rotate_anti 5s linear infinite'
    },
    hover: {
        '&:hover': {
            boxShadow: '0px 0px 30px rgba(2, 254, 255, 0.8)',
            transition: '0.3s'
        }
    }
});

const DateTime = (props) => {
    const [date, setDate] = useState(moment());

    const classes = useStyles();

    useEffect(() => {
        setInterval(() => {
            setDate(moment());
        }, 1000);
    }, []);

    return (
        <div
            style={{
                width: '200px',
                height: '200px',
                color: '#FFFFFF',
                fontFamily: 'sans-serif'
            }}
        >
            <div
                style={{
                    position: 'fixed',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    border: '6px solid #00B8D4',
                    marginTop: '50px',
                    backgroundColor: '#000A1280',
                    textAlign: 'center',
                    lineHeight: '35px'
                }}
                className={classes.hover}
            >
                <div
                    style={{
                        position: 'absolute',
                        width: '94%',
                        height: '94%',
                        top: '3%',
                        left: '3%',
                        borderRadius: '50%',
                        border: '4px solid #FF7A00',
                        borderLeft: '4px solid transparent',
                        borderRight: '4px solid transparent',
                        borderBottom: '4px solid transparent',
                        boxSizing: 'border-box',
                        textAlign: 'center',
                        lineHeight: '100px'
                    }}
                    className={classes.date_rotate}
                >
                    <div
                        style={{
                            position: 'absolute',
                            width: '94%',
                            height: '94%',
                            top: '3%',
                            left: '3%',
                            borderRadius: '50%',
                            border: '7px solid #0088A3',
                            borderLeft: '7px solid transparent',
                            borderRight: '7px solid transparent',
                            boxSizing: 'border-box'
                        }}
                        className={classes.date_rotate_anti}
                    ></div>
                </div>
                <div
                    style={{
                        fontSize: '35px',
                        marginTop: '35px'
                    }}
                >
                    {date.format('D')}
                </div>
                <div
                    style={{
                        fontSize: '15px'
                    }}
                >
                    {date.format('MMMM')}
                </div>
            </div>
            <div
                style={{
                    position: 'fixed',
                    width: '100px',
                    height: '100px',
                    marginLeft: '110px',
                    borderRadius: '50%',
                    border: '6px solid #00B8D4',
                    backgroundColor: '#000A1280',
                    textAlign: 'center',
                    lineHeight: '0px'
                }}
                className={classes.hover}
            >
                <div
                    style={{
                        position: 'absolute',
                        width: '94%',
                        height: '94%',
                        top: '3%',
                        left: '3%',
                        borderRadius: '50%',
                        border: '3px solid #0088A3',
                        borderLeft: '3px solid transparent',
                        borderRight: '3px solid transparent',
                        boxSizing: 'border-box'
                    }}
                    className={classes.time_rotate_anti}
                ></div>
                <div
                    style={{
                        fontSize: '16px',
                        marginLeft: '-20px',
                        marginTop: '40px'
                    }}
                >
                    {date.format('HH:mm')}
                </div>
                <div
                    style={{
                        fontSize: '15px',
                        marginLeft: '45px',
                        marginTop: '-15px',
                        display: 'inline'
                    }}
                >
                    {date.format('ss')}
                </div>
                <div
                    style={{
                        fontSize: '14px',
                        marginTop: '20px'
                    }}
                >
                    {date.format('dddd')}
                </div>
            </div>
        </div>
    );
};

export default DateTime;
