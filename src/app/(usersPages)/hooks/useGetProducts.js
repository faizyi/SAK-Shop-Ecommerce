"use client";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { showLoader, hideLoader } from "../../redux/loader/loaderSlice";
// import { setProducts } from "@/redux/product/productSlice";
import { getProducts } from "@/app/services/products/product";
export default function useGetProduct() {
  const dispatch = useDispatch();
  const [allProducts, setAllProducts] = useState([]);
  const cacheKey = '/getProducts'
  useEffect(() => {
    const fetchProduct = async () => {
      dispatch(showLoader());
      try {
        const cache = await caches.open('product-cache');
        const cacheResponse = await cache.match(cacheKey);
        if (cacheResponse) {
          const cacheData = await cacheResponse.json();
          dispatch(hideLoader());
          setAllProducts(cacheData);
          // dispatch(setProducts(cacheData));
        } 
        const result = await getProducts();
        if (result.status === 200) {
            await cache.put(cacheKey, new Response(JSON.stringify(result.data.data)));
            setAllProducts(result.data.data);
            dispatch(hideLoader());
            // dispatch(setProducts(data));
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchProduct();
  }, [])

  // Function to update the product list
  const updateAllProducts = (updatedProducts) => {
    setAllProducts(updatedProducts); // Update the allProducts state when products are edited
  };

  return {
    allProducts,
    updateAllProducts,
  };
}
