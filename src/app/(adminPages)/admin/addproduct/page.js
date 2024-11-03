"use client";
import React from 'react';
import { useSelector } from 'react-redux';
import ProductImageUpload from './productImage';
import addproductHook from '../../hooks/addProduct';
import useGetCategories from '@/app/(usersPages)/hooks/useGetCategories';
import Loader from '@/app/(usersPages)/components/user/loader/loader';
export default function AddProduct() {
  const { isLoading  } = useSelector((state) => state.loader);
  const { product, handleChange, handleSubmit, handleImageChange } = addproductHook();
  const {handleCategoryClick, categories, showCategoryDropdown, setShowCategoryDropdown} = useGetCategories();
  const handleCategorySelect = (category) => {
    handleChange({ target: { name: "category", value: category } });
    setShowCategoryDropdown(false);
  }
  return (
    <div className={`
    flex items-center justify-center mt-5 sm:ml-64 py-12 px-4 sm:px-6 lg:px-8`}>
      {isLoading ? (
        <div className="flex justify-center flex-col items-center mt-64">
          <Loader />
          <p>Product is being added.....</p>
        </div>
      ) : (
        <div className="w-full max-w-full sm:max-w-4xl space-y-8 
        rounded-lg shadow-lg">
          <div className={`p-10
           rounded-lg`}>
            <h2 className={`text-3xl font-extrabold text-center`}>Add New Product</h2>
            <p className="mt-2 text-center text-sm">
              Fill in the details to add a new product to your inventory.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
              <div>
                <label className="block text-sm font-medium">Product Name</label>
                <input
                  type="text"
                  name="productName"
                  value={product.productName}
                  onChange={handleChange}
                  required
                  className={` capitalize mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="Enter product name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Price</label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <input
                      type="number"
                      name="price.op"
                      value={product.price.op}
                      onChange={handleChange}
                      required
                      className={` mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                      placeholder="Original Price"
                    />
                  </div>
                  {/* <div>
                    <input
                      type="number"
                      name="price.cost"
                      value={product.price.cost}
                      onChange={handleChange}
                      required
                      className={`bg-${bgP} mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                      placeholder="Cost Price"
                    />
                  </div>
                  <div>
                    <input
                      type="number"
                      name="price.discount"
                      value={product.price.discount}
                      onChange={handleChange}
                      required
                      className={`bg-${bgP} mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                      placeholder="Discount"
                    />
                  </div> */}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium">Category</label>
                <input
                  type="text"
                  name="category"
                  value={product.category}
                  onChange={handleChange}
                  onClick={handleCategoryClick}
                  required
                  className={`capitalize  mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="Enter or select a category"
                />
                {showCategoryDropdown && categories.length > 0 && (
                  <div className={`mt-2 border border-gray-300 rounded-md shadow-md  max-h-60 overflow-y-auto`}>
                    {categories.map((category, id) => (
                      <div
                        key={id}  // Use appropriate unique key if 'id' doesn't exist
                        onClick={() => handleCategorySelect(category)}
                        className={`p-2 cursor-pointer`}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium">Subcategory</label>
                <input
                  type="text"
                  name="subcategory"
                  value={product.subcategory}
                  onChange={handleChange}
                  required
                  className={`capitalize mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="Enter subcategory"
                />
              </div>

              <div>
                <ProductImageUpload onImageChange={handleImageChange}/>
              </div>

              <div>
                <label className="block text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  value={product.description}
                  onChange={handleChange}
                  required
                  className={`capitalize mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  rows="4"
                  placeholder="Enter product description"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium">Stock</label>
                <input
                  type="text"
                  name="quantity"
                  value={product.quantity}
                  onChange={handleChange}
                  required
                  className={`capitalize mt-1 block w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
                  placeholder="Enter quantity"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {isLoading ? 'Adding...' : 'Add Product'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
