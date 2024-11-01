"use client"
import React, { useEffect, useState } from 'react'
import useGetProduct from './useGetProduct'
import { useDispatch} from "react-redux";
import { setProducts } from '@/redux/product/productSlice';
export default function useSearchHook() {
    const dispatch = useDispatch();
    const { allProducts, updateAllProducts } = useGetProduct();
    const [query, setQuery] = useState('');
    useEffect(() => {
        if(allProducts){
            dispatch(setProducts(allProducts))
        }
    }, [allProducts]);

    const updateFilteredProducts = (updatedProducts) => {
        updateAllProducts(updatedProducts);
        if(query.length > 0){
            const updatedProduct = updatedProducts.filter((product) =>
            product.productName.toLowerCase().includes(query.toLowerCase()))
            dispatch(setProducts(updatedProduct));
        }else{
            dispatch(setProducts(updatedProducts));
        }
    };
    
    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setQuery(value);
        if(value.length > 0){
            const serachProduct = allProducts ? allProducts.filter(product => product.productName.toLowerCase().includes(value.toLowerCase()))
            : [];
            dispatch(setProducts(serachProduct));
        }else{
            dispatch(setProducts(allProducts));
        }
    }
  return {
    query,
    handleSearch,
    updateFilteredProducts
  }
}
