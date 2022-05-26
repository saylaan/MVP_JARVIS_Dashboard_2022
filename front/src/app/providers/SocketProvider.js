import React from 'react';
import { useDispatch } from 'react-redux';
/* ------------- || External Library Imports || ------------- */
import io from 'socket.io-client';
/* ------------- || Action Redux || ------------- */
import { fetchIot, updateIot } from '../redux/slices';
import { fetchLog, updateLog } from '../redux/slices';

const socketContext = React.createContext();

const useSocket = () => {
    const [socket, setSocket] = React.useState(null);
    const dispatch = useDispatch();

    const connect = () => {
        const connection = io.connect(`${process.env.REACT_APP_SOCKET_URL}`, { transports: ['websocket'] });
        connection.on('CONNECT_IOT_TO_FRONT', (iot) => {
            if (iot) {
                console.log('Trying to update iot store...');
                dispatch(fetchIot());
            }
        });
        connection.on('SEND_STATUS_DEVICE_TO_FRONT', (iot) => {
            if (iot) {
                console.log('Trying to update iot store...');
                dispatch(updateIot(iot));
            }
        });
        connection.on('SEND_DATA_TO_FRONT', (idatavalueiot) => {
            if (idatavalueiot) {
                console.log('Trying to update log store...');
                dispatch(fetchLog());
            }
        });
        setSocket(connection);
    };

    const disconnectSocket = () => {
        console.log('Disconnecting socket...');
        if (socket) socket.disconnect();
    };

    const changeStatusDevice = (iot) => {
        let newIot = {
            id: iot.id,
            name: iot.name,
            mac: iot.mac,
            type: iot.type,
            category: iot.category,
            version: iot.version,
            details: iot.details,
            status: iot.status === 'PAIRED' ? 'IGNORED' : 'PAIRED',
            socketId: iot.socketId
        };
        console.log('Trying to change the status of socketId:', iot.socketId, ' with status:', newIot.status);
        socket.emit('SEND_STATUS_FRONT_TO_SERVER', iot, newIot.status);
        dispatch(updateIot(newIot));
    };
    const handleConnectionIot = (iot) => {
        // think to split in two // make a pop up
        // socket.emit('HANDLE_CONNECTION_IOT', iot);
    };

    return { socket, connect, disconnectSocket, changeStatusDevice, handleConnectionIot };
};

export const SocketProvider = ({ children }) => {
    const socket = useSocket();

    return <socketContext.Provider value={socket}>{children}</socketContext.Provider>;
};

const SocketConsumer = () => {
    return React.useContext(socketContext);
};

export default SocketConsumer;
