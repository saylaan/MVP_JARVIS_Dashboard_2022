import Api from '../use-axios'

const index = () => {
    return Api().get('configdevice');
}
const getConfigDevices = (configId) => {
    return Api().get(`configdevices/${configId}`);
}
const getDeviceConfigs = (deviceId) => {
    return Api().get(`deviceconfigs/${deviceId}`);
}
const post = (configdevice) => {
    return Api().post('configdevice', configdevice);
}
const deleteItem = (configdeviceId) => {
    return Api().delete(`configdevice/${configdeviceId}`);
}
const put = (configdevice) => {
    return Api().put(`configdevice/${configdevice.id}`, configdevice)
}

export default {
    index,
    getConfigDevices,
    getDeviceConfigs,
    post,
    deleteItem,
    put
}
