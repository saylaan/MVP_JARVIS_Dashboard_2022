import Api from '../use-axios'

const index = (search) => {
    return Api().get('iot', {
        params: {
            search: search
        }
    })
}
const getAll = () => {
    return Api().get('iot')
}
const post = (iot) => {
        return Api().post('iot', iot)
}
const getIoT = (iotId) => {
    return Api().get(`iot/${iotId}`)
}
const put = (iot) => {
    return Api().put(`iot/${iot.id}`, iot)
}
const deleteItem = (iotId) => {
    return Api().delete(`iot/${iotId}`)
}

export default {
    index,
    getAll,
    post,
    getIoT,
    put,
    deleteItem
};