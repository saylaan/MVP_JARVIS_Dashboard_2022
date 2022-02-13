import Api from '../use-axios'

const index = () => {
    return Api().get('dcategorydevice');
}
const getDCategoryDevices = (dcategoryId) => {
    return Api().get(`dcategorydevices/${dcategoryId}`);
}
const getDeviceDCategories = (deviceId) => {
    return Api().get(`devicedcategories/${deviceId}`);
}
const post = (dcategorydevice) => {
    return Api().post('dcategorydevice', dcategorydevice);
}
const deleteItem = (dcategorydeviceId) => {
    return Api().delete(`dcategorydevice/${dcategorydeviceId}`);
}
const put = (dcategorydevice) => {
    return Api().put(`dcategorydevice/${dcategorydevice.id}`, dcategorydevice)
}

export default {
    index,
    getDCategoryDevices,
    getDeviceDCategories,
    post,
    deleteItem,
    put
}