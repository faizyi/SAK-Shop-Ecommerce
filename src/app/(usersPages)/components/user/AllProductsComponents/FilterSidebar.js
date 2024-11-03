import React, { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import Checkbox from "./Checkbox";
import useGetProduct from "@/app/(usersPages)/hooks/useGetProducts";
export default function FilterSidebar({ onFilterChange, selectedCategory, selectedSubcategories }) {
  const {allProducts} = useGetProduct();
  const [localSelectedSubcategories, setLocalSelectedSubcategories] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const categoryMap = new Map();

    allProducts.forEach((product) => {
      const { category, subcategory } = product;
      if (category) {
        if (!categoryMap.has(category)) {
          categoryMap.set(category, new Set());
        }
        if (subcategory) {
          categoryMap.get(category).add(subcategory);
        }
      }
    });

    const categoryList = Array.from(categoryMap, ([name, subcategoriesSet]) => ({
      name,
      subcategories: Array.from(subcategoriesSet),
    }));

    setCategories(categoryList);
  }, [allProducts]);

  // Clear selected subcategories when the main category changes
  useEffect(() => {
    setLocalSelectedSubcategories([]);
  }, [selectedCategory]);

  const handleCheckboxChange = (category, subcategory) => {
    setLocalSelectedSubcategories((prev) => {
      const exists = prev.some(
        (item) => item.category === category && item.subcategory === subcategory
      );

      if (exists) {
        return prev.filter(
          (item) => !(item.category === category && item.subcategory === subcategory)
        );
      } else {
        return [...prev, { category, subcategory }];
      }
    });
  };

  useEffect(() => {
    onFilterChange(localSelectedSubcategories);
  }, [localSelectedSubcategories, onFilterChange]);

  const filteredCategories = selectedCategory
    ? categories.filter((cat) => cat.name === selectedCategory)
    : categories;

  return (
    <aside className="bg-white fixed overflow-y-auto w-64 h-screen">
      {filteredCategories.map((category) => (
        <div key={category.name} className="mb-4 pb-2 border-b border-gray-100">
          <div className="flex items-center justify-between text-gray-700 font-semibold">
            <span>{category.name}</span>
            <FaChevronDown className="h-4 w-4 transform transition-transform duration-200" />
          </div>
          <div className="ml-4 mt-2">
            {category.subcategories.length > 0 ? (
              category.subcategories.map((subcategory) => {
                const isChecked = localSelectedSubcategories.some(
                  (item) => item.category === category.name && item.subcategory === subcategory
                );

                return (
                  <label
                    key={`${category.name}-${subcategory}`}
                    className="capitalize flex items-center mt-2 p-2"
                  >
                    <Checkbox
                      label={subcategory}
                      checked={isChecked}
                      onChange={() => handleCheckboxChange(category.name, subcategory)}
                    />
                  </label>
                );
              })
            ) : (
              <p className="text-gray-500 italic">No subcategories available</p>
            )}
          </div>
        </div>
      ))}
    </aside>
  );
}
