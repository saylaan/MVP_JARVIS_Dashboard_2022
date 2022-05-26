import React from 'react';
/* ------------- || External Components Library || ------------- */
import { Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

export default TabPanel;
