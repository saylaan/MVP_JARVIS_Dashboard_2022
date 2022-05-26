import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';
import authHeader from './authentification/auth-header';
import axiosMock from '../mocks/axiosMock';

const longCache = setupCache({
    maxAge: 60 * 60 * 1000,
    exclude: {
        query: false,
        // methods: ['post', 'patch', 'put', 'delete'], // check if its blocking all requesting
        paths: []
    }
});

const shortCache = setupCache({
    maxAge: 60,
    exclude: {
        query: false,
        // methods: ['post', 'patch', 'put', 'delete'], // check if its blocking all requesting
        paths: []
    }
});

const axiosBack = () => {
    return axios.create({
        adapter: longCache.adapter,
        baseURL: `${process.env.REACT_APP_BFF_HOSTNAME}`, // don't forget to change in backend
        headers: authHeader(),
        timeout: 30000,
        timeoutErrorMessage: 'ECONNTIMEOUT'
    });
};

export const Api = () => {
    return axios.create({
        adapter: shortCache.adapter, // no need for this project
        baseURL: `${process.env.REACT_APP_BFF_HOSTNAME}`, // don't forget to change in backend
        headers: authHeader(),
        timeout: 30000,
        timeoutErrorMessage: 'ECONNTIMEOUT'
    });
};

export const Model = () => {
    return axios.create({
        adapter: shortCache.adapter, // no need for this project
        baseURL: `${process.env.REACT_APP_MODEL_HOSTNAME}`, // don't forget to change in backend
        // headers: "Access-Control-Allow-Origin: *",
        timeout: 30000,
        timeoutErrorMessage: 'ECONNTIMEOUT'
    });
};

export const axiosInstance = /^true$/i.test(
    process.env.REACT_APP_USE_MOCKS || 'false'
)
    ? axiosMock
    : axiosBack;
