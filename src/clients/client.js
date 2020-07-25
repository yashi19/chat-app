const axios = require("axios");

export async function get(url, options) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch(error) {
        console.log(error);
    }
}

export async function post(url, body) {
    try {
        const response = await axios.post(url,body);
        return response.data;
    } catch(error) {
        console.log(error);
    }

}

export async function put(url, body) {
    try {
        const response = await axios.put(url,body);
        return response.data;
    } catch(error) {
        console.log(error);
    }
}

