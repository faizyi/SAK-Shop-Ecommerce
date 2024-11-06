"use client";
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaAngleRight, FaFilter } from "react-icons/fa";
import { Drawer } from 'antd';
import FilterSidebar from './FilterSidebar';
import AllProducts from './AllProducts';

export default function Products() {
  const searchParams = useSearchParams(); // Retrieve search params
  const [category, setCategory] = useState(searchParams.get("category"));
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleFilterChange = (newSubcategories) => {
    setSelectedSubcategories(newSubcategories);
  };

  useEffect(() => {
    setCategory(searchParams.get("category"));
  }, [searchParams]);

  const handleDrawerOpen = () => setIsDrawerOpen(true);
  const handleDrawerClose = () => setIsDrawerOpen(false);

  return (
    <section className="flex min-h-screen bg-gray-100">
      <Drawer
        title="Filters"
        placement="left"
        closable={true}
        onClose={handleDrawerClose}
        open={isDrawerOpen}
        width={320}
      >
        <FilterSidebar
          onFilterChange={handleFilterChange}
          selectedCategory={category} // Pass the selected category
          selectedSubcategories={selectedSubcategories} // Pass selected subcategories for clearing
        />
      </Drawer>

      <main className="flex-1 p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h1 className="text-3xl font-bold">All Products</h1>
            {category && (
              <div className="flex items-center space-x-2 text-gray-600 ml-5 mt-1">
                <FaAngleRight className="text-sm" />
                <span className="text-lg font-semibold">{category} Parts</span>
              </div>
            )}
          </div>

          <button
            className="fixed top-29 z-50 right-4 bg-gray-800 text-white p-3 rounded-full shadow-lg
             hover:bg-gray-700 transition"
            aria-label="Open Filter Sidebar"
            onClick={handleDrawerOpen}
          >
            <FaFilter size={20} />
          </button>
        </div>

        <AllProducts selectedSubcategories={selectedSubcategories} 
        selectedCategory={category}
         />
      </main>
    </section>
  );
}
