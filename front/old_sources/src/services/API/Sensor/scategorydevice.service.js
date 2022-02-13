import Api from '../use-axios'

const index = () => {
    return Api().get('scategorydevice');
}
const getSCategoryDevices = (scategoryId) => {
    return Api().get(`scategorydevices/${scategoryId}`);
}
const getDeviceSCategories = (deviceId) => {
    return Api().get(`devicescategories/${deviceId}`);
}
const post = (scategorydevice) => {
    return Api().post('scategorydevice', scategorydevice);
}
const deleteItem = (scategorydeviceId) => {
    return Api().delete(`scategorydevice/${scategorydeviceId}`);
}
const put = (scategorydevice) => {
    return Api().put(`scategorydevice/${scategorydevice.id}`, scategorydevice)
}

export default {
    index,
    getSCategoryDevices,
    getDeviceSCategories,
    post,
    deleteItem,
    put
}