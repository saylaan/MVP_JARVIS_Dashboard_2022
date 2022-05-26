import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
/* ------------- || condition Redux || ------------- */
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

const EditCondition = (props) => {
    const navigate = useNavigate();
    const [newCondition, setNewCondition] = useState('');
    const [selectedScenario, setSelectedScenario] = useState(null);
    const [devices, setDevices] = useState([]);
    const [conditions, setConditions] = useState([]);
    const [selectedDevice, setSelectedDevice] = useState('');
    const [selectedStatus, setSelectedStatus] = useState(false);
    useEffect(() => {
        console.log('conditions props,', props);
        setConditions(props.conditions);
    }, [props]);
    const [value, setValue] = useState([]);
    const [data, setDate] = useState(new Date());
    const addCondition = (condition) => {
        setConditions([...conditions, condition]);
    };
    const iots = useSelector(selectAllIots);
    useEffect(() => {
        let d = [];
        for (let i = 0; i < iots.length; i++) {
            if (iots[i].type == 'device') {
                d.push(iots[i]);
            }
        }
        setDevices(d);
    }, [iots]);
    const handleChangeDevice = (event) => {
        setSelectedDevice(event.target.value);
        console.log(`Selected: `, event.target.value);
    };
    const handleChangeStatus = (event) => {
        let v = event.target.checked ? true : false;
        setSelectedStatus(v);
    };
    console.log(devices);
    const handleChange = () => {};

    const handleConditionSubmit = () => {
        props.handleChange(selectedDevice, selectedStatus);
    };

    return (
        <div style={{ width: '100%', height: '100%', padding: '1rem' }}>
            <div style={{ marginTop: 40, flexWrap: 'wrap' }}>
                {conditions.map((condition, index) => (
                    <Card className={'flex content-center flex-col'}>
                        <CardContent>
                            <Grid item xs={12} sm={8}>
                                <Typography variant={'h4'}>Condition {index}</Typography>
                                <Select
                                    mode="multiple"
                                    size="default"
                                    placeholder="Please click to select"
                                    value={condition.socketId}
                                    onChange={handleChangeDevice}
                                    style={{ width: '100%' }}
                                >
                                    {devices.map((device) => (
                                        <MenuItem key={device.id.toString(36)} value={device.socketId}>
                                            {device.name.toString(36)}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </Grid>
                            {/* <Grid item xs={12} sm={8}>
                                <Grid item xs={12} sm={6}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DateTimePicker
                                            renderInput={(props) => <TextField {...props} />}
                                            label="Start Time"
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DateTimePicker
                                            renderInput={(props) => <TextField {...props} />}
                                            label="End Time"
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                            </Grid> */}
                            <Grid item xs={12} sm={6}>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Switch checked={condition.value == 'IGNORED' ? true : false} onChange={handleChangeStatus} />
                                        }
                                        label="Activated"
                                    />
                                </FormGroup>
                                <IconButton
                                    aria-label="delete"
                                    size="large"
                                    onClick={() => {
                                        if (newCondition !== '') {
                                            addCondition(newCondition);
                                            setNewCondition('');
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
                            <Typography variant={'h4'}>Ajouter une condition</Typography>
                            <Select
                                mode="multiple"
                                size="default"
                                placeholder="Please click to select"
                                onChange={handleChangeDevice}
                                value={selectedDevice}
                                style={{ width: '100%' }}
                            >
                                {devices.map((device) => (
                                    <MenuItem key={device.id.toString(36)} value={device.socketId.toString(36)}>
                                        {device.name.toString(36)}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        {/* <Grid item xs={12} sm={8}>
                            <Grid item xs={12} sm={6}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DateTimePicker
                                        renderInput={(props) => <TextField {...props} />}
                                        label="Start Time"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DateTimePicker
                                        renderInput={(props) => <TextField {...props} />}
                                        label="End Time"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                    />
                                </LocalizationProvider>
                            </Grid>
                        </Grid> */}
                        <Grid item xs={12} sm={6}>
                            <FormGroup>
                                <FormControlLabel
                                    control={<Switch checked={selectedStatus} onChange={handleChangeStatus} />}
                                    label="Activated"
                                />
                            </FormGroup>
                            <IconButton aria-label="delete" size="large" onClick={handleConditionSubmit}>
                                ADD <AddIcon fontSize="inherit" />
                            </IconButton>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default EditCondition;
