import Api from '../use-axios'

const index = () => {
    return Api().get('scenariouser');
}
const getScenarioUsers = (scnearioId) => {
    return Api().get(`scenariousers/${scnearioId}`);
}
const getUserScenarios = (userId) => {
    return Api().get(`userscenarios/${userId}`);
}
const post = (scenariouser) => {
    return Api().post('scenariouser', scenariouser);
}
const deleteItem = (scenariouserId) => {
    return Api().delete(`scenariouser/${scenariouserId}`);
}
const put = (scenariouser) => {
    return Api().put(`scenariouser/${scenariouser.id}`, scenariouser)
}

export default {
    index,
    getScenarioUsers,
    getUserScenarios,
    post,
    deleteItem,
    put
}