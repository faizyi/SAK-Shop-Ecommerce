import Link from 'next/link';
import { FaTimes } from 'react-icons/fa';

export default function SearchProductDetails({ serachData, setShowSearch }) {
  return (
    <div
      className="absolute inset-0 bg-white/80 backdrop-filter backdrop-blur-lg overflow-y-auto p-6 pt-8 mt-20 z-50"
    >
      {/* Close button */}
      <button
        className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 
        transition-colors text-gray-700"
        onClick={() => setShowSearch(false)}
      >
        <FaTimes size={18} />
      </button>

      {serachData.length > 0 ? (
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Search Results</h2>
          <div className="space-y-4">
            {serachData.map((product, index) => (
              <Link
                onClick={() => setShowSearch(false)}
                key={index}
                href={`/shop/products/${product._id}`}
              >
                <div
                  className="flex items-center space-x-4 p-4 border border-gray-300 rounded-xl 
                  hover:shadow-lg hover:bg-gray-50 transition duration-300 cursor-pointer transform 
                  hover:-translate-y-1"
                >
                  <img
                    src={product.productImage}
                    alt={product.productName}
                    className="w-16 h-16 object-cover rounded-lg shadow-md"
                  />
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800 capitalize 
                    transition-colors duration-300 group-hover:text-indigo-600">
                      {product.productName}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">Rs. {product.price.op}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-500 text-xl font-semibold">No products found</p>
        </div>
      )}
    </div>
  );
}
