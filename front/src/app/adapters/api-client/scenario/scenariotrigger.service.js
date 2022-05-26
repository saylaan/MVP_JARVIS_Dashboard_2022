import { Api } from '../axios';

const index = () => {
    return Api().get('scenariotrigger');
};
const getScenarioTriggers = (scenarioId) => {
    return Api().get(`scenariotriggers/${scenarioId}`);
};
const getTriggerScenarios = (triggerId) => {
    return Api().get(`iotrooms/${triggerId}`);
};
const post = (scenariotrigger) => {
    return Api().post('scenariotrigger', scenariotrigger);
};
const deleteItem = (scenariotriggerId) => {
    return Api().delete(`scenariotrigger/${scenariotriggerId}`);
};
const put = (scenariotrigger) => {
    return Api().put(`scenariotrigger/${scenariotrigger.id}`, scenariotrigger);
};

export default {
    index,
    getScenarioTriggers,
    getTriggerScenarios,
    post,
    deleteItem,
    put
};
