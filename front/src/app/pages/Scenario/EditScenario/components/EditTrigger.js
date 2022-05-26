import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
/* ------------- || Action Redux || ------------- */
import { selectAllIots } from '../../../../redux/slices';
/* ------------- || External Components Library || ------------- */
import {
    Card,
    CardContent,
    Grid,
    FormControl,
    FormControlLabel,
    InputLabel,
    MenuItem,
    Typography,
    IconButton,
    Select,
    TextField,
    FormGroup,
    Switch
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
/* ------------- || Components || ------------- */
import TableComponent from '../../../../components/Table/TableComponent';

const EditTrigger = (props) => {
    const navigate = useNavigate();
    const [newAction, setNewAction] = useState('');
    const [selectedScenario, setSelectedScenario] = useState(null);
    const [devices, setDevices] = useState([]);
    const [actions, setActions] = useState([]);
    const [selectedDevice, setSelectedDevice] = useState('');
    const [selectedStatus, setSelectedStatus] = useState(false);
    useEffect(() => {
        console.log('actions props,', props);
        setActions(props.actions);
    }, [props]);
    const [value, setValue] = useState([]);
    const addAction = (action) => {
        setActions([...actions, action]);
    };
    const iots = useSelector(selectAllIots);
    useEffect(() => {
        let a = [];
        for (let i = 0; i < iots.length; i++) {
            if (iots[i].type == 'device') {
                a.push(iots[i]);
            }
        }
        setDevices(a);
    }, [iots]);

    const handleChange = (value) => {
        console.log(`Selected: ${value}`);
    };
    const handleChangeDevice = (event) => {
        setSelectedDevice(event.target.value);
        console.log(`Selected: `, event.target.value);
    };
    const handleChangeStatus = (event) => {
        let v = event.target.checked ? true : false;
        setSelectedStatus(v);
    };

    const handleActionSubmit = () => {
        props.handleChange(selectedDevice, selectedStatus);
    };

    return (
        <div style={{ width: '100%', height: '100%', padding: '1rem' }}>
            <div style={{ marginTop: 40, flexWrap: 'wrap' }}>
                {actions.map((action, index) => (
                    <Card className={'flex content-center flex-col'}>
                        <CardContent>
                            <Grid item xs={12} sm={8}>
                                <Typography variant={'h4'}>Action {index + 1}</Typography>
                                <Grid item xs={12} sm={6}>
                                    <FormControl>
                                        <InputLabel id="actionsSelect">Actions</InputLabel>
                                        <Select
                                            mode="multiple"
                                            size="default"
                                            labelId="actionsSelect"
                                            placeholder="Please click to select"
                                            value={action.socketId}
                                            onChange={handleChangeDevice}
                                            style={{ width: '100%' }}
                                        >
                                            {devices.map((device) => {
                                                return (
                                                    <MenuItem key={device.id.toString(36)} value={device.socketId}>
                                                        {device.name.toString(36)}
                                                    </MenuItem>
                                                );
                                            })}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={<Switch checked={action.status == 'PAIRED' ? true : false} />}
                                        label="Activated"
                                    />
                                </FormGroup>
                                <IconButton
                                    aria-label="delete"
                                    size="large"
                                    onClick={() => {
                                        if (newAction !== '') {
                                            addAction(newAction);
                                            setNewAction('');
                                        }
                                    }}
                                >
                                    ADD <AddIcon fontSize="inherit" />
                                </IconButton>
                            </Grid>
                        </CardContent>
                    </Card>
                ))}
                <Card className={'flex content-center flex-col'}>
                    <CardContent>
                        <Grid item xs={12} sm={8}>
                            <Typography variant={'h4'}>Ajouter une Action</Typography>
                            <Grid item xs={12} sm={6}>
                                <FormControl>
                                    <InputLabel id="actionsSelect">Actions</InputLabel>
                                    <Select
                                        mode="multiple"
                                        size="default"
                                        labelId="actionsSelect"
                                        placeholder="Please click to select"
                                        value={selectedDevice}
                                        onChange={handleChangeDevice}
                                        style={{ width: '100%' }}
                                    >
                                        {devices.map((device) => (
                                            <MenuItem key={device.id.toString(36)} value={device.id}>
                                                {device.name.toString(36)}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Switch checked={selectedStatus} onChange={handleChangeStatus} />}
                                    label="Activated"
                                />
                            </FormGroup>
                            <IconButton aria-label="delete" size="large" onClick={handleActionSubmit}>
                                ADD <AddIcon fontSize="inherit" />
                            </IconButton>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default EditTrigger;
