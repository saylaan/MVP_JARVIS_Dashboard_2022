// import { authApi } from './authentification/auth.service';
import { userApi } from './user/user.service';

export function apiClient() {
    return Object.freeze({
        // method freezes an object. A frozen object can no longer be changed
        // auth: authApi(),
        user: userApi()
    });
}

export function Api() {
    return Object.freeze({});
}
/*
call in the page as : "import { apiClient } from '../../adapters/api-client";
use it like :
const resp = await apiClient().name_function.name_request(variable)
dispatch(updateStore({ variable: resp.headers['...']})) // update the store
*/
