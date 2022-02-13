const ConfigController = require('../../controllers/Config/ConfigController')
const isAuthenticated = require('../../policies/isAuthenticated')

module.exports = (app) => {
    app.get('/config',
        isAuthenticated,
        ConfigController.index)
    app.get('/config/:configId',
        isAuthenticated,
        ConfigController.getConfig)
    app.post('/config/',
        isAuthenticated,
        ConfigController.post)
    app.delete('/config/:configId',
        isAuthenticated,
        ConfigController.delete)
    app.put('/config/:configId',
        isAuthenticated,
        ConfigController.put)
}