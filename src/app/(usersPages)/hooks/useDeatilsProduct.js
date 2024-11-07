import { getProductDetailsById } from '@/app/services/products/product';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from '@/app/redux/loader/loaderSlice';
export default function useDeatilsProduct(productId){
    const dispatch = useDispatch();
    const [detailProduct, setDetailProduct] = useState({});
    useEffect(()=>{
        dispatch(showLoader());
        const fetchProduct = async()=>{
            try {
                const res = await getProductDetailsById(productId);
                dispatch(hideLoader());
                if(res.status === 200){
                setDetailProduct(res.data.data);
                }  
            } catch (error) {
                console.log(error);  
            }finally{
                dispatch(hideLoader());
            }  
            }
        fetchProduct();
    },[productId])
    return{
        detailProduct,
    }
}
