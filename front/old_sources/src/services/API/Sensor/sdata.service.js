import Api from '../use-axios'

const index = (search) => {
    return Api().get('sdata', {
        params: {
            search: search
        }
    })
}
const post = (sdata) => {
        return Api().post('sdata', sdata)
}
const getSData = (sdataId) => {
    return Api().get(`sdata/${sdataId}`)
}
const put = (sdata) => {
    return Api().put(`sdata/${sdata.id}`, sdata)
}
const deleteItem = (sdataId) => {
    return Api().delete(`sdata/${sdataId}`)
}

export default {
    index,
    post,
    getSData,
    put,
    deleteItem
};