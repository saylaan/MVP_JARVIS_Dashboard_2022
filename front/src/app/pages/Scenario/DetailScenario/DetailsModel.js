import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
/* ------------- || External Components Library || ------------- */
import { Card, CardContent, Typography, FormControl, MenuItem, InputLabel, IconButton, TextField, Button, Select } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
/* ------------- || Components || ------------- */
import TableComponent from '../../../components/Table/TableComponent';
/* ------------- || Action Redux || ------------- */
// import { selectAllScenarioActions, selectAllScenarioTriggers, selectAllScenarioConditions } from '../../redux/slices';

const DetailsModel = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [newAction, setNewAction] = useState('');
    const [selectedScenario, setSelectedScenario] = useState(null);
    const [devices, setDevices] = useState([]);
    const [actions, setActions] = useState([]);
    const addAction = (action) => {
        setActions([...actions, action]);
    };
    const handleChange = (value) => {
        console.log(`Selected: ${value}`);
    };
    const handleSendScenario = (values) => {
        // ScenarioService.createScenario(values).then(() => {
        //     navigate('/userscenarios/' + user.id);
        // });
    };

    return (
        <div style={{ width: '100%0', height: '100%', padding: '1rem' }}>
            <h1>Details Model Page</h1>
            <div style={{ marginTop: 40 }}>
                <FormControl
                    name="basic"
                    labelCol={{ span: 6 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={handleSendScenario}
                    onFinishFailed={handleSendScenario}
                    autoComplete="off"
                >
                    <InputLabel id="name">Name</InputLabel>
                    <InputLabel id="author">Author</InputLabel>
                    <Select
                        mode="multiple"
                        size="default"
                        placeholder="Please click to select"
                        onChange={handleChange}
                        style={{ width: '100%' }}
                    >
                        {/* {rooms.map((room) => (
                            <Option key={room.id.toString(36)}>{room.name.toString(36)}</Option>
                        ))} */}
                    </Select>
                    <Select
                        mode="multiple"
                        size="default"
                        placeholder="Please click to select"
                        onChange={handleChange}
                        style={{ width: '100%' }}
                    >
                        {/* {devices.map((device) => (
                            <Option key={device.id.toString(36)}>{device.name.toString(36)}</Option>
                        ))} */}
                    </Select>
                    {/* {actions.map(action => (
                        <Card className={'flex content-center mt-6'} style={{ width: '30%' }} key={action.id}>
                        <CardContent>
                            <Typography variant={'h4'}>{action.name}</Typography>
                            <IconButton aria-label="delete" size="large">
                                <AddIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton aria-label="delete" size="large"
                                onClick={() => { 
                                    // deleteAction(action.id); 
                                    if (action.id === selectedAction.id)
                                        setSelectedAction(null);
                                }}
                            >
                                <DeleteIcon fontSize="inherit" />
                            </IconButton>
                            <IconButton aria-label="delete" size="large"
                                onClick={() => { setSelectedAction({ ...action }); }}
                            >
                                <SettingsIcon fontSize="inherit" />
                            </IconButton>
                        </CardContent>
                    </Card>
                    ))} */}
                    <Button variant="contained" htmlType="submit">
                        Submit
                    </Button>
                </FormControl>
            </div>
        </div>
    );
};

export default DetailsModel;
