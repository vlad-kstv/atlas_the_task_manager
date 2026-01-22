import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://localhost:8080/api',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
})

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API error: " + error.response?.data || error.message)

        if(error.response?.status == 401) {
            // prob expired token
        }

        return Promise.reject(error);
    }
)
export default axiosClient;