"use client";
import { useSelector } from "react-redux";
import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import useSearchHook from "../../hooks/useSearch.Products";
import delProductHook from "../../hooks/delProduct";
import editProductModalHook from "../../hooks/editProduct";
import Loader from "@/app/(usersPages)/components/user/loader/loader";
import EditProductModal from "../../components/admin/editProductModal";
export default function ProductsList() {
  const { isLoading } = useSelector((state) => state.loader);
  const { isProducts } = useSelector((state) => state.product);
  const { query, handleSearch, updateFilteredProducts } = useSearchHook();
  const { handleDeleteClick } = delProductHook(updateFilteredProducts);
  const { showModal, handleEditClick, handleCloseClick, 
  handleSaveClick } = editProductModalHook(updateFilteredProducts);
  return (
    <div className="flex items-center justify-center mt-11 sm:ml-64 p-6">
      {isLoading ? (
        <div className="flex justify-center flex-col items-center mt-64">
          <Loader />
        </div>
      ) : (
        <div className={`p-4 space-y-2
        
        
        rounded-lg w-full max-w-12xl`}>
          <h2 className="text-2xl font-bold text-center mb-4">Product List</h2>

          <div className="flex justify-start mb-4">
            <div className="relative w-full sm:w-1/3">
              <input
                value={query}
                onChange={(e) => handleSearch(e)}
                type="text"
                id="table-search"
                className={`block  w-full p-3 pl-10 text-sm border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 `}
                placeholder="Search for items"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
            </div>
          </div>

          <div className="max-h-[400px] overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-500">
              <thead className={`bg-gray-800 text-white sticky top-0 z-10`}>
                <tr className="top-0 z-10">
                  <th scope="col" className="px-6 py-3">Product Name</th>
                  <th scope="col" className="px-6 py-3">Image</th>
                  <th scope="col" className="px-6 py-3">Stock</th>
                  <th scope="col" className="px-6 py-3">Category</th>
                  <th scope="col" className="px-6 py-3">SubCategory</th>
                  <th scope="col" className="px-6 py-3">Price</th>
                  <th scope="col" className="px-6 py-3 text-center">Action</th>
                </tr>
              </thead>
              <tbody>
                {isProducts.length > 0 ? isProducts.map((product, index) => (
                  <tr className={`  border-b`} key={index}>
                    <td className="capitalize px-6 py-4 font-medium whitespace-nowrap">{product.productName}</td>
                    <td className="px-6 py-4"><img className="w-10 h-10 object-center" src={product.productImage} alt="product" /></td>
                    <td className="px-6 py-4 capitalize">{product.quantity}</td>
                    <td className="capitalize px-6 py-4">{product.category}</td>
                    <td className="capitalize px-6 py-4">{product.subcategory}</td>
                    <td className="px-6 py-4">RS. {product.price.op}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        className="text-blue-600 hover:text-blue-800 mr-2"
                        onClick={() => handleEditClick(product)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleDeleteClick(product)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                )) : (
                  <tr>
                    <td colSpan="7" className="text-center py-4">No products available.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <EditProductModal
        showModal={showModal}
        handleCloseClick={handleCloseClick}
        handleSaveClick={handleSaveClick}
      />
    </div>
  );
}
