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

const delUser = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const res = await axios.get(API_URL_ADMIN + "users", config)

    return res.data;
};


export const aotherService = {
    allUsers
};