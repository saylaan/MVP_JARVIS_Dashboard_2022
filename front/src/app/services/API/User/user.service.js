import Api from '../useAxios'

const index = (search) => {
    return Api().get('users', {
        params: {
            search: search
        }
    })
}
const post = (user) => {
        return Api().post('users', user)
}
const getUser = (userId) => {
    return Api().get(`users/${userId}`)
}
const put = (user) => {
    return Api().put(`users/${user.id}`, user)
}
const deleteItem = (userId) => {
    return Api().delete(`users/${userId}`)
}

export default {
    // index,
    // post,
    getUser,
    // put,
    // deleteItem
};