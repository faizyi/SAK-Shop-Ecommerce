import { getProductDetailsById } from '@/app/services/products/product';
import React, { useEffect, useState } from 'react'

export default function useDeatilsProduct(productId){
    const [detailProduct, setDetailProduct] = useState({});
    console.log(productId)
    useEffect(()=>{
        const fetchProduct = async()=>{
            const res = await getProductDetailsById(productId);
            if(res.status === 200){
            console.log(res.data.data)
            setDetailProduct(res.data.data);
            }
        }
        fetchProduct();
    },[productId])
    return{
        detailProduct,
    }
}
