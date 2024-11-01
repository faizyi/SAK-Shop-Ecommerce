import useSearchProduct from '@/app/customHooks/userHooks/productHooks/useSearchProduct';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import SearchProductDetails from './SearchProductDetails';
export default function HeaderSearchBar({ setShowSearch,}) {
  const {value, serachData, handleSearch} = useSearchProduct();
  return (
    <div className="fixed inset-0 bg-white p-4 shadow-lg z-50">
      <div className="relative flex items-center mb-4">
        <input
          value={value}
          onChange={(e) => handleSearch(e)}
          type="text"
          className="w-full py-3 px-5 rounded-full border border-gray-300 focus:outline-none 
           bg-gray-100 placeholder-gray-500 text-gray-700"
          placeholder="Search for products..."
          autoFocus
        />
        <button
          onClick={() => setShowSearch(false)}
          className="absolute bg-gray-100 top-1/2 transform -translate-y-1/2 right-4 text-gray-600
           hover:text-red-500 transition-colors duration-300"
        >
          <FaTimes className="h-6 w-6" />
        </button>
      </div>
      <SearchProductDetails serachData={serachData} setShowSearch={setShowSearch}/>
    </div>
  );
}
