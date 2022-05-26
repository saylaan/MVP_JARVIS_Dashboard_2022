import { Api } from '../axios';

const index = (search) => {
    return Api().get('room', {
        params: {
            search: search
        }
    });
};
const post = (room) => {
    return Api().post('room', room);
};
const getRoom = (roomId) => {
    return Api().get(`room/${roomId}`);
};
const put = (room) => {
    return Api().put(`room/${room.id}`, room);
};
const deleteItem = (roomId) => {
    return Api().delete(`room/${roomId}`);
};

export default {
    index,
    post,
    getRoom,
    put,
    deleteItem
};
