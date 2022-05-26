const RoomIoTController = require('../../controllers/Room/RoomIoTController');
const isAuthenticated = require('../../policies/isAuthenticated');

module.exports = (app) => {
    app.get('/roomiot', isAuthenticated, RoomIoTController.index);
    app.get('/roomiots/:roomId', isAuthenticated, RoomIoTController.getRoomIoTs);
    app.get('/iotrooms/:iotId', isAuthenticated, RoomIoTController.getIoTRooms);
    app.post('/roomiot', isAuthenticated, RoomIoTController.post);
    app.delete('/roomiot/:roomiotId', isAuthenticated, RoomIoTController.delete);
    app.put('/roomiot/:roomiotId', isAuthenticated, RoomIoTController.put);
};
