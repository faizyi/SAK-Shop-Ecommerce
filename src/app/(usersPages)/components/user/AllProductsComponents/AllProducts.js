import useGetCategoryProducts from '@/app/(usersPages)/hooks/useGetCategoryProducts';
import useGetProduct from '@/app/(usersPages)/hooks/useGetProducts';
import Link from 'next/link';
import Loader from '../loader/loader';
import { useSelector } from 'react-redux';

export default function AllProducts({ selectedSubcategories, selectedCategory }) {
  const { isLoading } = useSelector((state) => state.loader);
  const { allProducts } = useGetProduct();
  const { filteredProducts } = useGetCategoryProducts(allProducts, selectedCategory, selectedSubcategories);

  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">

      {/* Conditional Loader Display */}
      {isLoading && (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm">
          <Loader />
        </div>
      )}

      {/* Product Grid */}
      {filteredProducts.length > 0 ? filteredProducts.map((product, index) => (
        <Link href={`/shop/products/${product._id}`} key={index}>
          <div className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-lg 
          hover:shadow-xl transition-all transform hover:-translate-y-1 hover:scale-105 
          cursor-pointer group relative h-[350px] p-4 flex flex-col justify-between">
            
            <div className="w-full h-40 flex justify-center items-center overflow-hidden rounded-lg mb-4">
              <img
                src={product.productImage}
                alt={product.productName}
                className="object-contain transition-transform duration-500 group-hover:scale-105 w-full h-full"
              />
            </div>

            <div className="flex-grow space-y-2">
              <h3 className="text-md font-semibold text-gray-900 capitalize line-clamp-1 transition-colors">
                {product.productName}
              </h3>
              <p className="capitalize text-sm text-gray-500 line-clamp-2">{product.description.slice(0, 40)}....</p>
            </div>

            <div className="flex items-center justify-between mt-2">
              <span
                className={`text-sm font-semibold ${
                  product.quantity === "in stock" ? 'text-green-600' : 'text-red-500'
                }`}
              >
                {product.quantity === "in stock" ? "In Stock" : "Out of Stock"}
              </span>
              <span className="text-sm font-bold text-gray-900">Rs. {product.price.op}</span>
            </div>

            <button className="mt-4 w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              View Product Details
            </button>
          </div>
        </Link>
      )) : (
        !isLoading && (
          <div className="text-center w-full text-gray-500">No products available</div>
        )
      )}
    </div>
  );
}
