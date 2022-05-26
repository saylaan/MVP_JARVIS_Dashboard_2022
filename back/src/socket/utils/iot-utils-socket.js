const { IoT } = require('../../models');

const sendIot = async (socket, socketId) => {
    try {
        await IoT.findOne({
            where: {
                socketId: socketId
            }
        }).then((newiot) => {
            socket.broadcast.emit('CONNECT_IOT_TO_FRONT', newiot);
        });
    } catch (err) {
        console.log(err);
    }
};

module.exports = {
    async createIot(socket, iot, socketId) {
        console.log('socketID create : ', socketId);
        try {
            await IoT.create({
                name: iot.name,
                mac: iot.mac,
                type: iot.type,
                category: iot.category,
                version: iot.version,
                details: iot.name + ' with mac address ' + iot.mac + ' part of ' + iot.category + ' with version ' + iot.version,
                status: 'PAIRED',
                socketId: socketId
            }).then(async (newiot) => {
                socket.broadcast.emit('CONNECT_IOT_TO_FRONT', newiot);
                console.log(`IoT Object with Socket ID : ${newiot.socketId}` + ` has been add to the database`);
            });
        } catch (err) {
            console.log(err);
        }
    },
    async updateSocketIot(socket, oldiot, socketId) {
        try {
            await IoT.update(
                {
                    socketId: socketId
                },
                {
                    where: {
                        id: oldiot.id
                    }
                }
            ).then(() => {
                sendIot(socket, socketId);
                console.log(`IoT Object with Socket ID : ${oldiot.socketId}` + ` has been update with ID : ${socketId} to the database`);
            });
        } catch (err) {
            console.log(err);
        }
    },
    async deleteIot(iot, io) {
        io.sockets.sockets.forEach(async (socket) => {
            if (socket.id === iot.socketId) {
                await IoT.findByPk(iot.id).then(async (findiot) => {
                    if (findiot) {
                        try {
                            await findiot.destroy();
                            console.log(`IoT ID: ${findiot.id} with socket ID: ${iot.socketId} disconnected.`);
                        } catch (err) {
                            console.log(err);
                        }
                    }
                });
                socket.disconnect(true);
            }
        });
    },
    async findIotWithSocket(socket) {
        let iot = null;
        try {
            iot = await IoT.findOne({
                where: {
                    socketId: socket.id
                }
            });
            return iot;
        } catch (error) {
            console.log(error);
        }
    }
};
