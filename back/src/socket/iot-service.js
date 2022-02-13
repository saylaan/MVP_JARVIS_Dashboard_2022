const {
    sequelize,
    IoT, 
} = require('../models')

module.exports = (io) => {
    io.on('connection', (socket) => {
        var address = socket.request.connection.remoteAddress
        console.log(`Socket ID: ${socket.id} with address: ${address} his connected`)
        socket.on('connect-iot', async (iot) => {
            try {
                await IoT.findOne({
                    where: {
                        mac: iot.mac
                    }
                }).then(async (oldiot) => {
                    if (!oldiot) {
                        try {
                            await IoT.create({
                                name: iot.name,
                                mac: iot.mac,
                                type: iot.type,
                                category: iot.category,
                                version: iot.version,
                                details: iot.name + " with mac address " + iot.mac + " part of " 
                                + iot.category + " with version" + iot.version,
                                status: "PAIRED",
                                socketId: socket.id
                            }).then(() => {
                                socket.broadcast.emit('connect-iot', iot);
                                console.log(`IoT Object with Socket ID : ${socket.id}` 
                                + ` has been add to the database`);
                            })
                        } catch (err) {
                            console.log(err)
                        }
                    } else if (oldiot.socketId !== socket.id) {
                        try {
                            await IoT.update({
                                socketId: socket.id
                            }, {
                                where: { 
                                    id: oldiot.id
                                }
                            }).then((newiot) => {
                                socket.broadcast.emit('connect-iot', newiot);
                                console.log(`IoT Object with Socket ID : ${oldiot.socketId}` 
                                + ` has been update with ID : ${socket.id} to the database`);
                            })
                        } catch (err) {
                            console.log(err);
                        }
                    }
                });
            } catch (err) {
                console.log(err);
            }
        })
        socket.on('send-data-iot', async (data) => { // Milestone 4
            try {
                console.log(`Socket ID: ${socket.id} sent : ${data.category} with value ${data.value}`);
                socket.broadcast.emit('send-data-iot', data);
                socket.broadcast.emit('change-status-device', data.value); 
            } catch (err) {
                console.log(err)
            }
        })
        socket.on('change-status-device', async (data) => { // Milestone 4
            if (data) {
                console.log('HERE IS MY DATA', data)
                let tmp = {
                    category: "null",
                    value: data
                }
                // socket.broadcast.emit('send-data-iot', tmp);
                socket.broadcast.emit('change-status-device', tmp.value);
            }
        })
        socket.on('change-status-iot', async (iot, status) => { // Milestone 4
            try {
                let updateIoT = await IoT.update(iot, {
                    where: { 
                        id: iot.id
                    }
                })
                if (iot.status === "UNPAIRED") {
                    // io.sockets.connected[findiot.socketId].disconnect();
                    socket.disconnect()
                } else {
                    socket.broadcast.emit('change-status-iot', updateIoT, status)
                }
            } catch (err) {
                console.log(err)
            }
        })
        socket.on('disconnect-iot', async (iotId) => { // Milestone 4
            try {
                await IoT.findByPk(iotId.id).then(async (findiot) => {
                    if (findiot) {
                        try {
                            console.log(io.sockets)
                            // io.sockets.[findiot.socketId].disconnect();
                            await findiot.destroy();
                            console.log(`IoT ID: ${findiot.id} with socket ID: ${socket.id} disconnected.`)
                        } catch (err) {
                            console.log(err)
                        }
                    }
                })
            } catch (err) {
                console.log(err)
            }
        })
        socket.on('disconnect', () => {
            console.log(`Socket ID: ${socket.id} with address: ${address} has been disconnected`)
        })
    })
}
