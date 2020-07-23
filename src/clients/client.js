const axios = require("axios");

export async function get(url, options) {
    const response = await call(url, 'GET', options);
    return response.data;
}

export async function post(url, options) {
    const response = await call(url, 'POST', options);
    return response.data;
}

export async function put(url, options) {
    const response = await call(url, 'PUT', options);
    return response.data;
}

async function call(url, method, options = {}) {
    try {
        return await axios({url, ...options});
    } catch(e) {
        console.log(e);
    }
}

