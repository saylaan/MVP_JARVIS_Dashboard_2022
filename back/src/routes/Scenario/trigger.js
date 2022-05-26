const TriggerController = require('../../controllers/Scenario/TriggerController');
const isAuthenticated = require('../../policies/isAuthenticated');

module.exports = (app) => {
    app.get('/trigger', isAuthenticated, TriggerController.index);
    app.get('/trigger/:triggerId', isAuthenticated, TriggerController.getTrigger);
    app.post('/trigger', isAuthenticated, TriggerController.post);
    app.delete('/trigger/:triggerId', isAuthenticated, TriggerController.delete);
    app.put('/trigger/:triggerId', isAuthenticated, TriggerController.put);
};
