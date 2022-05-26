const ModelController = require('../../controllers/Model/ModelController');
const isAuthenticated = require('../../policies/isAuthenticated');

module.exports = (app) => {
    app.post('/group-actions', isAuthenticated, ModelController.post);
};
