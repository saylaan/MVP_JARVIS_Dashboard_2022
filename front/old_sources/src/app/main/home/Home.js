import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import {
    List,
    ListItemText,
    ListItemButton,
    ListItemIcon,
    Collapse, IconButton
} from '@mui/material';
import { getCurrentUser } from '../../../services/API/Auth/auth.service';
import roomuserService from '../../../services/API/Room/roomuser.service';
import HomeList from './HomeList';
import HomeDetails from './HomeDetails';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import AddRoomDialog from "../../components/AddRoomDialog";

const useStyles = makeStyles({
    '@keyframes color_ease': {
        '0%': { backgroundColor: '#0088A360', },
        '50%': { backgroundColor: '#00B8D450', },
        '100%': { backgroundColor: '#0088A360', },
    },
    color_ease: {
        animation: '$color_ease 3s infinite ease-in-out'
    },
});

const Home = () => {
    const classes = useStyles();

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
        tmp.status = selectedObj.status === 'ON' ? 'OFF' : 'ON';
        setSelectedObj({ ...tmp });
    };

    const toggleDialog = dialog => {
        setMisc({ ...misc, [dialog]: !misc[dialog] });
    };

    const createRoom = room => {
        roomuserService.post({ name: room });
        const tmp = [ ...rooms ];
        const tmp_opens = [ ...open ];
        tmp_opens.push(false);
        setOpen([ ...tmp_opens ]);
        tmp.push({ name: room });
        setRooms([ ...tmp ]);
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
        const user = getCurrentUser();
        roomuserService.getUserRooms(user.user.id).then(response => {
            setRooms([ ...response.data ]);
        }).catch(error => {
            console.error(error);
        });
    }, []);

    return ( isLoading ? (
        <div></div>
    ) : (
        <div className="w-full h-auto py-16 pl-0 pr-16">
            <div className={`h-full w-full flex flex-wrap ${classes.color_ease}`} style={{ backgroundColor: '#0088A380', borderRadius: 30 }}>
                <div className="w-2/5 h-full p-8" id="list">
                    <List
                        sx={{ width: '100%', maxWidth: 360, bgcolor: 'theme.palette.secondary.dark' }}
                        style={{ borderRadius: 30 }}
                    >
                        <ListItemButton
                            onClick={() => toggleDialog('add_room')}
                            style={{ fontSize: 18, fontWeight: 700 }}
                        >
                            <ListItemIcon sx={{ color: '#FFFFFF' }}>
                                <AddIcon />
                            </ListItemIcon>
                            <ListItemText primary='Add Room' />
                        </ListItemButton>
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
            <AddRoomDialog open={misc.add_room} toggleDialog={toggleDialog} createRoom={createRoom} />
        </div>
    ));
};

export default Home;