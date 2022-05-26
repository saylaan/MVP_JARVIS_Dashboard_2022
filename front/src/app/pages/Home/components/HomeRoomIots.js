import React from 'react';
import { useSelector } from 'react-redux';
/* ------------- || Providers Imports || ------------- */
/* ------------- || Action Redux || ------------- */
import { selectAllRoomIots } from '../../../redux/slices';
/* ------------- || External Components Library || ------------- */
import TableComponent from 'app/components/Table/TableComponent';

const HomeRoomIots = () => {
    let roomiots = useSelector(selectAllRoomIots);
    let cols = [
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
        }
    ];

    let rows = roomiots.map((iot) => {
        return {
            name: iot['IoT']['name'],
            category: iot['IoT']['category'],
            type: iot['IoT']['type'],
            status: iot['IoT']['status'],
            createdAt: new Date(iot['createdAt']),
            updatedAt: new Date(iot['updatedAt'])
        };
    });

    return (
        <div>
            <h1>Room Iot</h1>
            <div className={'w-full h-full flex pt-8'} sx={{ minWidth: 275 }}>
                <TableComponent columns={cols} rows={rows} />
            </div>
        </div>
    );
};

export default HomeRoomIots;
