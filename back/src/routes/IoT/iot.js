const IoTController = require('../../controllers/IoT/IoTController');
const isAuthenticated = require('../../policies/isAuthenticated');

module.exports = (app) => {
    app.get('/iot', isAuthenticated, IoTController.index);
    app.get('/iot/:iotId', isAuthenticated, IoTController.getIoT);
    app.post('/iot', IoTController.post);
    app.delete('/iot/:iotId', isAuthenticated, IoTController.delete);
    app.put('/iot/:iotId', isAuthenticated, IoTController.put);
};
