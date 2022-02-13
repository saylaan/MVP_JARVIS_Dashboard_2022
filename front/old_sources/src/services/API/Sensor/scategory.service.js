import Api from '../use-axios'

const index = (search) => {
    return Api().get('scategory', {
        params: {
            search: search
        }
    })
}
const post = (scategory) => {
        return Api().post('scategory', scategory)
}
const getSCategory = (scategoryId) => {
    return Api().get(`scategory/${scategoryId}`)
}
const put = (scategory) => {
    return Api().put(`scategory/${scategory.id}`, scategory)
}
const deleteItem = (scategoryId) => {
    return Api().delete(`scategory/${scategoryId}`)
}

export default {
    index,
    post,
    getSCategory,
    put,
    deleteItem
};