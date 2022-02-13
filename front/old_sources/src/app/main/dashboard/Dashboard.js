import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import {Button, Typography} from "@material-ui/core";

import DeviceService from '../../../services/API/Device/device.service';

const exampleObject = [
  {name: 'Ampoule N°1', status: 'OFF'},
  {name: 'Chauffage N°1', status: 'OFF'},
  {name: 'Ampoule N°2', status: 'ON'},
  {name: 'Ampoule N°3', status: 'OFF'},
  {name: 'Ampoule N°4', status: 'ON'},
  {name: 'Chauffage N°2', status: 'OFF'},
  {name: 'Volets N°1', status: 'OFF'},
  {name: 'Volets N°2', status: 'ON'},
];


const Dashboard = props => {
  const [ devices, setDevices ] = useState([]);
  const [ selectedDevice, setSelectedDevice ] = useState(null);
  const [ isLoading, setIsLoading ] = useState(true);

  const getStatusColor = status => {
    if (status === 'ON') return '#64dd17';
    else return '#d50000';
  };

  const toggleDevice = () => {
    const tmp = [...devices];
    setSelectedDevice({ ...selectedDevice, status: selectedDevice.status === 'ON' ? 'OFF' : 'ON'})
    tmp[selectedDevice.index] = { ...selectedDevice };
    delete tmp[selectedDevice.index].index;
    setDevices([...tmp]);
  };

  useEffect(() => {
    console.log('Load Dashboard');
    DeviceService.getAll()
      .then(res => setDevices([ ...res.data ]))
      .catch(err => console.error(err));
  }, []);

  if (!localStorage.getItem('user')) return <Redirect to="/login" />;

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
            <Typography style={{ fontSize: '24px' }}>Devices</Typography>
            <div className={"w-full pl-4"}>
              {devices.map((obj, index) => {
                return (
                  <div className={"w-full h-auto flex flex-row"} key={index}>
                    <div className={"w-1/5 h-full flex flex-col"} style={{ color: '#FFFFFF00' }}>
                      <div className={"w-full h-1/2"} style={{ borderLeft: '2px solid #0088A3' }}>A</div>
                      <div className={"w-full h-1/2"} style={{ borderLeft: index < exampleObject.length - 1 ? '2px solid #0088A3' : null, borderTop: '1px solid #0088A3' }}>A</div>
                    </div>
                    <Button className={"w-3/5"} style={{ padding: 0 }} color={'secondary'} onClick={() => setSelectedDevice({ ...obj, index: index})}>
                      {obj.name}
                    </Button>
                    <div className={"w-6 h-6 rounded-full m-auto"} style={{ backgroundColor: getStatusColor(obj.status) }} />
                  </div>
                );
              })}
            </div>
          </div>
          {selectedDevice && devices ? (
            <React.Fragment>
              <div className={"w-full h-1/5"}>
                <div className={"w-full h-1/2 flex flex-wrap pl-8 my-auto"}>
                  <Typography className={"w-full self-center p-0"} variant={'caption'}>DEVICE</Typography>
                  <Typography className={"w-full self-center p-0"} variant={'h5'}>{selectedDevice.name}</Typography>
                </div>
                <div className={"w-full h-1/2 p-8"} style={{ borderLeft: '6px solid #0088A3', borderBottom: '6px solid #0088A3', borderRight: '6px solid transparent'}}>
                  <Button
                    className={"w-full h-full"}
                    style={{
                      borderColor: getStatusColor(selectedDevice.status),
                      color: getStatusColor(selectedDevice.status),
                    }}
                    onClick={() => toggleDevice()}
                  >
                    {selectedDevice.status === 'ON' ? 'ACTIVÉ' : 'DÉSACTIVÉ'}
                  </Button>
                </div>
              </div>
              <div className={"w-4/5 ml-4"} style={{ height: '.2rem', borderBottom: '1px solid #FF7A00' }} />
            </React.Fragment>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;