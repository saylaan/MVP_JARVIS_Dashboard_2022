import Api from '../use-axios'

const index = (search) => {
    return Api().get('sensor', {
        params: {
            search: search
        }
    })
}
const post = (sensor) => {
        return Api().post('sensor', sensor)
}
const getSensor = (sensorId) => {
    return Api().get(`sensor/${sensorId}`)
}
const put = (sensor) => {
    return Api().put(`sensor/${sensor.id}`, sensor)
}
const deleteItem = (sensorId) => {
    return Api().delete(`sensor/${sensorId}`)
}

export default {
    index,
    post,
    getSensor,
    put,
    deleteItem
};