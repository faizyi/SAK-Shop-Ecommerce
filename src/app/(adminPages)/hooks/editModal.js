"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
export default function editModalHook() {
    const { isEditProduct } = useSelector((state) => state.editProduct);
    const [formData, setFormData] = useState({
      productName: '',
      price: {
        op: '',
        discount: '',
        cost: '',
      },
      category: '',
      subcategory: '',
      productImage: '',
      description: '',
      quantity: ""
      });
    
      useEffect(() => {
        if (isEditProduct) {
          setFormData({
            productName: isEditProduct.productName || "",
            quantity: isEditProduct.quantity || "",
            category: isEditProduct.category || "",
            subcategory: isEditProduct.subcategory || "",
            description: isEditProduct.description || "",
            productImage: isEditProduct.productImage || "",
            price: {
              op: isEditProduct.price?.op || "",
              discount: isEditProduct.price?.discount || "",
              cost: isEditProduct.price?.cost || "",
            }
          });
        }
      }, [isEditProduct]);
      const handleChange = (e)=>{
        const { name, value } = e.target;
        if (name.includes("price.")) {
          const priceKey = name.split(".")[1];
          setFormData((prevState) => ({
            ...prevState,
            price: {
              ...prevState.price,
              [priceKey]: value
            }
          }));
        } else {
          setFormData({ ...formData, [name]: value });
        }
      }
  return {
    formData,
    handleChange,
    setFormData
  }
}
