import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
/* ------------- || Providers Imports || ------------- */
/* ------------- || Action Redux || ------------- */
import { updateRoom, deleteRoom, postRoom, selectAllRooms } from '../../../redux/slices';
import { updateRoomIot, deleteRoomIot, postRoomIot, selectAllRoomIots } from '../../../redux/slices';
/* ------------- || External Components Library || ------------- */
import { Card, CardContent, Typography, IconButton, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';

const HomeRooms = () => {
    const dispatch = useDispatch();
    let rooms = useSelector(selectAllRooms);
    let roomiots = useSelector(selectAllRoomIots);
    const [newRoom, setNewRoom] = React.useState('');
    const [newIot, setNewIot] = React.useState('');
    const [selectedRoom, setSelectedRoom] = React.useState(null);

    const createRoomEvent = (room) => {
        if (room !== '') {
            dispatch(postRoom(room));
            setNewRoom('');
        }
    };
    const deleteRoomEvent = (roomId) => {
        dispatch(deleteRoom(roomId));
    };
    const updateRoomEvent = (room) => {
        // dispatch(updateRoom(room));
        setSelectedRoom({ ...room });
    };
    const createRoomIotEvent = (room, newIot) => {
        console.log('room:', room);
        console.log('newIot:', newIot);
        if (room !== '') {
            dispatch(postRoomIot(room, newIot));
            setNewRoom('');
            setNewIot('');
        }
    };
    return (
        <div>
            <h1>Room</h1>
            <div className={'w-full h-full flex pt-8'} sx={{ minWidth: 500 }}>
                <Card className={'flex content-center'} style={{ width: '600px', margin: '20px 0' }}>
                    <CardContent style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography variant={'h4'}>Ajouter une Room</Typography>
                        <TextField className={'mt-6'} value={newRoom} onChange={(e) => setNewRoom(e.target.value)} />
                        <IconButton aria-label="delete" size="large" onClick={() => createRoomEvent(newRoom)}>
                            <AddIcon fontSize="inherit" />
                        </IconButton>
                    </CardContent>
                </Card>
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '40px 0',
                        flexWrap: 'wrap'
                    }}
                >
                    {rooms.map((room) => (
                        <Card className={'flex content-center mt-6'} style={{ maxWidth: '30%', margin: '0 20px 20px 0' }} key={room.id}>
                            <CardContent>
                                <Typography variant={'h4'}>{room.name}</Typography>
                                <IconButton aria-label="delete" size="large">
                                    <AddIcon fontSize="inherit" />
                                </IconButton>
                                <IconButton aria-label="delete" size="large" onClick={() => deleteRoomEvent(room.id)}>
                                    <DeleteIcon fontSize="inherit" />
                                </IconButton>
                                <IconButton aria-label="delete" size="large" onClick={() => updateRoomEvent(room)}>
                                    <SettingsIcon fontSize="inherit" />
                                </IconButton>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            {selectedRoom && selectedRoom !== null && (
                <div style={{ padding: '1rem', marginTop: '.5rem' }}>
                    <h3>{selectedRoom.name}</h3>
                    <TextField value={newIot} onChange={(e) => setNewIot(e.target.value)} />
                    <Button onClick={() => createRoomIotEvent(selectedRoom, newIot)}>
                        <AddIcon />
                        Add IoT
                    </Button>
                </div>
            )}
        </div>
    );
};

export default HomeRooms;
