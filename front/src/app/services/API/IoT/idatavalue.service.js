import Api from '../use-axios'

const index = (search) => {
    return Api().get('idatavalue', {
        params: {
            search: search
        }
    })
}
const post = (idatavalue) => {
        return Api().post('idatavalue', idatavalue)
}
const getIDatavalue = (idatavalueId) => {
    return Api().get(`idatavalue/${idatavalueId}`)
}
const put = (idatavalue) => {
    return Api().put(`idatavalue/${idatavalue.id}`, idatavalue)
}
const deleteItem = (idatavalueId) => {
    return Api().delete(`idatavalue/${idatavalueId}`)
}

export default {
    index,
    post,
    getIDatavalue,
    put,
    deleteItem
};