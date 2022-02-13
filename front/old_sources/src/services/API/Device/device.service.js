import Api from '../use-axios'

const index = (search) => {
    return Api().get('device', {
        params: {
            search: search
        }
    })
}
const getAll = () => {
    return Api().get('device')
}
const post = (device) => {
        return Api().post('device', device)
}
const getDevice = (deviceId) => {
    return Api().get(`device/${deviceId}`)
}
const put = (device) => {
    return Api().put(`device/${device.id}`, device)
}
const deleteItem = (deviceId) => {
    return Api().delete(`device/${deviceId}`)
}

export default {
    index,
    getAll,
    post,
    getDevice,
    put,
    deleteItem
};