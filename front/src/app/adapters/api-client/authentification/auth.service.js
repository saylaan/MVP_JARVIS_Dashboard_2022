// import { asyncPost } from '../utils';

// export function authApi() {
//     return Object.freeze({
//         login: (credentials) => asyncPost(`${encodeURI('signin')}`, credentials).the((response) => {
//             if (response.data.token) {
//                 localStorage.setItem("user", JSON.stringify(response.data));
//             }
//             return (response.data);
//         }),
//         register: (credentials) => asyncPost(`${encodeURI('register')}`, credentials),
//         logout: () => localStorage.removeItem("user"),
//         getCurrentUser: () => JSON.parse(localStorage.getItem("user"))
//     })
// }

import { Api } from '../axios';

const register = (credentials) => {
    return Api().post('register', credentials);
};
const signin = (credentials) => {
    return Api()
        .post('signin', credentials)
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }
            return response.data;
        })
        .catch((e) => {
            console.log(e);
        });
};
const signout = () => {
    localStorage.removeItem('user');
};
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('user'));
};

export default {
    signin,
    signout,
    getCurrentUser
};
