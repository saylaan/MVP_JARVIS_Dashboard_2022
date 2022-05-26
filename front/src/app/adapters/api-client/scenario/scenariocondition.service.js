import { Api } from '../axios';

const index = () => {
    return Api().get('scenariocondition');
};
const getScenarioConditions = (scenarioId) => {
    return Api().get(`scenarioconditions/${scenarioId}`);
};
const getConditionScenarios = (conditionId) => {
    return Api().get(`iotrooms/${conditionId}`);
};
const post = (scenariocondition) => {
    return Api().post('scenariocondition', scenariocondition);
};
const deleteItem = (scenarioconditionId) => {
    return Api().delete(`scenariocondition/${scenarioconditionId}`);
};
const put = (scenariocondition) => {
    return Api().put(`scenariocondition/${scenariocondition.id}`, scenariocondition);
};

export default {
    index,
    getScenarioConditions,
    getConditionScenarios,
    post,
    deleteItem,
    put
};
