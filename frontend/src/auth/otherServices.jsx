import axios from 'axios'
const API_URL_ADMIN = `/api/admin/`;
const API_URL = `/api/users/`;



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
const createTrans = async (token, transData) => {
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

export const aotherService = {
    allUsers,
    delUser,
    getTransAdmin,
    getTransUser,
    createTrans,
    confirmTrans,
};