import { Api } from '../axios';

const index = () => {
    return Api().get('scenarioaction');
};
const getScenarioActions = (scenarioId) => {
    return Api().get(`scenarioactions/${scenarioId}`);
};
const getActionScenarios = (actionId) => {
    return Api().get(`iotrooms/${actionId}`);
};
const post = (scenarioaction) => {
    return Api().post('scenarioaction', scenarioaction);
};
const deleteItem = (scenarioactionId) => {
    return Api().delete(`scenarioaction/${scenarioactionId}`);
};
const put = (scenarioaction) => {
    return Api().put(`scenarioaction/${scenarioaction.id}`, scenarioaction);
};

export default {
    index,
    getScenarioActions,
    getActionScenarios,
    post,
    deleteItem,
    put
};
