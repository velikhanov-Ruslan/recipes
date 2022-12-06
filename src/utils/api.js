import axios from "axios";

axios.defaults.baseURL = "https://638dca13aefc455fb2ac04c7.mockapi.io";

export default class api {
    static post(url, data = {}) {
        return axios.post(url, data);
    }

    static get(url, data = {}) {
        return axios.get(url, {
            params: data,
        });
    }
}