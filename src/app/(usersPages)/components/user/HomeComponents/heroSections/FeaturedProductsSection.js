"use client";
import useGetProduct from "@/app/(usersPages)/hooks/useGetProducts";
import Link from "next/link";
export default function FeaturedProductsSection() {
  const {allProducts} = useGetProduct();
  return (
    <section className="w-full py-12 md:py-12 lg:py-24border-b">
      <div className="container mx-auto px-4">

        {/* Enhanced Heading with Lines */}
        <div className="flex items-center justify-center mb-12">
          <div className="border-t border-gray-300 flex-grow mx-4"></div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-center text-gray-800 shadow-md 
            px-6 py-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded-lg">
            Featured Products
          </h2>
          <div className="border-t border-gray-300 flex-grow mx-4"></div>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-sm:justify-center gap-y-8 gap-x-6">
        {allProducts.map((product, index) => ( 
          <Link href={`/shop/products/${product._id}`} key={index} >
        <div  className="flex gap-6 cursor-pointer overflow-hidden transition-transform 
          hover:scale-105">
          <div className="w-24 h-24 shrink-0 bg-gray-100 p-3 overflow-hidden aspect-w-16 aspect-h-8 rounded-lg">
            <img 
                src={product.productImage}
                alt={product.productName}
              className="h-full w-full object-contain" />
          </div>
          <div>
            <h3 className="capitalize text-base font-bold text-gray-800">{product.productName}</h3>
            <h4 className="text-sm text-blue-600 font-bold mt-2">RS. {product.price.op}</h4>
          </div>
        </div>
        </Link>
        ))}
        </div>


      </div>
    </section>
  );
}
