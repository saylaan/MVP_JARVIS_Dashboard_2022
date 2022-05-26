import { axiosInstance } from './axios';

export const asyncGet = (url, config) => axiosInstance.get(url, config).then((r) => (r.data ? r.data : {}));

export const asyncPost = (url, data) => axiosInstance.post(url, data).then((r) => ({ headers: r.headers, statusCode: r.status }));

export const asyncPut = (url, data) => axiosInstance.put(url, data).then((r) => ({ headers: r.headers, statusCode: r.status }));

// export const asyncPatch = (url, data) =>
//     axiosInstance.patch(url, data).then((r) => ({ headers: r.headers, statusCode: r.status }));

export const asyncDelete = (url, config) => axiosInstance.delete(url, config).then((r) => (r.data ? r.data : {}));
