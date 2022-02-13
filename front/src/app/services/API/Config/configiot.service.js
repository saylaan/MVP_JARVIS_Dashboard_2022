import Api from '../use-axios'

const index = () => {
    return Api().get('configiot');
}
const getConfigIoTs = (configId) => {
    return Api().get(`configiots/${configId}`);
}
const getIoTConfigs = (iotId) => {
    return Api().get(`iotconfigs/${iotId}`);
}
const post = (configiot) => {
    return Api().post('configiot', configiot);
}
const deleteItem = (configiotId) => {
    return Api().delete(`configiot/${configiotId}`);
}
const put = (configiot) => {
    return Api().put(`configiot/${configiot.id}`, configiot)
}

export default {
    index,
    getConfigIoTs,
    getIoTConfigs,
    post,
    deleteItem,
    put
}
