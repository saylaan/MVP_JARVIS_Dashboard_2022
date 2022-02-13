import React, { useEffect, useState } from 'react';
import {
    Button,
} from '@mui/material';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import moment from "moment";

const HomeList = props => {
    const { room, selectObject } = props;

    return (room.objects && room.objects.map((object, index) => {
        return (
            <Button className={'w-full flex flex-row p-4'}
                    style={{textDecoration: 'none', textTransform: 'none', color: '#FFF'}} onClick={() => {
                selectObject(object);
            }} key={object.id}>
                <FiberManualRecordIcon style={{color: object.IoT.status === 'PAIRED' ? '#558b2f' : '#c62828'}}/>
                <div className={'ml-8 flex self-center flex-col'}>
                    <span style={{fontSize: '.9rem'}}>{object.IoT.name}</span>
                    <span
                        style={{fontSize: '.5rem'}}>Last update at {moment(object.IoT.updatedAt).format('DD/MM/YYYY')}</span>
                </div>
            </Button>
        );
    }));
};

export default HomeList;