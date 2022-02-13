import Api from '../use-axios'

const index = () => {
    return Api().get('roomsensor');
}
const getRoomSensors = (roomId) => {
    return Api().get(`roomsensors/${roomId}`);
}
const getSensorRooms = (sensorId) => {
    return Api().get(`sensorrooms/${sensorId}`);
}
const post = (roomsensor) => {
    return Api().post('roomsensor', roomsensor);
}
const deleteItem = (roomsensorId) => {
    return Api().delete(`roomsensor/${roomsensorId}`);
}
const put = (roomsensor) => {
    return Api().put(`roomsensor/${roomsensor.id}`, roomsensor)
}

export default {
    index,
    getRoomSensors,
    getSensorRooms,
    post,
    deleteItem,
    put
}