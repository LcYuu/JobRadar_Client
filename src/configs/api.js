import axios from "axios";

export const API_BASE_URL = process.env.API_BASE_URL;
export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});

// Interceptor để luôn lấy token mới từ sessionStorage
api.interceptors.request.use(
    (config) => {
        const jwt = sessionStorage.getItem("jwt");
        if (jwt) {
            config.headers["Authorization"] = `Bearer ${jwt}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);
