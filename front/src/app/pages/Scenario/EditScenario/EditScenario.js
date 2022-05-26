import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
/* ------------- || External Components Library || ------------- */
import {
    Card,
    CardContent,
    Grid,
    Typography,
    FormControl,
    MenuItem,
    InputLabel,
    IconButton,
    TextField,
    Button,
    Select
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SettingsIcon from '@mui/icons-material/Settings';
/* ------------- || Components || ------------- */
import TableComponent from '../../../components/Table/TableComponent';
import { EditAction, EditTrigger, EditCondition } from './components';
/* ------------- || Action Redux || ------------- */
import { selectAllScenarios, updateScenario, updateCondition, updateTrigger, updateAction, selectAllIots } from '../../../redux/slices';
/* ------------- || Provider Imports || ------------- */
import ScenarioActionService from '../../../adapters/api-client/scenario/scenarioaction.service';
import ScenarioTriggerService from '../../../adapters/api-client/scenario/scenariotrigger.service';
import ScenarioConditionService from '../../../adapters/api-client/scenario/scenariocondition.service';

const EditScenario = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [newAction, setNewAction] = useState('');
    const [selectedScenario, setSelectedScenario] = useState(null);
    const [devices, setDevices] = useState([]);
    const [actions, setActions] = useState([]);
    const [triggers, setTriggers] = useState([]);
    const [conditions, setConditions] = useState([]);
    const iots = useSelector(selectAllIots);
    const params = useParams();
    const scenarios = useSelector(selectAllScenarios);
    const [scenario, setScenario] = useState([]);
    useEffect(() => {
        for (let i = 0; i < scenarios.length; i++) {
            if (scenarios[i]['id'] == params.id) setScenario(scenarios[i]);
        }
        let details = fetchDetails(params.id);
        //  = ScenarioTriggerService.getScenarioTriggers(params.id)
        console.log('the trifs', details);
    }, [scenarios]);

    const fetchDetails = async (id) => {
        let a = await ScenarioActionService.getScenarioActions(id);
        let t = await ScenarioTriggerService.getScenarioTriggers(id);
        let c = await ScenarioConditionService.getScenarioConditions(id);
        setActions(a.data);
        setTriggers(t.data);
        setConditions(c.data);
    };

    console.log(scenarios);
    console.log(actions);

    useEffect(() => {
        let a = [];
        let t = [];
        for (let i = 0; i < iots.length; i++) {
            if (iots[i].type == 'sensor') {
                t.push(iots[i]);
            } else {
                a.push(iots[i]);
            }
        }
        setActions(a);
        setTriggers(t);
    }, [iots]);

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
            <h1>Edit Scenario Page</h1>
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
                        <Grid item xs={12} sm={3}>
                            <TextField required id="name" defaultValue="Author" value={scenario.name} />
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <TextField required id="description" label="Description" value={scenario.description} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <EditTrigger triggers={triggers} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <EditAction actions={actions} />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <EditCondition conditions={conditions} handleConditionChange={handleChange} />
                        </Grid>
                    </Grid>
                    <Button variant="contained" htmlType="submit">
                        Submit
                    </Button>
                </FormControl>
            </div>
        </div>
    );
};

export default EditScenario;
