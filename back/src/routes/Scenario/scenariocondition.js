const ScenarioConditionController = require('../../controllers/Scenario/ScenarioConditionController');
const isAuthenticated = require('../../policies/isAuthenticated');

module.exports = (app) => {
    app.get('/scenariocondition', isAuthenticated, ScenarioConditionController.index);
    app.get('/scenarioconditions/:scenarioId', isAuthenticated, ScenarioConditionController.getScenarioConditions);
    app.get('/conditionscenarios/:conditionId', isAuthenticated, ScenarioConditionController.getConditionScenarios);
    app.post('/scenariocondition', isAuthenticated, ScenarioConditionController.post);
    app.delete('/scenariocondition/:scenarioconditionId', isAuthenticated, ScenarioConditionController.delete);
    app.put('/scenariocondition/:scenarioconditionId', isAuthenticated, ScenarioConditionController.put);
};
