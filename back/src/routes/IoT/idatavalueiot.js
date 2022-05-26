const IDatavalueIoTController = require('../../controllers/IoT/IDatavalueIoTController');
const isAuthenticated = require('../../policies/isAuthenticated');

module.exports = (app) => {
    app.get('/idatavalueiot', isAuthenticated, IDatavalueIoTController.index);
    app.get('/idatavalueiots/:idatavalueId', isAuthenticated, IDatavalueIoTController.getIDatavalueIoTs);
    app.get('/iotidatavalues/:iotId', isAuthenticated, IDatavalueIoTController.getIoTIDatavalues);
    app.post('/idatavalueiot', isAuthenticated, IDatavalueIoTController.post);
    app.delete('/idatavalueiot/:idatavalueiotId', isAuthenticated, IDatavalueIoTController.delete);
    app.put('/idatavalueiot/:idatavalueiotId', isAuthenticated, IDatavalueIoTController.put);
};
