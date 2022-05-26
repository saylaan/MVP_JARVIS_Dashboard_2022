const { IoT, IDatavalueIoT, IDatavalue, RoomIoT } = require('../../models');

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
    async createIDatavalue(data) {
        let idatavalue = null;
        try {
            idatavalue = await IDatavalue.create({
                value: data.value,
                category: data.category
            });
            console.log(`IDatavalue ID : ${idatavalue.id} has been add to the database`);
            return idatavalue;
        } catch (error) {
            console.log(error);
        }
    },
    async createIDatavalueIot(iot, idatavalue, socket) {
        let idatavalueiot = null;
        try {
            idatavalueiot = await IDatavalueIoT.create({
                IoTId: iot.id,
                IDatavalueId: idatavalue.id
            });
            console.log(`IDatavalueIot ID: ${idatavalueiot.id} with socket ID: ${socket.id} has been add to the database`);
            socket.broadcast.emit('SEND_DATA_TO_FRONT', idatavalueiot);
            return idatavalueiot;
        } catch (error) {
            console.log(error);
        }
    },
    async deleteIDatavalue() {}
};
