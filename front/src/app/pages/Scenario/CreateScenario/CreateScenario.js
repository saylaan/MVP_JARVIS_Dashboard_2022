import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
/* ------------- || External Components Library || ------------- */
import { Grid, FormControl, TextField, Button } from '@mui/material';
/* ------------- || Components || ------------- */
import { CreateAction, CreateTrigger, CreateCondition } from './components';
/* ------------- || Action Redux || ------------- */
import {
    fetchCondition,
    fetchTrigger,
    fetchAction,
    fetchScenario,
    fetchScenarioCondition,
    fetchScenarioTrigger,
    fetchScenarioAction,
    postScenarioCondition,
    postScenarioTrigger,
    postScenarioAction
} from '../../../redux/slices';
/* ------------- || API-CLIENT || ------------- */
import ConditionService from '../../../adapters/api-client/scenario/condition.service';
import ActionService from '../../../adapters/api-client/scenario/action.service';
import TriggerService from '../../../adapters/api-client/scenario/trigger.service';
import ScenarioService from '../../../adapters/api-client/scenario/scenario.service';

const CreateScenario = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [actionIds, setActionIds] = useState('');
    const [triggerIds, setTriggerIds] = useState('');
    const [conditionIds, setConditionIds] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };
    const handleAction = async (device, status) => {
        console.log('device:', device, 'status:', status);
        let newStatus = status ? 'ON' : 'OFF';
        try {
            await ActionService.post({
                socketId: device,
                value: newStatus
            }).then((action) => {
                dispatch(fetchAction());
                setActionIds(action.data.id);
                // setActionIds([...actionIds, action.data.id]);
            });
        } catch (err) {
            console.log(err);
        }
    };
    const handleTrigger = async (sensor, status) => {
        console.log('sensor', sensor, 'status:', status);
        let newStatus = status ? '1' : '0';
        try {
            await TriggerService.post({
                socketId: sensor,
                value: newStatus
            }).then((trigger) => {
                dispatch(fetchTrigger());
                setTriggerIds(trigger.data.id);
                // setTriggerIds([...triggerIds, trigger]);
            });
        } catch (err) {
            console.log(err);
        }
    };
    const handleCondition = async (device, status) => {
        console.log('device:', device, 'status:', status);
        let newStatus = status ? 'PAIRED' : 'IGNORED';
        try {
            await ConditionService.post({
                socketId: device,
                value: newStatus,
                start_date: '2022-04-08',
                end_date: '2022-05-08',
                start_hour: '14:00',
                end_hour: '15:00'
            }).then((condition) => {
                dispatch(fetchCondition());
                setConditionIds(condition.data.id);
                // setConditionIds([...conditionIds, condition.data.id]);
            });
        } catch (err) {
            console.log(err);
        }
    };
    const submitScenario = async () => {
        try {
            await ScenarioService.post({
                name: name,
                description: description,
                activate: true
            }).then((scenario) => {
                console.log('action', actionIds, 'trigger', triggerIds, 'condition', conditionIds);
                if (actionIds !== '') {
                    dispatch(
                        postScenarioAction({
                            ScenarioId: scenario.data.id,
                            ActionId: actionIds
                        })
                    );
                    setActionIds('');
                    dispatch(fetchScenarioAction());
                }
                if (conditionIds !== '') {
                    dispatch(
                        postScenarioCondition({
                            ScenarioId: scenario.data.id,
                            ConditionId: conditionIds
                        })
                    );
                    setConditionIds('');
                    dispatch(fetchScenarioCondition());
                }
                if (triggerIds !== '') {
                    dispatch(
                        postScenarioTrigger({
                            ScenarioId: scenario.data.id,
                            TriggerId: triggerIds
                        })
                    );
                    setTriggerIds('');
                    dispatch(fetchScenarioTrigger());
                }
                dispatch(fetchScenario());
            });
        } catch (err) {
            console.log(err);
        }
    };
    const handleSendScenario = () => {
        navigate('/scenario');
    };

    return (
        <div style={{ width: '100%', height: '100%', padding: '1rem' }}>
            <h1>Create Scenario Page</h1>
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
                    <Grid container>
                        <Grid item xs={12} sm={6}>
                            <TextField value={name} required id="name" label="Name" defaultValue="Name" onChange={handleNameChange} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                value={description}
                                required
                                id="description"
                                label="Description"
                                defaultValue="Description"
                                onChange={handleDescriptionChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CreateTrigger triggers={[]} handleChange={handleTrigger} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CreateAction actions={[]} handleChange={handleAction} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CreateCondition conditions={[]} handleChange={handleCondition} />
                        </Grid>
                    </Grid>
                    <Button variant="contained" onClick={submitScenario} htmlType="submit">
                        Submit
                    </Button>
                </FormControl>
            </div>
        </div>
    );
};

export default CreateScenario;
