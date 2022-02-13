const ICategoryIoTController = require('../../controllers/IoT/ICategoryIoTController')
const isAuthenticated = require('../../policies/isAuthenticated')

module.exports = (app) => {
    app.get('/icategoryiot',
        isAuthenticated,
        ICategoryIoTController.index)
    app.get('/icategoryiots/:icategoryId',
        isAuthenticated,
        ICategoryIoTController.getICategoryIoTs)
    app.get('/ioticategories/:iotId',
        isAuthenticated,
        ICategoryIoTController.getIoTICategories)
    app.post('/icategoryiot',
        isAuthenticated,
        ICategoryIoTController.post)
    app.delete('/icategoryiot/:icategoryiotId',
        isAuthenticated,
        ICategoryIoTController.delete)
    app.put('/icategoryiot/:icategoryiotId',
        isAuthenticated,
        ICategoryIoTController.put)
}