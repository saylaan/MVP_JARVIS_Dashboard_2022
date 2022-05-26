import { Api } from '../axios';

const index = () => {
    return Api().get('roomiot');
};
const getRoomIoTs = (roomId) => {
    return Api().get(`roomiots/${roomId}`);
};
const getIoTRooms = (iotId) => {
    return Api().get(`iotrooms/${iotId}`);
};
const post = (roomiot) => {
    return Api().post('roomiot', roomiot);
};
const deleteItem = (roomiotId) => {
    return Api().delete(`roomiot/${roomiotId}`);
};
const put = (roomiot) => {
    return Api().put(`roomiot/${roomiot.id}`, roomiot);
};

export default {
    index,
    getRoomIoTs,
    getIoTRooms,
    post,
    deleteItem,
    put
};
