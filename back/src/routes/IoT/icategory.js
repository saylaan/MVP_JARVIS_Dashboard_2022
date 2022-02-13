const ICategoryController = require('../../controllers/IoT/ICategoryController')
const isAuthenticated = require('../../policies/isAuthenticated')

module.exports = (app) => {
    app.get('/icategory',
        isAuthenticated,
        ICategoryController.index)
    app.get('/icategory/:icategoryId',
        isAuthenticated,
        ICategoryController.getICategory)
    app.post('/icategory/',
        isAuthenticated,
        ICategoryController.post)
    app.delete('/icategory/:icategoryId',
        isAuthenticated,
        ICategoryController.delete)
    app.put('/icategory/:icategoryId',
        isAuthenticated,
        ICategoryController.put)
}