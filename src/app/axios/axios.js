import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://sakbackend.vercel.app/api",
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