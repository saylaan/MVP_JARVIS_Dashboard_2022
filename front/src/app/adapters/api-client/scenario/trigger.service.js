import { Api } from '../axios';

const index = (search) => {
    return Api().get('trigger', {
        params: {
            search: search
        }
    });
};
const post = (trigger) => {
    return Api().post('trigger', trigger);
};
const getTrigger = (triggerId) => {
    return Api().get(`trigger/${triggerId}`);
};
const put = (trigger) => {
    return Api().put(`trigger/${trigger.id}`, trigger);
};
const deleteItem = (triggerId) => {
    return Api().delete(`trigger/${triggerId}`);
};

export default {
    index,
    post,
    getTrigger,
    put,
    deleteItem
};
