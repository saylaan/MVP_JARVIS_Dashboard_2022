import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
/* ------------- || trigger Redux || ------------- */
import { selectAllIots } from '../../../../../redux/slices';
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

const DetailTrigger = (props) => {
    const navigate = useNavigate();
    const [newTrigger, setNewTrigger] = useState('');
    const [selectedScenario, setSelectedScenario] = useState(null);
    const [sensors, setSensors] = useState([]);
    const [triggers, setTriggers] = useState([]);
    const [selectedSensor, setSelectedSensor] = useState('');
    const [selectedStatus, setSelectedStatus] = useState(false);
    useEffect(() => {
        console.log('triggers props,', props);
        setTriggers(props.triggers);
    }, [props]);
    const addTrigger = (trigger) => {
        setTriggers([...triggers, trigger]);
    };
    const iots = useSelector(selectAllIots);
    useEffect(() => {
        let a = [];
        for (let i = 0; i < iots.length; i++) {
            if (iots[i].type == 'sensor') {
                a.push(iots[i]);
            }
        }
        setSensors(a);
    }, [iots]);

    const handleChange = (value) => {
        console.log(`Selected: ${value}`);
    };
    const handleChangeSensor = (event) => {
        setSelectedSensor(event.target.value);
        console.log(`Selected: `, event.target.value);
    };
    const handleChangeStatus = (event) => {
        let v = event.target.checked ? true : false;
        setSelectedStatus(v);
        console.log(`Selected: `, event.target.value);
    };
    const handleTriggerSubmit = () => {
        props.handleChange(selectedSensor, selectedStatus);
    };

    return (
        <div style={{ width: '100%', height: '100%', padding: '1rem' }}>
            <div style={{ marginTop: 40, flexWrap: 'wrap' }}>
                {triggers.map((trigger, index) => (
                    <Card className={'flex content-center flex-col'}>
                        <CardContent>
                            <Grid item xs={12} sm={8}>
                                <Typography variant={'h4'}>Trigger {index + 1}</Typography>
                                <Grid item xs={12} sm={6}>
                                    <FormControl>
                                        <InputLabel id="triggersSelect">Triggers</InputLabel>
                                        <Select
                                            mode="multiple"
                                            size="default"
                                            labelId="triggersSelect"
                                            placeholder="Please click to select"
                                            value={trigger.socketId}
                                            onChange={handleChangeSensor}
                                            style={{ width: '100%' }}
                                        >
                                            {sensors.map((sensor) => {
                                                return (
                                                    <MenuItem key={sensor.id.toString(36)} value={sensor.socketId}>
                                                        {sensor.name.toString(36)}
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
                                        control={<Switch checked={trigger.status == 'PAIRED' ? true : false} />}
                                        label="Activated"
                                    />
                                </FormGroup>
                                <IconButton
                                    aria-label="delete"
                                    size="large"
                                    onClick={() => {
                                        if (newTrigger !== '') {
                                            addTrigger(newTrigger);
                                            setNewTrigger('');
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
                            <Typography variant={'h4'}>Ajouter une Trigger</Typography>
                            <Grid item xs={12} sm={6}>
                                <FormControl>
                                    <InputLabel id="triggersSelect">Triggers</InputLabel>
                                    <Select
                                        mode="multiple"
                                        size="default"
                                        labelId="triggersSelect"
                                        placeholder="Please click to select"
                                        value={selectedSensor}
                                        onChange={handleChangeSensor}
                                        style={{ width: '100%' }}
                                    >
                                        {sensors.map((sensor) => (
                                            <MenuItem key={sensor.id.toString(36)} value={sensor.socketId}>
                                                {sensor.name.toString(36)}
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
                            <IconButton aria-label="delete" size="large" onClick={handleTriggerSubmit}>
                                ADD <AddIcon fontSize="inherit" />
                            </IconButton>
                        </Grid>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default DetailTrigger;
