import React, { useEffect, useState } from 'react';
import {Button} from "@material-ui/core";

const HomeDetails = props => {
    const { selected, toggleSelected } = props;

    const getStatusColor = status => {
        if (status === 'PAIRED') return '#64dd17';
        else return '#d50000';
    };

    return ( selected.id ? (
            <div className={'w-full flex flex-wrap'} id={'object-details'}>
                <p className={'w-full text-center'} style={{ fontSize: '21px', fontWeight: 700 }}>{selected.name}</p>
                <p className={'w-full text-center'} style={{ fontSize: '10px' }}>{selected.mac}</p>
                <div className={"w-1/2 flex flex-col mt-8"}>
                    <p className={'w-full text-left'} style={{ fontSize: '18px', fontWeight: 500}}>Details:</p>
                    <p className={'w-full text-left'} style={{ fontSize: '16px' }}>{selected.details}</p>
                </div>
                <div className={'w-1/2 flex flex-col mt-8 pl-8'} style={{ borderLeft: '1px solid white'}}>
                    <p className={'w-full text-left'} style={{ fontSize: '18px', fontWeight: 500}}>Room:</p>
                    <p className={'w-full text-left'} style={{ fontSize: '16px' }}>{selected.Room.name}</p>
                </div>
                <div className={'w-full flex flex-wrap content-center mt-16'}>
                    <Button
                        className={"w-1/4"}
                        style={{
                            borderColor: getStatusColor(selected.IoT.status),
                            color: getStatusColor(selected.IoT.status),
                            marginLeft: 'auto',
                            marginRight: 'auto',
                        }}
                        onClick={() => toggleSelected()}
                    >
                        {selected.IoT.status === 'PAIRED' ? 'ACTIVÉ' : 'DÉSACTIVÉ'}
                    </Button>
                </div>
            </div>
        ) : null
    );
}

export default HomeDetails;
