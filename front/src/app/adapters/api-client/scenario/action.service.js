import { Api } from '../axios';

const index = (search) => {
    return Api().get('action', {
        params: {
            search: search
        }
    });
};
const post = (action) => {
    return Api().post('action', action);
};
const getAction = (actionId) => {
    return Api().get(`action/${actionId}`);
};
const put = (action) => {
    return Api().put(`action/${action.id}`, action);
};
const deleteItem = (actionId) => {
    return Api().delete(`action/${actionId}`);
};

export default {
    index,
    post,
    getAction,
    put,
    deleteItem
};
