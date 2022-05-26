const ActionController = require('../../controllers/Scenario/ActionController');
const isAuthenticated = require('../../policies/isAuthenticated');

module.exports = (app) => {
    app.get('/action', isAuthenticated, ActionController.index);
    app.get('/action/:actionId', isAuthenticated, ActionController.getAction);
    app.post('/action', isAuthenticated, ActionController.post);
    app.delete('/action/:actionId', isAuthenticated, ActionController.delete);
    app.put('/action/:actionId', isAuthenticated, ActionController.put);
};
