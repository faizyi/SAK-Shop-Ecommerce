"use client"
import { getCategories } from '@/app/services/products/product';
import React, { useEffect, useState } from 'react'
export default function useGetCategories() {
    const [categories, setCategories] = useState([]);
    const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
     const cacheKey = '/getCategories'
    useEffect(()=>{
        const fetchCategories = async()=>{
            try {
                const cache = await caches.open('categories-cache');
                const cacheResponse = await cache.match(cacheKey);
                if(cacheResponse){
                    const cacheData = await cacheResponse.json();
                    setCategories(cacheData.data.categories);
                }    
                const data = await getCategories();
                if(data.status === 200){
                    await cache.put(cacheKey, new Response(JSON.stringify(data)));
                    setCategories(data.data.categories);
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchCategories();
    },[])
    const handleCategoryClick = async ()=>{
                setShowCategoryDropdown(true);
                const res = await getCategories();
                console.log(res)
                if(res.status === 200){
                    setCategories(res.data.categories);
                }
            }
  return {
    categories,
    handleCategoryClick,
    showCategoryDropdown,
    setShowCategoryDropdown
  }
}
