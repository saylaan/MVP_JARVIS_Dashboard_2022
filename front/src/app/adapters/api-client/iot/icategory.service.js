import { Api } from '../axios';

const index = (search) => {
    return Api().get('icategory', {
        params: {
            search: search
        }
    });
};
const post = (icategory) => {
    return Api().post('icategory', icategory);
};
const getICategory = (icategoryId) => {
    return Api().get(`icategory/${icategoryId}`);
};
const put = (icategory) => {
    return Api().put(`icategory/${icategory.id}`, icategory);
};
const deleteItem = (icategoryId) => {
    return Api().delete(`icategory/${icategoryId}`);
};

export default {
    index,
    post,
    getICategory,
    put,
    deleteItem
};
