const ScenarioUser = require('../../controllers/Scenario/ScenarioUserController')
const isAuthenticated = require('../../policies/isAuthenticated')

module.exports = (app) => {
    app.get('/scenariouser',
        isAuthenticated,
        ScenarioUser.index)
    app.get('/scenariousers/:scenarioId',
        isAuthenticated,
        ScenarioUser.getScenarioUsers)
    app.get('/userscenarios/:userId',
        isAuthenticated,
        ScenarioUser.getUserScenarios)
    app.post('/scenariouser',
        isAuthenticated,
        ScenarioUser.post)
    app.delete('/scenariouser/:scenariouserId',
        isAuthenticated,
        ScenarioUser.delete)
    app.put('/scenariouser/:scenariouserId',
        isAuthenticated,
        ScenarioUser.put)
}