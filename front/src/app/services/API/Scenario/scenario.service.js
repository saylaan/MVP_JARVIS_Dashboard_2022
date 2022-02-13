import Api from '../use-axios'

const index = (search) => {
    return Api().get('scenario', {
        params: {
            search: search
        }
    })
}
const post = (scenario) => {
        return Api().post('scenario', scenario)
}
const getScenario = (scenarioId) => {
    return Api().get(`scenario/${scenarioId}`)
}
const put = (scenario) => {
    return Api().put(`scenario/${scenario.id}`, scenario)
}
const deleteItem = (scenarioId) => {
    return Api().delete(`scenario/${scenarioId}`)
}

export default {
    index,
    post,
    getScenario,
    put,
    deleteItem
};