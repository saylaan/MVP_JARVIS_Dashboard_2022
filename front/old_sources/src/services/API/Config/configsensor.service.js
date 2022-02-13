import Api from '../use-axios'

const index = () => {
    return Api().get('configsensor');
}
const getConfigSensors = (configId) => {
    return Api().get(`configsensors/${configId}`);
}
const getSensorConfigs = (sensorId) => {
    return Api().get(`sensorconfigs/${sensorId}`);
}
const post = (configsensor) => {
    return Api().post('configsensor', configsensor);
}
const deleteItem = (configsensorId) => {
    return Api().delete(`configsensor/${configsensorId}`);
}
const put = (configsensor) => {
    return Api().put(`configsensor/${configsensor.id}`, configsensor)
}

export default {
    index,
    getConfigSensors,
    getSensorConfigs,
    post,
    deleteItem,
    put
}

