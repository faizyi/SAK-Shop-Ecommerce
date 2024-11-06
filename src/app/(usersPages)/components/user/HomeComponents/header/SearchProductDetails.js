import Link from 'next/link';

export default function SearchProductDetails({ serachData, setShowSearch }) {
  return (
    <div
      className="absolute inset-0 bg-white/90 backdrop-filter backdrop-blur-lg 
      overflow-y-auto p-8 pt-12 mt-20 z-50 flex justify-center items-start"
    >
      {serachData.length > 0 ? (
        <div className=" max-w-3xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Search Results</h2>
          <div className="grid gap-6">
            {serachData.map((product, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 shadow-md 
                overflow-hidden transition-transform 
                hover:scale-105"
              >
                <Link href={`/shop/products/${product._id}`} passHref>
                  <div
                    onClick={() => setShowSearch(false)}
                    className="cursor-pointer flex flex-col items-center space-y-4"
                  >
                    <img
                      src={product.productImage}
                      alt={product.productName}
                      className="w-24 h-24 object-contain"
                    />
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold text-gray-800 capitalize mt-4">
                        {product.productName}
                      </h3>
                      <p className="text-lg text-gray-600 mt-2">Rs. {product.price.op}</p>
                    </div>
                  </div>
                </Link>
                <div className="mt-6 text-center">
                  <Link href={`/shop/products/${product._id}`} passHref>
                    <button
                      onClick={() => setShowSearch(false)}
                      className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium 
                      transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                      focus:ring-offset-2"
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center h-64 w-full">
          <p className="text-gray-500 text-2xl font-semibold">No products found</p>
        </div>
      )}
    </div>
  );
}
