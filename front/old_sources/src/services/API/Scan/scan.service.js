import Api from '../use-axios'

const index = (search) => {
    return Api().get('scan', {
        params: {
            search: search
        }
    })
}
const post = (scan) => {
        return Api().post('scan', scan)
}
const getScan = (scanId) => {
    return Api().get(`scan/${scanId}`)
}
const put = (scan) => {
    return Api().put(`scan/${scan.id}`, scan)
}
const deleteItem = (scanId) => {
    return Api().delete(`scan/${scanId}`)
}

export default {
    index,
    post,
    getScan,
    put,
    deleteItem
};