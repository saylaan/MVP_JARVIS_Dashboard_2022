import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
/* ------------- || External Components Library || ------------- */
import { FormControl, Typography, IconButton, TextField, Button, Select } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
/* ------------- || Components Library || ------------- */
import TableComponent from '../../components/Table/TableComponent';
import MainCard from '../../components/Cards/MainCard';
/* ------------- || Action Redux || ------------- */
import { selectAllLogs, selectAllScenarios, postModel } from '../../redux/slices';

const Scenario = (props) => {
    const scenarios = useSelector(selectAllScenarios);
    const logs = useSelector(selectAllLogs);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [showAll, setShowAll] = useState(true);
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showClusters, setShowClusters] = useState(true);
    const [showClusterResults, setShowClusterResults] = useState(false);
    const [centroidsDay, setCentroidsDay] = useState([])
    const [centroidsTime, setCentroidsTime] = useState([])
    

    const clusters = useSelector((state) => state.model);

    let clusterCols = [
        {
            field: 'name',
            headerName: 'Name',
            width: 120
        },
        {
            field: 'category',
            headerName: 'Category',
            width: 120
        },
        {
            field: 'type',
            headerName: 'Type',
            width: 120
        },
        {
            field: 'status',
            headerName: 'Status',
            width: 120
        },
        {
            field: 'createdAt',
            headerName: 'Created At',
            width: 200
        },
        {
            field: 'updatedAt',
            headerName: 'Updated At',
            width: 200
        },
    ]

    let clusterRows = logs.map((cluster) => {
        return {
            name: cluster["IoT"]["name"],
            category: cluster["IoT"]["category"],
            type: cluster["IoT"]["type"],
            status: cluster["IoT"]["status"],
            createdAt: new Date(cluster["createdAt"]),
            updatedAt: new Date(cluster["updatedAt"])
        }
    })

    const rowsScenario = scenarios.map((scenario) => {
        return {
            name: scenario['name'],
            description: scenario['description'],
            activate: scenario['activate'],
            createdAt: new Date(scenario['createdAt']),
            updatedAt: new Date(scenario['updatedAt'])
        };
    });
    const columnsScenario = [
        { field: 'id', headerName: 'Id', width: 80 },
        { field: 'name', headerName: 'Name', width: 120 },
        { field: 'description', headerName: 'Description', width: 290 },
        {
            field: 'activate',
            headerName: 'Activate',
            width: 90,
            sortable: false,
            renderCell: (params) => {
                return (
                    <Button
                        variant="text"
                        onClick={(event) => {
                            toggleScenario(event, params.id);
                        }}
                    >
                        Toggle
                    </Button>
                );
            }
        },
        { field: 'createdAt', headerName: 'Created At', width: 150 },
        { field: 'updatedAt', headerName: 'Updated An', width: 150 },
        {
            field: 'edit',
            headerName: 'Edit',
            sortable: false,
            renderCell: (params) => {
                return (
                    <Button
                        variant="text"
                        onClick={(event) => {
                            editScenario(event, params.id);
                        }}
                    >
                        Edit
                    </Button>
                );
            }
        },
        {
            field: 'details',
            headerName: 'Details',
            sortable: false,
            renderCell: (params) => {
                return (
                    <Button
                        variant="text"
                        onClick={(event) => {
                            showScenario(event, params.id);
                        }}
                    >
                        Show Details
                    </Button>
                );
            }
        }
    ];
    const toggleScenario = (event, params) => {};
    const editScenario = (event, id) => {
        event.preventDefault();
        navigate(`edit/${id}`);
        setShowClusters(false);
        setShowEdit(true);
        setShowAll(false);
    };
    const showScenario = (event, id) => {
        event.preventDefault();
        navigate(`detail/${id}`);
        // setShowClusters(false);
        // setShowEdit(true);
        // setShowAll(false);
    };
    const addScenario = () => {
        navigate('create');
    };
    const handleChange = (value) => {
        console.log(`Selected: ${value}`);
    };
    const sendScenario = () => {
        setShowAll(true);
        setShowClusters(true);
        setShowAdd(false);
        setShowEdit(false);
    };
    const generateScenario = () => {
        dispatch(postModel(logs));
        console.log("clusters", clusters)
        let day = ""
        let hour = ""
        if ("value" in clusters){
            console.log("1", clusters["value"]["cluster"]["centroid"])
            day = dayOfWeekAsString(clusters["value"]["cluster"]["centroid"][0])
            hour = clusters["value"]["cluster"]["centroid"][1].toFixed(2);
        } else {
            console.log("2", clusters["entities"])
            day = dayOfWeekAsString(clusters["entities"]["undefined"]["model"]["centroid"][0])
            hour = clusters.entities["undefined"]["model"]["centroid"][1].toFixed(2);
        }
        
        setCentroidsDay(day)
        setCentroidsTime(hour)

        setShowClusterResults(true)
    };

    const dayOfWeekAsString = (dayIndex) => {
        return ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][dayIndex] || '';
      }

    return (
        <MainCard>
            <Typography variant="body2">
                {showAll ? (
                    <React.Fragment>
                        <Button style={{}} onClick={addScenario} variant="contained">
                            Ajouter un Scenario
                            <IconButton aria-label="delete" size="large">
                                <AddIcon fontSize="inherit" />
                            </IconButton>
                        </Button>
                        <TableComponent columns={columnsScenario} rows={rowsScenario} />
                    </React.Fragment>
                ) : null}
                {showClusters ? (
                    <Button style={{}} onClick={generateScenario} variant="contained">
                        Generer des Scenarios
                        <IconButton aria-label="delete" size="large">
                            <AddIcon fontSize="inherit" />
                        </IconButton>
                    </Button>
                ) : null}
                {showClusterResults ? (
                    <div>
                        <Typography style={{marginTop: '20px'}} variant="h2">Centroids</Typography>
                        <p>Day: <span>{centroidsDay}</span></p>
                        <p>Time: <span>{centroidsTime}</span></p>
                        <TableComponent columns={clusterCols} rows={clusterRows.slice(1,5)} />
                    </div>
                        
                ) : null}
                
            </Typography>
        </MainCard>
    );
};

export default Scenario;
