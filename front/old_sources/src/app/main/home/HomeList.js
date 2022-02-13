import React, { useEffect, useState } from 'react';
import { 
    List,
    ListItemButton,
    ListItemText
} from '@mui/material';
import roomdeviceService from '../../../services/API/Room/roomdevice.service';
import roomsensorService from '../../../services/API/Room/roomsensor.service';

const HomeList = props => {
    const { room, selectObject } = props;

    const [ objects, setObjects ] = useState([]);

    const fetchRoomObjects = async () => {
        const devices = await roomdeviceService.getRoomDevices(room.id);
        const sensors = await roomsensorService.getRoomSensors(room.id);

        setObjects([ ...devices.data, ...sensors.data ]);
    }

    useEffect(() => {
        fetchRoomObjects();
    }, []);

    return (
        <List component="div" disablePadding>
            {objects && objects.map((obj, obj_index) => {
                return (
                    <ListItemButton 
                        sx={{ pl: 4 }}
                        onClick={() => selectObject({ ...obj })} 
                        key={`${obj_index}-${obj.id}`}
                    >
                        <ListItemText primary={obj.name} />
                    </ListItemButton>
                );
            })}
        </List>
    );
};

export default HomeList;