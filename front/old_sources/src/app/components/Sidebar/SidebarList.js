import * as React from 'react';
import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import SidebarListChild from './SidebarListChild';
import RoomDevice from '../../../services/Room/roomdevice.service';
import RoomSensor from '../../../services/Room/roomsensor.service';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import RouterIcon from '@mui/icons-material/Router';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

export default function SidebarList(props) {
    const [open, setOpen] = useState(true);
    // const [loading, setLoading] = useState(true);
    
    // Set user rooms
    const [room, setRoom] = useState([]);
    useEffect(() => {
        setRoom(props.room);
        // console.log("PROPS", props.room);
        // console.log("ROOMLIST ", room);
    }, []);

    // Set the devices connected to each room
    const [allDevices, setAllDevices] = useState([]);
    useEffect(() => {
        const deviceArr = []
        async function fetchDevices() {
            var deviceResponse = await RoomDevice.getRoomDevices(room.id);
            var sensorResponse = await RoomSensor.getRoomSensors(room.id);
            // console.log("FETCHDevices ", deviceResponse.data)
            // console.log("FETCHSENSORS ", sensorResponse.data)
            deviceArr.push(deviceResponse.data);
            deviceArr.push(sensorResponse.data);
            console.log(typeof(sensorResponse.data))
            // console.log("deviceARR", deviceArr);
            setAllDevices([ ...deviceResponse.data, ...sensorResponse.data ]);
        }
        fetchDevices();
        console.log("USEEFFECTDEVICE ", allDevices);
    }, [room]);

    const handleClick = () => {
        setOpen(!open);
    }
    

    return(
        <div> 
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <RouterIcon />
                    </ListItemIcon>
                    <ListItemText primary={room.name} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton> 
                <Collapse in={open} timeout="auto" unmountOnExit>
                {allDevices.map(sensor => ( 
                    <SidebarListChild device={sensor} />
                ))}
                </Collapse>
        </div> 
    )
}
