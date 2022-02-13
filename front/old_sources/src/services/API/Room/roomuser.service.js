import Api from '../use-axios'

const index = () => {
    return Api().get('roomuser');
}
const getRoomUsers = (roomId) => {
    return Api().get(`roomusers/${roomId}`);
}
const getUserRooms = (userId) => {
    return Api().get(`userrooms/${userId}`);
}
const post = (roomuser) => {
    return Api().post('roomuser', roomuser);
}
const deleteItem = (roomuserId) => {
    return Api().delete(`roomuser/${roomuserId}`);
}
const put = (roomuser) => {
    return Api().put(`roomuser/${roomuser.id}`, roomuser)
}

export default {
    index,
    getRoomUsers,
    getUserRooms,
    post,
    deleteItem,
    put
}