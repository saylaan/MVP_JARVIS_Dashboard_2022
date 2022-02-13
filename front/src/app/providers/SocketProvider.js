import React, { useEffect, useContext } from 'react';
import { socket, SocketContext } from '../context/socket'
import {IoTContext} from "./IoTProvider";

export const SocketProvider = ({ children }) => {
  const iot = useContext(IoTContext);

  useEffect(() => {
      socket.on('connect-iot', (iot) => {
          console.log(iot)
          // Need to fetch new incoming iot here (list IoT)
      });
      return () => socket.disconnect();
  }, [])
  /*
  * We have to do an socket.braodcast.emit('change-status-device', status)
  * when we toggle the device from the front
  * status : on ou off (string)
  * const changeStatusDevice = (status) => { socket.broadcast('change-status-device', status)}
  */
  return (
    <SocketContext.Provider value={ socket }>
      { children }
    </SocketContext.Provider>
  )
};