import React from 'react';
import { useSelector } from 'react-redux';
/* ------------- || Action Redux || ------------- */
import { selectAllLogs } from '../../redux/slices';
/* ------------- || External Components Library || ------------- */
import { Typography } from '@mui/material';
/* ------------- || Components Library || ------------- */
import MainCard from '../../components/Cards/MainCard';
import TableComponent from 'app/components/Table/TableComponent';

const Monitoring = () => {
    let logs = useSelector(selectAllLogs);

    let cols = [
        { field: 'name', headerName: 'Name', width: 120 },
        { field: 'category', headerName: 'Category', width: 120 },
        { field: 'type', headerName: 'Type', width: 120 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'value', headerName: 'Value', width: 80 },
        { field: 'createdAt', headerName: 'Created At', width: 200 },
        { field: 'updatedAt', headerName: 'Updated At', width: 200 }
    ];
    let rows = logs.map((log) => {
        return {
            name: log['IoT']['name'],
            category: log['IoT']['category'],
            type: log['IoT']['type'],
            status: log['IoT']['status'],
            value: log['IDatavalue']['value'],
            createdAt: new Date(log['createdAt']),
            updatedAt: new Date(log['updatedAt'])
        };
    });
    return (
        <MainCard title="Monitoring">
            <Typography variant="body2">
                <TableComponent columns={cols} rows={rows} />
            </Typography>
        </MainCard>
    );
};

export default Monitoring;
