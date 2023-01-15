import axios from 'axios'
export let uri = 'http://localhost:8000'
const API_URL = uri+`/api/users/`;
const API_URL_ADMIN = uri+`/api/admin/`;
// Change Befor Production

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
const logoutAdmin = () => {
    localStorage.removeItem('admin')
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

// Admin login
const adminLog = async (adminData) => {
    const res = await axios.post(API_URL_ADMIN + 'signin', adminData);

    if (res.data) {
        localStorage.setItem("admin", JSON.stringify(res.data));
    }
    return res.data;
} 
// Loged in admin
const getLogedInAdmin = () => {
    let logedUser = JSON.parse(localStorage.getItem("admin"));
    return logedUser;
};

export const authService = {
    register,
    login,
    logout,
    getLogedInUser,
    getMe,
    adminLog,
    getLogedInAdmin,
    logoutAdmin
};