import axios from 'axios'

const API_URL = `/api/users/`;
const API_URL_ADMIN = `/api/admin/`;

// register user
const register = async (userData) => {
    const res = await axios.post(API_URL+'signup', userData)

    if (res.data) {
        localStorage.setItem('user', JSON.stringify(res.data))
    }

    return res.data
}

// login User
const login = async (userData) => {
    const res = await axios.post(API_URL + 'signin', userData);

    if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
    }
    return res.data;
};

// log Out
const logout = () => {
    localStorage.removeItem('user')
}


// get me
const getMe = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const res = await axios.get(API_URL + "me", config)

    return res.data;
};

// Loged in user
const getLogedInUser = () => {
    let logedUser = JSON.parse(localStorage.getItem("user"));
    return logedUser;
};

export const authService = {
    register,
    login,
    logout,
    getLogedInUser,
    getMe,
};