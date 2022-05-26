import { asyncGet, asyncPost, asyncPut, asyncDelete } from '../utils';
const userPath = 'users';

export function userApi() {
    return Object.freeze({
        getUsers: () => asyncGet(`${encodeURI(`${userPath}`)}`),
        getUser: (userId) => asyncGet(`${encodeURI(`${userPath}/${userId}`)}`),
        addUser: (user) => asyncPost(`${encodeURI(`${userPath}`)}`, user),
        updateUser: (user) => asyncPut(`${encodeURI(`${userPath}/${user.id}`)}`, user),
        deleteUser: (userId) => asyncDelete(`${encodeURI(`${userPath}/${userId}`)}`)
    });
}

// It's not certain than encoreURI works, if problem, just take it off
