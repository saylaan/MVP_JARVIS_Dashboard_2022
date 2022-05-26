import React from 'react';
/* ------------- || External Components Library || ------------- */
import { Typography, Tabs, Tab } from '@mui/material';
/* ------------- || Components Imports || ------------- */
import { TabPanel } from '../../components';
import { HomeRooms, HomeDevices, HomeRoomIots } from './components';
import MainCard from '../../components/Cards/MainCard';

const Home = () => {
    const [tabValue, setTabValue] = React.useState(0);

    const handleTabChange = () => {
        if (tabValue === 0) setTabValue(1);
        else {
            setTabValue(0);
        }
    };

    return (
        <MainCard>
            <Typography variant="body2">
                <Tabs value={tabValue} onChange={handleTabChange}>
                    <Tab label={'Rooms'} />
                    <Tab label={'Devices & Sensors'} />
                </Tabs>
                <TabPanel index={0} value={tabValue}>
                    <HomeRooms />
                </TabPanel>
                <TabPanel index={0} value={tabValue}>
                    <HomeRoomIots />
                </TabPanel>
                <TabPanel index={1} value={tabValue}>
                    <HomeDevices />
                </TabPanel>
            </Typography>
        </MainCard>
    );
};

export default Home;
