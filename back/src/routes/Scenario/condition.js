const ConditionController = require('../../controllers/Scenario/ConditionController');
const isAuthenticated = require('../../policies/isAuthenticated');

module.exports = (app) => {
    app.get('/condition', isAuthenticated, ConditionController.index);
    app.get('/condition/:conditionId', isAuthenticated, ConditionController.getCondition);
    app.post('/condition', isAuthenticated, ConditionController.post);
    app.delete('/condition/:conditionId', isAuthenticated, ConditionController.delete);
    app.put('/condition/:conditionId', isAuthenticated, ConditionController.put);
};
