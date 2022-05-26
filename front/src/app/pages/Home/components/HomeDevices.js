import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
/* ------------- || Providers Imports || ------------- */
import useSocket from '../../../providers/SocketProvider';
/* ------------- || Action Redux || ------------- */
import { selectAllIots } from '../../../redux/slices';
/* ------------- || External Components Library || ------------- */
import { Button } from '@mui/material';

const HomeDevices = () => {
    const iots = useSelector(selectAllIots);
    const { changeStatusDevice, handleConnectionIot } = useSocket();

    return (
        <div>
            <h1>Devices & Sensors Page</h1>
            {iots.map((iot) => {
                if (iot.type === 'device') {
                    return (
                        <div key={iot.id} style={{ marginTop: '1rem' }}>
                            <h2>
                                {iot.name} ({iot.type})
                            </h2>
                            <p>{iot.details}</p>
                            <Button
                                style={{
                                    color: iot.status === 'PAIRED' ? 'green' : 'red'
                                }}
                                onClick={() => changeStatusDevice(iot)}
                            >
                                {iot.status === 'PAIRED' ? 'Turn off' : 'Turn on'}
                            </Button>
                            <Button
                                style={{
                                    color: iot.status === 'PAIRED' ? 'green' : 'red'
                                }}
                                onClick={() => handleConnectionIot(iot)}
                            >
                                UNPAIRED
                            </Button>
                        </div>
                    );
                }
                return null;
            })}
            {iots.map((iot) => {
                if (iot.type === 'sensor') {
                    return (
                        <div key={iot.id} style={{ marginTop: '1rem' }}>
                            <h2>
                                {iot.name} ({iot.type})
                            </h2>
                            <p>{iot.details}</p>
                            <Button
                                style={{
                                    color: iot.status === 'PAIRED' ? 'green' : 'red'
                                }}
                                onClick={() => handleConnectionIot(iot)}
                            >
                                UNPAIRED
                            </Button>
                        </div>
                    );
                }
                return null;
            })}
        </div>
    );
};

export default HomeDevices;
