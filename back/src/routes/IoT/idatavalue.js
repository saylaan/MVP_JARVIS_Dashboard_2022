const IDatavalueController = require('../../controllers/IoT/IDatavalueController')
const isAuthenticated = require('../../policies/isAuthenticated')

module.exports = (app) => {
    app.get('/idatavalue',
        isAuthenticated,
        IDatavalueController.index)
    app.get('/idatavalue/:idatavalueId',
        isAuthenticated,
        IDatavalueController.getIDatavalue)
    app.post('/idatavalue/',
        isAuthenticated,
        IDatavalueController.post)
    app.delete('/idatavalue/:idatavalueId',
        isAuthenticated,
        IDatavalueController.delete)
    app.put('/idatavalue/:idatavalueId',
        isAuthenticated,
        IDatavalueController.put)
}