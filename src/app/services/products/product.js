import { axiosInstance } from "@/app/axios/axios";
export const addProduct = async(data) => {
    console.log(data)
    try {
        const res = await axiosInstance.post("/productCreate", data);
        return res
    } catch (error) {
        return error
    }
}
export const getProducts = async () =>{
    try {
        const res = await axiosInstance.get("/getProducts");
        return res
    } catch (error) {
        return error
    }
}

export const editProduct = async(data, id) => {
    try {
        const res = await axiosInstance.put(`/ProductUpdate/${id}`, data);
        return res
    } catch (error) {
        return error
    }
}

export const delProduct = async(id) => {
    try {
        const res = await axiosInstance.delete(`/ProductDelete/${id}`);
        return res
    } catch (error) {
        return error
    }
}

export const getProductDetailsById = async(id) => {
    try {
        const res = await axiosInstance.get(`/getProductDetails/${id}`);
        return res
    } catch (error) {
        return error
    }
}

export const searchProduct = async (query)=>{
    console.log(query)
    try {
        const res = await axiosInstance.get(`/searchProducts/${query}`);
        return res
    } catch (error) {
        return error
    }
}

export const getCategories = async()=>{
    try {
        const res = await axiosInstance.get("/getProductsCategories");
        return res
    } catch (error) {
        return error
    }
}