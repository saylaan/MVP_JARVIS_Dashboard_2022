const { IoT, IDatavalueIoT, IDatavalue, RoomIoT } = require('../models');
const { createIot, updateSocketIot, findIotWithSocket } = require('./utils/iot-utils-socket');
const { createIDatavalue, createIDatavalueIot } = require('./utils/idata-utils-socket');
const {
    getAllScenario,
    getScenarioConditions,
    getScenarioTriggers,
    getScenarioActions,
    getOneScenarioConditions,
    getOneScenarioTriggers,
    getOneScenarioActions,
    getAllIoTs,
    getAllLogs,
    getOneLogs
} = require('../scenario/utils/utils-request');

module.exports = (io) => {
    io.on('connection', (socket) => {
        var address = socket.request.connection.remoteAddress;
        console.log(`Socket ID: ${socket.id} with address: ${address} is connected`);
        socket.on('CONNECT_IOT_TO_SERVER', async (iot) => {
            console.log(`IoT with address mac ${iot.mac} has been trying`);
            try {
                await IoT.findOne({
                    where: {
                        mac: iot.mac
                    }
                }).then(async (oldiot) => {
                    !oldiot ? createIot(socket, iot, socket.id) : updateSocketIot(socket, oldiot, socket.id);
                });
            } catch (err) {
                console.log(err);
            }
        });
        /*
         * Receive & Store Data from a Sensor
         */
        socket.on('SEND_DATA_TO_SERVER', async (data) => {
            let iot = await findIotWithSocket(socket);
            let idatavalue = await createIDatavalue(data);
            let idatavalueiot = await createIDatavalueIot(iot, idatavalue, socket);
            socket.broadcast.emit('SEND_DATA_TO_FRONT', idatavalueiot);

            let scenariocond = null;
            let scenariotrigger = null;
            let scenarioaction = null;
            let iots = await getAllIoTs();
            let logs = await getAllLogs();
            console.log(
                `\n\n\n\n\n\n|---------------------------- STARTING THE CHECKING OF ALL SCENARIO ----------------------------|\n\n\n\n\n\n\n\n`
            );
            try {
                await getAllScenario().then(async (scenarios) => {
                    scenarios.forEach(async (scenario) => {
                        let validCondition = false;
                        let validTrigger = false;
                        scenariocond = await getOneScenarioConditions(scenario.id);
                        if (scenariocond) {
                            console.log(
                                '\n\nScenariocond',
                                scenariocond.Condition.id,
                                scenariocond.Condition.socketId,
                                scenariocond.Condition.value
                            );
                            for (let i = 0; i < iots.length; i++) {
                                if (
                                    iots[i].type === 'device' &&
                                    iots[i].socketId === scenariocond.Condition.socketId &&
                                    iots[i].status === scenariocond.Condition.value
                                ) {
                                    validCondition = true;
                                    console.log('I found a iot:', iots[i].name, iots[i].socketId, validCondition, '\n\n');
                                    break;
                                }
                                validCondition = false;
                            }
                        }
                        scenariotrigger = await getOneScenarioTriggers(scenario.id);
                        if (scenariotrigger) {
                            console.log(
                                '\n\nscenariotrigger',
                                scenariotrigger.Trigger.id,
                                scenariotrigger.Trigger.socketId,
                                scenariotrigger.Trigger.value
                            );
                            if (
                                logs[logs.length - 1].IoT.type === 'sensor' &&
                                logs[logs.length - 1].IoT.socketId === scenariotrigger.Trigger.socketId &&
                                logs[logs.length - 1].IDatavalue.value === scenariotrigger.Trigger.value
                            ) {
                                validTrigger = true;
                                console.log(
                                    'I found a iot:',
                                    logs[logs.length - 1].IoT.name,
                                    logs[logs.length - 1].IoT.socketId,
                                    validTrigger,
                                    '\n\n'
                                );
                            } else {
                                validTrigger = false;
                            }
                        }
                        if (validCondition && validTrigger) {
                            scenarioaction = await getOneScenarioActions(scenario.id);
                            if (scenarioaction) {
                                console.log(
                                    '\n\nscenarioaction',
                                    scenarioaction.Action.id,
                                    scenarioaction.Action.socketId,
                                    scenarioaction.Action.value
                                );
                                for (let i = 0; i < iots.length; i++) {
                                    if (iots[i].type === 'device' && iots[i].socketId === scenarioaction.Action.socketId) {
                                        console.log(io.socket);
                                        console.log('I found a iot:', iots[i].name, iots[i].socketId, validCondition, '\n\n');
                                        socket.broadcast
                                            .to(iots[i].socketId)
                                            .emit('SEND_STATUS_DEVICE_TO_DEVICE', scenarioaction.Action.value);
                                        validTrigger = false;
                                        validCondition = false;
                                        break;
                                    }
                                }
                            }
                        }
                    });
                });
            } catch (err) {
                console.log(err);
            }
            // Check trigger
        });
        /*
         * Change the status of a IoT Device from the FRONT
         */
        socket.on('SEND_STATUS_FRONT_TO_SERVER', async (iot, status) => {
            let newStatus = status === 'PAIRED' ? 'ON' : 'OFF';
            console.log('Trying to turn', newStatus, 'socketId:', iot.socketId);
            socket.broadcast.to(iot.socketId).emit('SEND_STATUS_DEVICE_TO_DEVICE', newStatus);
        });
        /*
         * Change the status of a IoT Device from Device
         */
        socket.on('SEND_STATUS_DEVICE_TO_SERVER', async (status) => {
            let iot = await findIotWithSocket(socket);
            let newStatus = status.value === 'ON' ? 'PAIRED' : 'IGNORED';
            console.log('Trying to change status to ', newStatus, 'for socketId:', iot.socketId);
            socket.broadcast.emit('SEND_STATUS_DEVICE_TO_FRONT', {
                id: iot.id,
                name: iot.name,
                mac: iot.mac,
                type: iot.type,
                category: iot.category,
                version: iot.version,
                details: iot.details,
                status: newStatus,
                socketId: iot.socketId
            });
        });
        // socket.on('HANDLE_CONNECTION_IOT', async (iot) => { // Think to split in two
        //     // Handle the unpaired / paired and ignored for all iot connected
        //     if (iot.status === 'UNPAIRED') deleteIot(iot, io);
        // });
        socket.on('disconnect', () => {
            // Need to find the correct socketId and SEND_STATUS_DEVICE_TO_FRONT for turning on or off
            console.log(`Socket ID: ${socket.id} with address: ${address} has been disconnected`);
        });
    });
};
