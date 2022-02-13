const RoomUserController = require('../../controllers/Room/RoomUserController')
const isAuthenticated = require('../../policies/isAuthenticated')

module.exports = (app) => {
    app.get('/roomuser',
        isAuthenticated,
        RoomUserController.index)
    app.get('/roomusers/:roomId',
        isAuthenticated,
        RoomUserController.getRoomUsers)
    app.get('/userrooms/:userId',
        isAuthenticated,
        RoomUserController.getUserRooms)
    app.post('/roomuser',
        isAuthenticated,
        RoomUserController.post)
    app.delete('/roomuser/:roomuserId',
        isAuthenticated,
        RoomUserController.delete)
    app.put('/roomuser/:roomuserId',
        isAuthenticated,
        RoomUserController.put)
}