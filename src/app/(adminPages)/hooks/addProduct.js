import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '@/app/services/products/product';
import { hideLoader, showLoader } from '@/app/redux/loader/loaderSlice';
export default function addproductHook() {
  const dispatch = useDispatch();
    const [product, setProduct] = useState({
        productName: '',
        price: {
          op: '',
          cost: '',
          discount: ''
        },
        category: '',
        subcategory: '',
        productImage: '',
        description: '',
        quantity: ""
      });
      const handleImageChange = (image) => {
        setProduct((prev) => ({
          ...prev,
          productImage: image,
        }));
      };
      const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes(".")) {
            const [parent, child] = name.split(".");
            setProduct((prev) => ({
              ...prev,
              [parent]: {
                ...prev[parent],
                [child]: value
              }
            }));
          } else{
              setProduct((prev) => ({
                ...prev,
                [name]: value
              }));
          }
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(product.productImage)
        dispatch(showLoader());
        try {
          const result = await addProduct(product);
          if (result.status === 201 || result.status === 200) {
            console.log('Product added successfully:', result.data);
            // You can add a success notification or a redirect here
          } else {
            console.error('Failed to create product:', result.data || 'Unknown error');
          }
        } catch (error) {
          console.error('Error while creating product:', error);
        } finally {
          dispatch(hideLoader()); // Hide loader after the request completes
        }
      }
  return {
    product,
    handleChange,
    handleSubmit,
    handleImageChange
  }
}
