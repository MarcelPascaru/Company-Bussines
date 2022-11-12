import axios from "axios";

const httpRequest = axios.create({
    baseURL: 'http://localhost:8000/api',
    headers: {
        Accept: "application/json;charset=UTF-8",
        "Content-Type": "application/json;charset=UTF-8",
    },
    timeout: 0,
});

export default httpRequest;