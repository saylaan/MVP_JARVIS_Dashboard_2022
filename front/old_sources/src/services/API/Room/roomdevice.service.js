import Api from '../use-axios'

const index = () => {
    return Api().get('roomdevice');
}
const getRoomDevices = (roomId) => {
    return Api().get(`roomdevices/${roomId}`);
}
const getDeviceRooms = (deviceId) => {
    return Api().get(`devicerooms/${deviceId}`);
}
const post = (roomdevice) => {
    return Api().post('roomdevice', roomdevice);
}
const deleteItem = (roomdeviceId) => {
    return Api().delete(`roomdevice/${roomdeviceId}`);
}
const put = (roomdevice) => {
    return Api().put(`roomdevice/${roomdevice.id}`, roomdevice)
}

export default {
    index,
    getRoomDevices,
    getDeviceRooms,
    post,
    deleteItem,
    put
}