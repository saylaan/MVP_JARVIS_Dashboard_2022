import React, { useEffect, useState } from 'react';
import { Dialog, DialogTitle, DialogContent, TextField, Button, DialogActions } from "@mui/material";

const AddRoomDialog = props => {
    const { open, toggleDialog, createRoom } = props;

    const [ roomName, setRoomName ] = useState('');

  const handleValidation = () => {
    createRoom({ name: roomName });
    handleClose();
  };

    const handleClose = () => {
        toggleDialog('add_room');
        setRoomName('');
    };

    return (
        <Dialog
            fullWidth
            maxWidth={'md'}
            open={open}
            onClose={handleClose}
        >
            <DialogTitle>Add a Room</DialogTitle>
            <DialogContent>
                <TextField className={'w-1/4'} name={'name'} label={'Room name'} variant={'outlined'} onChange={e => setRoomName(e.target.value)} value={roomName} />
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleValidation()} color={'primary'}>Validate</Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddRoomDialog;