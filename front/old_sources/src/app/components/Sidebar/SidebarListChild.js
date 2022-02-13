import * as React from 'react';
import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DevicesOtherIcon from '@mui/icons-material/DevicesOther';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import Collapse from '@mui/material/Collapse';
import SendIcon from '@mui/icons-material/Send';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function SidebarListChild(props) {
    const [name, setName] = useState("");
    useEffect(() => {
        // console.log("childNAME", props.device);
        setName(props.device.name);
    },[])
    // const [type, setType] = useState("");
    // useEffect(() => {
    //     setType(props.type)
    // }, []);

    return (    
    <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
                <DevicesOtherIcon />
            </ListItemIcon>
            <ListItemText primary={name} />
        </ListItemButton>    
    </List>
    )
}