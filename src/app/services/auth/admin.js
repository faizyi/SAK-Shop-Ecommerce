import { axiosInstance } from "@/app/axios/axios";
export const adminLogin = async (data) => {
    try {
        const res = await axiosInstance.post("/admin/login", data);
        console.log(res)
        return res
    } catch (error) {
        return error
    }
}