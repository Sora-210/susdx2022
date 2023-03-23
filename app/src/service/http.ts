import axios, { type AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
    baseURL: "http://localhost:2222",
    headers: {
        "Content-type": "application/json"
    }
})
export default apiClient;
