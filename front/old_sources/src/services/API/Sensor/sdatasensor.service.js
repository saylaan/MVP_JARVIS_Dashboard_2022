import Api from '@/services/use-axios'

const index = () => {
    return Api().get('sdatavalsensor');
}
const getSDatavalSensors = (sdatavalId) => {
    return Api().get(`sdatavalsensors/${sdatavalId}`);
}
const getSensorSDatavals = (sensorId) => {
    return Api().get(`sensorsdatavals/${sensorId}`);
}
const post = (sdatavalsensor) => {
    return Api().post('sdatavalsensor', sdatavalsensor);
}
const deleteItem = (sdatavalsensorId) => {
    return Api().delete(`sdatavalsensor/${sdatavalsensorId}`);
}
const put = (sdatavalsensor) => {
    return Api().put(`sdatavalsensor/${sdatavalsensor.id}`, sdatavalsensor)
}

export default {
    index,
    getSDatavalSensors,
    getSensorSDatavals,
    post,
    deleteItem,
    put
}