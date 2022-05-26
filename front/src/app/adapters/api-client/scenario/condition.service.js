import { Api } from '../axios';

const index = (search) => {
    return Api().get('condition', {
        params: {
            search: search
        }
    });
};
const post = (condition) => {
    return Api().post('condition', condition);
};
const getCondition = (conditionId) => {
    return Api().get(`condition/${conditionId}`);
};
const put = (condition) => {
    return Api().put(`condition/${condition.id}`, condition);
};
const deleteItem = (conditionId) => {
    return Api().delete(`condition/${conditionId}`);
};

export default {
    index,
    post,
    getCondition,
    put,
    deleteItem
};
