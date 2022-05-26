const ScenarioTriggerController = require('../../controllers/Scenario/ScenarioTriggerController');
const isAuthenticated = require('../../policies/isAuthenticated');

module.exports = (app) => {
    app.get('/scenariotrigger', isAuthenticated, ScenarioTriggerController.index);
    app.get('/scenariotriggers/:scenarioId', isAuthenticated, ScenarioTriggerController.getScenarioTriggers);
    app.get('/triggerscenarios/:triggerId', isAuthenticated, ScenarioTriggerController.getTriggerScenarios);
    app.post('/scenariotrigger', isAuthenticated, ScenarioTriggerController.post);
    app.delete('/scenariotrigger/:scenariotriggerId', isAuthenticated, ScenarioTriggerController.delete);
    app.put('/scenariotrigger/:scenariotriggerId', isAuthenticated, ScenarioTriggerController.put);
};
