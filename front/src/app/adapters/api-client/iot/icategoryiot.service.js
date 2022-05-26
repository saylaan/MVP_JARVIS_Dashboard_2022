import { Api } from '../axios';

const index = () => {
    return Api().get('icategoryiot');
};
const getICategoryIoTs = (dcategoryId) => {
    return Api().get(`icategoryiots/${dcategoryId}`);
};
const getIoTICategories = (iotId) => {
    return Api().get(`ioticategories/${iotId}`);
};
const post = (icategoryiot) => {
    return Api().post('icategoryiot', icategoryiot);
};
const deleteItem = (icategoryiotId) => {
    return Api().delete(`icategoryiot/${icategoryiotId}`);
};
const put = (icategoryiot) => {
    return Api().put(`icategoryiot/${icategoryiot.id}`, icategoryiot);
};

export default {
    index,
    getICategoryIoTs,
    getIoTICategories,
    post,
    deleteItem,
    put
};
