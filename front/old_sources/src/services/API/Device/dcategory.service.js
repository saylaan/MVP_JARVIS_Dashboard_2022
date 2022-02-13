import Api from '../use-axios'

const index = (search) => {
    return Api().get('dcategory', {
        params: {
            search: search
        }
    })
}
const post = (dcategory) => {
        return Api().post('dcategory', dcategory)
}
const getDCategory = (dcategoryId) => {
    return Api().get(`dcategory/${dcategoryId}`)
}
const put = (dcategory) => {
    return Api().put(`dcategory/${dcategory.id}`, dcategory)
}
const deleteItem = (dcategoryId) => {
    return Api().delete(`dcategory/${dcategoryId}`)
}

export default {
    index,
    post,
    getDCategory,
    put,
    deleteItem
};