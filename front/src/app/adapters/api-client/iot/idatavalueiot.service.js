import { Api } from '../axios';

const index = () => {
    return Api().get('idatavalueiot');
};
const getIDatavalueIoTs = (idatavalueId) => {
    return Api().get(`idatavalueiots/${idatavalueId}`);
};
const getIoTIDatavalue = (iotId) => {
    return Api().get(`iotidatavalues/${iotId}`);
};
const post = (idatavalueiot) => {
    return Api().post('idatavalueiot', idatavalueiot);
};
const deleteItem = (idatavalueiotId) => {
    return Api().delete(`idatavalueiot/${idatavalueiotId}`);
};
const put = (idatavalueiot) => {
    return Api().put(`idatavalueiot/${idatavalueiot.id}`, idatavalueiot);
};

export default {
    index,
    getIDatavalueIoTs,
    getIoTIDatavalue,
    post,
    deleteItem,
    put
};
