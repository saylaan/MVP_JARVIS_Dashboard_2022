const ScenarioController = require('../../controllers/Scenario/ScenarioController')
const isAuthenticated = require('../../policies/isAuthenticated')

module.exports = (app) => {
    app.get('/scenario',
        isAuthenticated,
        ScenarioController.index)
    app.get('/scenario/:scenarioId',
        isAuthenticated,
        ScenarioController.getScenario)
    app.post('/scenario/',
        isAuthenticated,
        ScenarioController.post)
    app.delete('/scenario/:scenarioId',
        isAuthenticated,
        ScenarioController.delete)
    app.put('/scenario/:scenarioId',
        isAuthenticated,
        ScenarioController.put)
}