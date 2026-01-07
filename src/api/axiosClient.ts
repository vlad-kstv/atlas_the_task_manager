import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://localhost:8080/api/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})

export default axiosClient;