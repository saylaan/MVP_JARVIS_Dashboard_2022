import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
/* ------------- || Redux || ------------- */
import {
    selectAllIots,
    selectAllICategorys,
    selectAllICategoryIots,
    selectAllRooms,
    selectAllScenarios,
    selectAllLogs
} from '../../redux/slices';
import { gridSpacing } from '../../redux/constant';
/* ------------- || External Components Library || ------------- */
import { Typography, Paper, Card, CardContent, Grid } from '@mui/material';
import 'chart.js/auto';
import { Doughnut, Line } from 'react-chartjs-2';
/* ------------- || Components Imports || ------------- */
import MainCard from '../../components/Cards/MainCard';
import EarningCard from './components/EarningCard';
import PopularCard from './components/PopularCard';
import TotalOrderLineChartCard from './components/TotalOrderLineChartCard';
import TotalIncomeDarkCard from './components/TotalIncomeDarkCard';
import TotalIncomeLightCard from './components/TotalIncomeLightCard';
import TotalGrowthBarChart from './components/TotalGrowthBarChart';

const Dashboard = (props) => {
    const iots = useSelector(selectAllIots);
    let icategorys = useSelector(selectAllICategorys);
    let icategoryiots = useSelector(selectAllICategoryIots);
    let rooms = useSelector(selectAllRooms);
    let scenarios = useSelector(selectAllScenarios);
    let logs = useSelector(selectAllLogs);
    const [isloading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    }, []);

    /**
     * Create dict of logs / day where key=day: value=quantityLogs
     */
    let logsPerDay = {};
    for (let i = 0; i < logs.length; i++) {
        let day = new Date(logs[i]['createdAt']).toLocaleDateString('fr-FR');
        if (day in logsPerDay) logsPerDay[day]++;
        else logsPerDay[day] = 1;
    }
    /**
     * Create Array of categories where index represents categoryId - 1
     */
    let categoryLabels = new Array(icategorys.length).fill('');
    for (let i = 0; i < icategorys.length; i++) {
        categoryLabels[icategorys[i].id - 1] = icategorys[i].name;
    }
    /**
     * Create Array of iot / categories where value (quantity) is matched to categoryId above
     */
    let iotPerCategory = new Array(categoryLabels.length).fill(0);
    for (let i = 0; i < icategoryiots.length; i++) {
        iotPerCategory[icategoryiots[i]['ICategoryId'] - 1]++;
    }
    /**
     * Create Charts
     * - category pie chart
     * - logs / day line chart
     */
    let categoryChart = {
        labels: categoryLabels,
        datasets: [
            {
                data: iotPerCategory,
                backgroundColor: ['#00b8d3', '#00B8D415', '#62EBFF', '#FF7A00', '#4F5B6250']
            }
        ]
    };
    let logChart = {
        labels: Object.keys(logsPerDay),
        datasets: [
            {
                label: 'Day',
                data: Object.keys(logsPerDay).map((day) => logsPerDay[day]),
                fill: false,
                backgroundColor: '#FF7A00'
            }
        ]
    };
    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <Card
                            isloading={isloading}
                            className={'flex content-center'}
                            style={{ maxWidth: 250, width: '30%', margin: '0 10px' }}
                            key="roomsCard"
                        >
                            <CardContent>
                                <Typography sx={{ my: 1, mx: 0 }} color="text.secondary" align="center">
                                    Total Rooms
                                </Typography>
                                <Typography sx={{ my: 1, mx: 0 }} color="text.primary" fontSize={28} align="center">
                                    {rooms.length}
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card
                            isloading={isloading}
                            className={'flex content-center'}
                            style={{ maxWidth: 250, width: '30%', margin: '0 10px' }}
                            key="categoriesCard"
                        >
                            <CardContent>
                                <Typography sx={{ my: 1, mx: 0 }} color="text.secondary" align="center">
                                    Total IoT Categories
                                </Typography>
                                <Typography sx={{ my: 1, mx: 0 }} color="text.primary" fontSize={28} align="center">
                                    {icategorys.length}
                                </Typography>
                            </CardContent>
                        </Card>
                        <Card
                            isloading={isloading}
                            className={'flex content-center'}
                            style={{ maxWidth: 250, width: '30%', margin: '0 10px' }}
                            key="scenarioCard"
                        >
                            <CardContent>
                                <Typography sx={{ my: 1, mx: 0 }} color="text.secondary" align="center">
                                    Total Scenarios
                                </Typography>
                                <Typography sx={{ my: 1, mx: 0 }} color="text.primary" fontSize={28} align="center">
                                    {scenarios.length}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                        <Typography sx={{ my: 1, mx: 0 }} color="h2" align="center">
                            Iot / Category
                        </Typography>
                        <Doughnut data={categoryChart} />
                    </Grid>
                    <Grid item lg={4} md={12} sm={12} xs={12}>
                        <Grid container spacing={gridSpacing}>
                            <Grid item sm={6} xs={12} md={6} lg={12}></Grid>
                            <Grid item sm={6} xs={12} md={6} lg={12}></Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <Grid container spacing={gridSpacing}>
                    <Grid item xs={12} md={8}>
                        <Typography sx={{ my: 1, mx: 0 }} color="h2" align="center">
                            Logs / Day
                        </Typography>
                        <Line data={logChart} />
                        {/* <TotalGrowthBarChart isloading={isloading} /> */}
                    </Grid>
                    <Grid item xs={12} md={4}>
                        {/* <PopularCard isloading={isloading} /> */}
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Dashboard;
