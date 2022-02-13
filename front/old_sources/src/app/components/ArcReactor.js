import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    '@keyframes rotate': {
		'0%': { transform: 'rotateZ(0deg)' },
	    '100%': { transform: 'rotateZ(360deg)' },
	},
	'@keyframes rotate_anti': {
		'0%': { transform: 'rotateZ(360deg)' },
	    '100%': { transform: 'rotateZ(0deg)' },
	},
    '@keyframes flicker': {
        '0%': {
            boxShadow: '0px 0px 60px 25px rgba(150, 255, 255, 0.5)',
            inset: '0px 1px 4px 2px rgba(21, 211, 233, 0.3)',
        },
        '40%': {
            boxShadow: '0px 0px 60px 25px rgba(150, 255, 255, 0.5)',
            inset: '0px 1px 4px 2px rgba(21, 211, 233, 0.3)',
        },
        '50%': {
            boxShadow: '0px 0px 50px 17px rgba(150, 255, 255, 0.5)',
            inset: '0px 1px 100px 2px rgba(21, 211, 233, 0.3)',
        },
        '60%': {
            boxShadow: '0px 0px 60px 25px rgba(150, 255, 255, 0.5)',
            inset: '0px 1px 4px 2px rgba(21, 211, 233, 0.3)',
        },
        '100%': {
            boxShadow: '0px 0px 60px 25px rgba(150, 255, 255, 0.5)',
            inset: '0px 1px 4px 2px rgba(21, 211, 233, 0.3)',
        }
    },
    '@keyframes colour_ease': {
        '0%': { borderColor: 'rgba(2,254,255,1)', },
        '50%': { borderColor: 'rgba(2,254,255,0.5)', },
        '100%': { borderColor: 'rgba(2,254,255,1)', },
    },
    core_flicker: {
        animation: '$flicker 0.2s infinite',
    },
    core_arc1_rotate: {
        animation: '$rotate 5s linear infinite',
    },
    core_arc2_rotate_anti: {
        animation: '$rotate_anti 4s linear infinite',
    },
    core_arc3_rotate: {
        animation: '$rotate 3s linear infinite',
    },
    core_tips_colour_ease: {
        animation: '$colour_ease 3s infinite ease-in-out',
        '&:first-child': {
            transform: 'rotate(6deg) translateY(125px)',
        },
        '&:nth-child(2)': {
            transform: 'rotate(12deg) translateY(125px)',
        },
        '&:nth-child(3)': {
            transform: 'rotate(18deg) translateY(125px)',
        },
        '&:nth-child(4)': {
            transform: 'rotate(24deg) translateY(125px)',
        },
        '&:nth-child(5)': {
            transform: 'rotate(30deg) translateY(125px)',
        },
        '&:nth-child(6)': {
            transform: 'rotate(36deg) translateY(125px)',
        },
        '&:nth-child(7)': {
            transform: 'rotate(42deg) translateY(125px)',
        },
        '&:nth-child(8)': {
            transform: 'rotate(48deg) translateY(125px)',
        },
        '&:nth-child(9)': {
            transform: 'rotate(54deg) translateY(125px)',
        },
        '&:nth-child(10)': {
            transform: 'rotate(60deg) translateY(125px)',
        },
        '&:nth-child(11)': {
            transform: 'rotate(66deg) translateY(125px)',
        },
        '&:nth-child(12)': {
            transform: 'rotate(72deg) translateY(125px)',
        },
        '&:nth-child(13)': {
            transform: 'rotate(78deg) translateY(125px)',
        },
        '&:nth-child(14)': {
            transform: 'rotate(84deg) translateY(125px)',
        },
        '&:nth-child(15)': {
            transform: 'rotate(90deg) translateY(125px)',
        },
        '&:nth-child(16)': {
            transform: 'rotate(96deg) translateY(125px)',
        },
        '&:nth-child(17)': {
            transform: 'rotate(102deg) translateY(125px)',
        },
        '&:nth-child(18)': {
            transform: 'rotate(108deg) translateY(125px)',
        },
        '&:nth-child(19)': {
            transform: 'rotate(114deg) translateY(125px)',
        },
        '&:nth-child(20)': {
            transform: 'rotate(120deg) translateY(125px)',
        },
        '&:nth-child(21)': {
            transform: 'rotate(126deg) translateY(125px)',
        },
        '&:nth-child(22)': {
            transform: 'rotate(132deg) translateY(125px)',
        },
        '&:nth-child(23)': {
            transform: 'rotate(138deg) translateY(125px)',
        },
        '&:nth-child(24)': {
            transform: 'rotate(144deg) translateY(125px)',
        },
        '&:nth-child(25)': {
            transform: 'rotate(150deg) translateY(125px)',
        },
        '&:nth-child(26)': {
            transform: 'rotate(156deg) translateY(125px)',
        },
        '&:nth-child(27)': {
            transform: 'rotate(162deg) translateY(125px)',
        },
        '&:nth-child(28)': {
            transform: 'rotate(168deg) translateY(125px)',
        },
        '&:nth-child(29)': {
            transform: 'rotate(174deg) translateY(125px)',
        },
        '&:nth-child(30)': {
            transform: 'rotate(180deg) translateY(125px)',
        },
        '&:nth-child(31)': {
            transform: 'rotate(186deg) translateY(125px)',
        },
        '&:nth-child(32)': {
            transform: 'rotate(192deg) translateY(125px)',
        },
        '&:nth-child(33)': {
            transform: 'rotate(198deg) translateY(125px)',
        },
        '&:nth-child(34)': {
            transform: 'rotate(204deg) translateY(125px)',
        },
        '&:nth-child(35)': {
            transform: 'rotate(210deg) translateY(125px)',
        },
        '&:nth-child(36)': {
            transform: 'rotate(216deg) translateY(125px)',
        },
        '&:nth-child(37)': {
            transform: 'rotate(222deg) translateY(125px)',
        },
        '&:nth-child(38)': {
            transform: 'rotate(228deg) translateY(125px)',
        },
        '&:nth-child(39)': {
            transform: 'rotate(234deg) translateY(125px)',
        },
        '&:nth-child(40)': {
            transform: 'rotate(240deg) translateY(125px)',
        },
        '&:nth-child(41)': {
            transform: 'rotate(246deg) translateY(125px)',
        },
        '&:nth-child(42)': {
            transform: 'rotate(252deg) translateY(125px)',
        },
        '&:nth-child(43)': {
            transform: 'rotate(258deg) translateY(125px)',
        },
        '&:nth-child(44)': {
            transform: 'rotate(264deg) translateY(125px)',
        },
        '&:nth-child(45)': {
            transform: 'rotate(270deg) translateY(125px)',
        },
        '&:nth-child(46)': {
            transform: 'rotate(276deg) translateY(125px)',
        },
        '&:nth-child(47)': {
            transform: 'rotate(282deg) translateY(125px)',
        },
        '&:nth-child(48)': {
            transform: 'rotate(288deg) translateY(125px)',
        },
        '&:nth-child(49)': {
            transform: 'rotate(294deg) translateY(125px)',
        },
        '&:nth-child(50)': {
            transform: 'rotate(300deg) translateY(125px)',
        },
        '&:nth-child(51)': {
            transform: 'rotate(306deg) translateY(125px)',
        },
        '&:nth-child(52)': {
            transform: 'rotate(312deg) translateY(125px)',
        },
        '&:nth-child(53)': {
            transform: 'rotate(318deg) translateY(125px)',
        },
        '&:nth-child(54)': {
            transform: 'rotate(324deg) translateY(125px)',
        },
        '&:nth-child(55)': {
            transform: 'rotate(330deg) translateY(125px)',
        },
        '&:nth-child(56)': {
            transform: 'rotate(336deg) translateY(125px)',
        },
        '&:nth-child(57)': {
            transform: 'rotate(342deg) translateY(125px)',
        },
        '&:nth-child(58)': {
            transform: 'rotate(348deg) translateY(125px)',
        },
        '&:nth-child(59)': {
            transform: 'rotate(354deg) translateY(125px)',
        },
        '&:nth-child(60)': {
            transform: 'rotate(360deg) translateY(125px)',
        },
    }
});

const ArcReactor = () => {
    const classes = useStyles();

    return(
        <div style={{
            position: 'absolute',
            top: '35%',
            left: '42%',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            boxShadow: '0px 0px 50px 15px rgb(2 255 255 / 30%), inset 0px 0px 50px 15px rgb(2 255 255 / 30%)',
        }}>
            <div style={{
                width: '210px',
                height: '210px',
                borderRadius: '50%',
                position: 'absolute',
                marginLeft: '20px',
                marginTop: '20px',
            }}>
                <div style={{
                    width: '92.25%',
                    height: '92.25%',
                    left: '2.5475%',
                    right: '2.5475%',
                    border: '6px solid transparent',
                    background: 'transparent',
                    borderRadius: '50%',
                    transform: 'rotateZ(0deg)',
                    transition: 'box-shadow 3s ease',
                }}>
                    <div style={{
                        content: '',
                        position: 'absolute',
                        width: '94%',
                        height: '94%',
                        left: '3%',
                        top: '3%',
                        boxSizing: 'border-box',
                        borderRadius: '50%',
                        backgroundColor: '#00B8D415',
                        border: '2px solid #26323880',
                        borderLeft: '2px solid transparent',
                    }}
                    className={classes.core_arc1_rotate}>
                        <div style={{
                            content: '',
                            position: 'absolute',
                            width: '94%',
                            height: '94%',
                            top: '3%',
                            left: '3%',
                            boxSizing: 'border-box',
                            color: '#62EBFF',
                            borderRadius: '50%',
                            border: '4px solid',
                            borderLeft: '4px solid transparent',
                            borderRight: '4px solid transparent',
                        }}
                        className={classes.core_arc2_rotate_anti}>
                            <div style={{
                                content: '',
                                position: 'absolute',
                                width: '94%',
                                height: '94%',
                                top: '3%',
                                left: '3%',
                                boxSizing: 'border-box',
                                borderRadius: '50%',
                                color: '#FF7A00',
                                border: '2px solid',
                                borderLeft: '2px solid transparent',
                                borderRight: '2px solid transparent',
                                borderBottom: '2px solid transparent',
                            }}
                            className={classes.core_arc3_rotate}>
                                <div style={{
                                    content: '',
                                    position: 'absolute',
                                    width: '94%',
                                    height: '94%',
                                    top: '3%',
                                    left: '3%',
                                    boxSizing: 'border-box',
                                    color: '#4F5B6250',
                                    borderRadius: '50%',
                                    border: '4px solid',
                                    borderLeft: '4px solid transparent',
                                    borderRight: '4px solid transparent',
                                }}>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{
                        backgroundColor: '#cedce0',
                        width: '110px',
                        height: '110px',
                        borderRadius: '50%',
                        border: '5px solid rgba(2, 255, 255, 0.15)',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        marginTop: '40px',
                    }}
                    className={classes.core_flicker}>
                    </div>
                </div>
                <ul style={{
                    listStyle: 'none',
                    margin: 0,
                    padding: 0,
                    display: 'block',
                    marginBlockStart: '1.5em',
                    marginBlockEnd: '1em',
                    marginInlineStart: '0px',
                    marginInlineEnd: '0px',
                    paddingInlineStart: '40px',
                }}>
                    {[ ...Array(60) ].map((elm, i) => {
                        return (
                            <li style={{
                                display: 'block',
                                width: '3px',
                                height: '11px',
                                backgroundColor: '#00B8D4',
                                position: 'absolute',
                                marginLeft: '60px',
                                marginTop: '-125px',
                            }}
                            key={i}
                            className={classes.core_tips_colour_ease}>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
};

export default ArcReactor;