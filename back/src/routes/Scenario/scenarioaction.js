const ScenarioActionController = require('../../controllers/Scenario/ScenarioActionController');
const isAuthenticated = require('../../policies/isAuthenticated');

module.exports = (app) => {
    app.get('/scenarioaction', isAuthenticated, ScenarioActionController.index);
    app.get('/scenarioactions/:scenarioId', isAuthenticated, ScenarioActionController.getScenarioActions);
    app.get('/actionscenarios/:actionId', isAuthenticated, ScenarioActionController.getActionScenarios);
    app.post('/scenarioaction', isAuthenticated, ScenarioActionController.post);
    app.delete('/scenarioaction/:scenarioactionId', isAuthenticated, ScenarioActionController.delete);
    app.put('/scenarioaction/:scenarioactionId', isAuthenticated, ScenarioActionController.put);
};
