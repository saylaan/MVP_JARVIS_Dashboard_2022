import { Api } from '../axios';

const index = (search) => {
    return Api().get('iot', {
        params: {
            search: search
        }
    });
};
const post = (iot) => {
    return Api().post('iot', iot);
};
const getIoT = (iotId) => {
    return Api().get(`iot/${iotId}`);
};
const put = (iot) => {
    return Api().put(`iot/${iot.id}`, iot);
};
const deleteItem = (iotId) => {
    return Api().delete(`iot/${iotId}`);
};

export default {
    index,
    post,
    getIoT,
    put,
    deleteItem
};
