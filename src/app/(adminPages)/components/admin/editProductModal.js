import editModalHook from "../../hooks/editModal";

export default function EditProductModal({showModal, handleCloseClick, handleSaveClick}) {
    const {formData, handleChange} = editModalHook();
    const handleSubmit = (e)=>{
        e.preventDefault();
        handleSaveClick(formData);
        handleCloseClick();
    }
    if(!showModal) return null;
  return (
    <div className="fixed inset-0 flex justify-center items-center z-50">
    {/* Backdrop */}
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"></div>

    {/* Modal */}
    <div className="relative z-10 bg-white rounded-xl shadow-2xl w-[50%] max-h-screen p-2 md:p-8 lg:p-5 overflow-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold text-gray-900">Edit Product</h3>
        <button
          onClick={handleCloseClick}
          className="text-gray-500 hover:text-red-500 transition ease-in-out duration-200"
        >
          &times;
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Product Name */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">Product Name</label>
          <input
            type="text"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
            placeholder="Enter product name"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">Price</label>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="number"
              name="price.op"
              value={formData.price.op}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
              placeholder="Original Price"
            />
            {/* <input
              type="number"
              name="price.discount"
              value={formData.price.discount}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
              placeholder="Discount"
            /> */}
          </div>
        </div>

        {/* Category and Subcategory */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Category</label>
            <input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
              placeholder="Enter category"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold text-gray-700">Subcategory</label>
            <input
              type="text"
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              required
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
              placeholder="Enter subcategory"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
            rows="3"
            placeholder="Enter product description"
          ></textarea>
        </div>

        {/* Quantity */}
        <div>
          <label className="block mb-1 text-sm font-semibold text-gray-700">Quantity</label>
          <input
            type="text"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            required
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
            placeholder="Enter quantity"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-4">
          <button
            type="button"
            onClick={handleCloseClick}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 transition duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}
