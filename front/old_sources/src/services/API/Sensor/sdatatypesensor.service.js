import Api from '../use-axios'

const index = () => {
    return Api().get('sdatatypesensor');
}
const getSDatatypeSensors = (sdatatypeId) => {
    return Api().get(`sdatatypesensors/${sdatatypeId}`);
}
const getSensorSDatatypes = (sensorId) => {
    return Api().get(`sensorsdatatypes/${sensorId}`);
}
const post = (sdatatypesensor) => {
    return Api().post('sdatatypesensor', sdatatypesensor);
}
const deleteItem = (sdatatypesensorId) => {
    return Api().delete(`sdatatypesensor/${sdatatypesensorId}`);
}
const put = (sdatatypesensor) => {
    return Api().put(`sdatatypesensor/${sdatatypesensor.id}`, sdatatypesensor)
}

export default {
    index,
    getSDatatypeSensors,
    getSensorSDatatypes,
    post,
    deleteItem,
    put
}