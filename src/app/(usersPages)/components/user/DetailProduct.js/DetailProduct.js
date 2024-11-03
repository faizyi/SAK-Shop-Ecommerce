import useDeatilsProduct from '@/app/(usersPages)/hooks/useDeatilsProduct';
import Link from 'next/link';
import { FaArrowLeft, FaWhatsapp, FaDollarSign, FaUndoAlt, FaHeadset } from 'react-icons/fa';

export default function DetailProduct({ productId }) {
    const { detailProduct } = useDeatilsProduct(productId);

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Breadcrumb Navigation */}
            <div className="flex items-center space-x-2 mb-4 text-gray-600 text-sm">
                <Link href="/" className="hover:text-slate-900">Home</Link>
                <span className="mx-1">/</span>
                <Link href="/shop/products" className="hover:text-slate-900">Products</Link>
                <span className="mx-1">/</span>
                <Link href={`/shop/products?category=${detailProduct?.category}`} 
                className="hover:text-slate-900">{detailProduct?.category}</Link>
                <span className="mx-1">/</span>
                <span className="capitalize font-bold text-slate-900">{detailProduct?.productName}</span>
            </div>

            {/* Product Details Section */}
            <div className="grid md:grid-cols-2 gap-12 p-6">
                {/* Product Image */}
                <div className="relative flex justify-center items-center">
                    <img
                        alt="Product Image"
                        className="object-cover w-64 h-auto transition-transform duration-500 ease-in-out"
                        src={detailProduct?.productImage}
                    />
                    {/* Additional Info Overlay */}
                    <div className="absolute top-0 left-0 p-4 text-sm font-semibold text-white">
                        <span className="px-3 py-1 bg-slate-800 rounded">Low Prices</span>
                        <span className="ml-2 px-3 py-1 bg-green-600 rounded">Easy Returns</span>
                    </div>
                </div>

                {/* Product Information */}
                <div className="space-y-6">
                    <h1 className="capitalize text-3xl font-extrabold text-slate-900">{detailProduct?.productName}</h1>
                    <p className="text-2xl font-bold text-green-600">RS. {detailProduct?.price?.op.toFixed(2)}</p>
                    <p className="capitalize text-gray-700">{detailProduct?.description}</p>
                    
                    {/* WhatsApp Order Button */}
                    <div className="w-56 rounded-lg">
                        <Link
                            href={`https://wa.me/whatsAppNumber?text=Hello, 
                                I'm interested in buying the ${detailProduct?.productName}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-full md:w-auto bg-green-600
                             hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition 
                             duration-300"
                        >
                            <FaWhatsapp className="mr-2" />
                            Order on WhatsApp
                        </Link>
                        <span className="text-sm text-gray-500">WhatsApp: +123-456-7890</span>
                    </div>

                    {/* Additional Content Section */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-white rounded-lg shadow-md flex items-center 
                        text-center space-x-3">
                            <FaDollarSign className="text-green-600 w-6 h-6" />
                            <div>
                                <h3 className="text-lg font-bold text-slate-800">Low Prices</h3>
                                <p className="text-gray-600">Our prices are unbeatable. Quality and affordability in one place.</p>
                            </div>
                        </div>
                        <div className="p-4 bg-white rounded-lg shadow-md flex items-center text-center space-x-3">
                            <FaUndoAlt className="text-blue-600 w-6 h-6" />
                            <div>
                                <h3 className="text-lg font-bold text-slate-800">Easy Returns</h3>
                                <p className="text-gray-600">Not satisfied? We offer easy returns within 30 days.</p>
                            </div>
                        </div>
                        {/* <div className="p-4 bg-white rounded-lg shadow-md flex items-center text-center space-x-3">
                            <FaHeadset className="text-red-600 w-6 h-6" />
                            <div>
                                <h3 className="text-lg font-bold text-slate-800">Customer Support</h3>
                                <p className="text-gray-600">Have questions? Our support team is here to help you 24/7.</p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
