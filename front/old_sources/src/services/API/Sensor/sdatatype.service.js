import Api from '../use-axios'

const index = (search) => {
    return Api().get('sdatatype', {
        params: {
            search: search
        }
    })
}
const post = (sdatatype) => {
        return Api().post('sdatatype', sdatatype)
}
const getSDatatype = (sdatatypeId) => {
    return Api().get(`sdatatype/${sdatatypeId}`)
}
const put = (sdatatype) => {
    return Api().put(`sdatatype/${sdatatype.id}`, sdatatype)
}
const deleteItem = (sdatatypeId) => {
    return Api().delete(`sdatatype/${sdatatypeId}`)
}

export default {
    index,
    post,
    getSDatatype,
    put,
    deleteItem
};