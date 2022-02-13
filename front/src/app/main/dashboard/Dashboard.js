import React, {useContext, useEffect, useState} from 'react';
import { Redirect } from 'react-router-dom';
import {Button, Typography} from "@material-ui/core";

import IoTService from '../../services/API/IoT/iot.service';
import {IoTContext} from "../../providers/IoTProvider";
import {AuthenticationContext} from "../../providers/AuthenticationProvider";
import { SocketContext } from "../../context/socket";

const Dashboard = props => {
    const auth = useContext(AuthenticationContext);
    const socket = useContext(SocketContext);
    const [ iots, setIoTs ] = useState([]);
    const [ selectedIoT, setSelectedIoT ] = useState(null);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isOn, setIsOn ] = useState(false);
    const iot = useContext(IoTContext);

    const getStatusColor = status => {
        if (status === 'PAIRED') return '#64dd17';
        else return '#d50000';
    };

    const toggleIoT = () => {
        const tmp = [...iots];
        setSelectedIoT({ ...selectedIoT, status: selectedIoT.status === 'ON' ? 'OFF' : 'ON'})
        tmp[selectedIoT.index] = { ...selectedIoT };
        delete tmp[selectedIoT.index].index;
        setIoTs([...tmp]);
    };
    
     const changeStatusIoT = (iot) => {
        setIsOn(!isOn);
        console.log('testingc change status iot', isOn)
        socket.emit('change-status-device', isOn? "ON": "OFF")
     };
     
    useEffect(() => {
        if (!auth.isLoggedIn()) return <Redirect to={'/login'} />
        IoTService.getAll()
            .then(res => setIoTs([ ...res.data ]))
            .catch(err => console.error(err));
    }, []);

    return (
        <div className={"w-full h-full flex flex-row"}>
            <div className={"w-1/2"}>
            </div>
            <div className={"w-1/2 flex flex-col"}>
                <div className={"lg:w-2/5 w-3/5 h-full mx-auto"}>
                    <div className={"relative pt-16"} style={{ borderBottom: '6px solid #0088A3', borderRight: '10px solid transparent', }}>
                        <div className={"absolute bottom-1 w-2/3"} style={{ height: '.1rem', borderTop: '1px solid #FF7A00' }} />
                    </div>
                    <div className={"h-3/5 my-8 overflow-y-auto"}>
                        <Typography style={{ fontSize: '24px' }}>IoT</Typography>
                        <div className={"w-full pl-4"}>
                            {iots.map((obj, index) => {
                                return (
                                    <div className={"w-full h-auto flex flex-row"} key={index}>
                                        <div className={"w-1/5 h-full flex flex-col"} style={{ color: '#FFFFFF00' }}>
                                            <div className={"w-full h-1/2"} style={{ borderLeft: '2px solid #0088A3' }}>A</div>
                                            <div className={"w-full h-1/2"} style={{ borderLeft: index < iots.length - 1 ? '2px solid #0088A3' : null, borderTop: '1px solid #0088A3' }}>A</div>
                                        </div>
                                        <Button className={"w-3/5"} style={{ padding: 0 }} color={'secondary'} onClick={() => setSelectedIoT({ ...obj, index: index})}>
                                            {obj.name}
                                        </Button>
                                        <Button  
                                            className={"w-1/4"}
                                            onClick={() => changeStatusIoT( obj )}
                                        >
                                            <div className={"w-6 h-6 rounded-full m-auto"} style={{ backgroundColor: getStatusColor(obj.status) }} />
                                        </Button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;