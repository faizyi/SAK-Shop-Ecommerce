import React, { useEffect, useState } from 'react';

export default function useGetCategoryProducts(allProducts, selectedCategory, selectedSubcategories) {
  const cacheKey = '/getProducts';
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchAndCacheProducts = async () => {
      const cache = await caches.open('product-cache');
      const cacheResponse = await cache.match(cacheKey);

      if (cacheResponse) {
        // If cache exists, use the cached data
        const cachedData = await cacheResponse.json();
        filterAndSetProducts(cachedData);
      } else {
        // Otherwise, use allProducts and store them in cache
        await cache.put(cacheKey, new Response(JSON.stringify(allProducts)));
        filterAndSetProducts(allProducts);
      }
    };

    // Filter products based on selectedCategory and selectedSubcategories
    const filterAndSetProducts = (products) => {
      const filtered = products.filter((product) => {
        const isCategoryMatch = selectedCategory
          ? product.category.toLowerCase() === selectedCategory.toLowerCase()
          : true;

        const isSubcategoryMatch = selectedSubcategories.length > 0
          ? selectedSubcategories.some(
              (item) =>
                item.category.toLowerCase() === product.category.toLowerCase() &&
                item.subcategory.toLowerCase() === product.subcategory.toLowerCase()
            )
          : true;

        return isCategoryMatch && isSubcategoryMatch;
      });

      setFilteredProducts(filtered);
    };

    if (allProducts.length > 0) {
      fetchAndCacheProducts();
    }
  }, [selectedCategory, allProducts, selectedSubcategories]);

  return {
    filteredProducts,
  };
}
