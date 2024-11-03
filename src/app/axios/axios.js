import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://sakbackend-p4jg46vrg-faizyis-projects.vercel.app",
    headers: {
        "Content-Type": "application/json",
    },
    withCredentials: true,
});

axiosInstance.interceptors.response.use(
    (config) =>{
        return (config)
    },
    (error) => {
        return Promise.reject(error);
    }
)
axiosInstance.interceptors.request.use(
    (response) =>{
        return (response)
    },
    (error) => {
        return Promise.reject(error);
    }
)