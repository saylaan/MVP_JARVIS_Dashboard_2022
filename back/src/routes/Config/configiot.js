const ConfigIoTController = require('../../controllers/Config/ConfigIoTController')
const isAuthenticated = require('../../policies/isAuthenticated')

module.exports = (app) => {
    app.get('/configiot',
        isAuthenticated,
        ConfigIoTController.index)
    app.get('/configiots/:configId',
        isAuthenticated,
        ConfigIoTController.getConfigIoTs)
    app.get('/iotconfigs/:iotId',
        isAuthenticated,
        ConfigIoTController.getIoTConfigs)
    app.post('/configiot',
        isAuthenticated,
        ConfigIoTController.post)
    app.delete('/configiot/:configiotId',
        isAuthenticated,
        ConfigIoTController.delete)
    app.put('/configiot/:configiotId',
        isAuthenticated,
        ConfigIoTController.put)
}