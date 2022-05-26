const RoomController = require('../../controllers/Room/RoomController');
const isAuthenticated = require('../../policies/isAuthenticated');

module.exports = (app) => {
    app.get('/room', isAuthenticated, RoomController.index);
    app.get('/room/:roomId', isAuthenticated, RoomController.getRoom);
    app.post('/room', isAuthenticated, RoomController.post);
    app.delete('/room/:roomId', isAuthenticated, RoomController.delete);
    app.put('/room/:roomId', isAuthenticated, RoomController.put);
};
