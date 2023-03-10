import axios from 'axios'
import { uri } from './authService';
const API_URL_ADMIN = uri+`/api/admin/`;
const API_URL = uri+`/api/users/`;



const updatepackage = async (token, data) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const res = await axios.post(API_URL + "package", data ,config)

    return res.data;
};

const allUsers = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const res = await axios.get(API_URL_ADMIN + "users", config)

    return res.data;
};

const delUser = async (deldata, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        }
    };
    const res = await axios.post(API_URL_ADMIN + "del/user", deldata,config)

    return res.data;
};

// Admin all trans
const getTransAdmin = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const res = await axios.get(API_URL_ADMIN + "trans", config)

    return res.data;
};


// User all trans
const getTransUser = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const res = await axios.get(API_URL + "trans/me", config)

    return res.data;
};

// User create trans
const createTrans = async (transData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const res = await axios.post(API_URL + "trans/new", transData, config)

    return res.data;
};


// User confirm trans Admin
const confirmTrans = async (token, orderData) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const res = await axios.post(API_URL_ADMIN + "trans/confirm", orderData, config)

    return res.data;
};
// User confirm trans Admin
const updateTrans = async (token, updateData) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const res = await axios.post(API_URL_ADMIN + "trans/update", updateData, config)

    return res.data;
};

export const aotherService = {
    allUsers,
    delUser,
    getTransAdmin,
    getTransUser,
    createTrans,
    confirmTrans,
    updatepackage,
    updateTrans
};