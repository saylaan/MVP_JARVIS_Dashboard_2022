import Api from '../use-axios'

const index = (search) => {
    return Api().get('config', {
        params: {
            search: search
        }
    })
}
const post = (config) => {
        return Api().post('config', config)
}
const getConfig = (configId) => {
    return Api().get(`config/${configId}`)
}
const put = (config) => {
    return Api().put(`config/${config.id}`, config)
}
const deleteItem = (configId) => {
    return Api().delete(`config/${configId}`)
}

export default {
    index,
    post,
    getConfig,
    put,
    deleteItem
};