import Api from '../use-axios';

const register = (credentials) => {
    return Api().post('register', credentials)
}
const login = (credentials) => {
    return Api().post('signin', credentials).then((response) => {
    if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data))
    }

    return response.data
    })
    .catch(e => {
        console.log(e)
    })
}
const logout = () => {
    localStorage.removeItem("user");
}
const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
}

export {
    login,
    logout,
    getCurrentUser
}