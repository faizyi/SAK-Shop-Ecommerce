"use client"
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setEditProduct } from '@/app/redux/product/editProductSlice';
import { editProduct } from '@/app/services/products/product';
import { setProducts } from '@/app/redux/product/productSlice';
import { hideLoader, showLoader } from '@/app/redux/loader/loaderSlice';
export default function editProductModalHook(updateFilteredProducts) {
    const { isEditProduct } = useSelector((state) => state.editProduct);
    const { isProducts } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const handleEditClick = (product) =>{
        setShowModal(true);
        dispatch(setEditProduct(product));
    }
    const handleCloseClick = () =>{
        setShowModal(false);
    }
    const handleSaveClick = async (updatedProduct) =>{
        dispatch(showLoader());
        try {
          const res = await editProduct(updatedProduct, isEditProduct._id);
          if(res.status === 200){
            // const cache = await caches.open('product-cache');
            // await cache.delete("/getProducts");
            const updatedProducts = isProducts.map((product) => 
                product._id === isEditProduct._id ? res.data.data : product
          );
           dispatch(hideLoader());
            updateFilteredProducts(updatedProducts);
            dispatch(setProducts(updatedProducts));
        }
        } catch (error) {
          console.log(error);
        }
    }
  return {
    showModal,
    handleEditClick,
    handleCloseClick,
    handleSaveClick
  }
}
