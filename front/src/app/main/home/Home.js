import React, { useEffect, useState } from 'react';
import {
    List,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    Collapse,
    IconButton,
    Button
} from '@mui/material';
import RoomIoTService from '../../services/API/Room/roomiot.service';
import HomeList from './HomeList';
import HomeDetails from './HomeDetails';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import AddRoomDialog from "../../components/AddRoomDialog";
import { IoTContext } from "../../providers/IoTProvider";
import { socket } from "../../context/socket";

const Home = props => {
    const iot = React.useContext(IoTContext);

    const [ rooms, setRooms ] = useState(null);
    const [ selectedObj, setSelectedObj ] = useState({});
    const [ isLoading, setIsLoading] = useState(true);
    const [ open, setOpen ] = useState([]);
    const [ misc, setMisc ] = useState({ add_room: false })

    const toggleRoom = room_index => {
        const tmp = [ ...open ];
        tmp[room_index] = !tmp[room_index];
        setOpen([ ...tmp ]);
    };

    const toggleSelected = () => {
        const tmp = { ...selectedObj }
        tmp.IoT.status = selectedObj.IoT.status === 'PAIRED' ? 'UNPAIRED' : 'PAIRED';
        socket.broadcast.emit('change-status-iot', selectedObj);
        console.log('toggle object', tmp);
        setSelectedObj({ ...tmp });
    };

    const toggleDialog = dialog => {
        setMisc({ ...misc, [dialog]: !misc[dialog] });
    };

    const createRoom = room => {
        RoomIoTService.post({ name: room });
        const tmp = [ ...rooms ];
        const tmp_opens = [ ...open ];
        tmp_opens.push(false);
        setOpen([ ...tmp_opens ]);
    };

    const deleteRoom = room_index => {
        if (window.confirm('Deleting this room will delete it permanently, are you sure ?'))  {
            if (rooms[room_index].name !== 'Kitchen') {
                const tmp = [...rooms];
                tmp.splice(room_index, 1);
                setRooms([ ...tmp ]);
            }
        }
    };

    useEffect(() => {
        if (rooms) {
            if (open.length == 0) {
                const tmp = [ ...open ];
                rooms.forEach(() => tmp.push(false));
                setOpen([ ...tmp ]);
            }
            setIsLoading(false);
        }
    }, [rooms]);

    useEffect(() => {
        if (iot.rooms) setRooms([ ...iot.rooms ]);
    }, [iot]);

    return ( isLoading ? (
        <div></div>
    ) : (
        <div className="w-full h-auto p-16">
            <div className={`h-full w-full flex flex-row`} style={{ backgroundColor: '#0088A380', borderRadius: 30 }}>
                <div className="w-2/5 h-full flex flex-col p-8" id="list">
                    <Button
                        onClick={() => toggleDialog('add_room')}
                        className={'justify-content-start'}
                        style={{ fontSize: 18, fontWeight: 500, textDecoration: 'none', textTransform: 'none', color: '#FFF' }}
                    >
                        <AddIcon />
                        Add Room
                    </Button>
                    <List
                        sx={{ width: '100%', bgcolor: 'theme.palette.secondary.dark' }}
                        style={{ borderRadius: 30 }}
                    >
                        {rooms.map((room, room_index) => {
                            return (
                                <React.Fragment key={room_index}>
                                    <ListItemButton
                                        onClick={() => toggleRoom(room_index)}
                                        style={{ fontSize: 18, fontWeight: 700 }}
                                    >
                                        <ListItemIcon sx={{ color: '#FFFFFF' }}>
                                            <HomeIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={room.name} />
                                        <IconButton><AddIcon style={{ color: '#FFFFFF' }}/></IconButton>
                                        <IconButton onClick={() => deleteRoom(room_index)}><DeleteIcon style={{ color: '#d50000' }}/></IconButton>
                                        {open[room_index] ? <ExpandLess /> : <ExpandMore />}
                                    </ListItemButton>
                                    <Collapse in={open[room_index]} timeout="auto" unmountOnExit>
                                        <HomeList room={room} selectObject={setSelectedObj} />
                                    </Collapse>
                                </React.Fragment>
                            );
                        })}
                    </List>
                </div>
                <div className="w-3/5 h-full py-8 pr-8" id="details">
                    <HomeDetails selected={selectedObj} toggleSelected={toggleSelected}/>
                </div>
            </div>
            <AddRoomDialog open={misc.add_room} toggleDialog={toggleDialog} createRoom={iot.addRoom} />
        </div>
    ));
};

export default Home;