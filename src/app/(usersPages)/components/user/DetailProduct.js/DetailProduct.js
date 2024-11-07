import useDeatilsProduct from '@/app/(usersPages)/hooks/useDeatilsProduct';
import Link from 'next/link';
import { FaArrowLeft, FaWhatsapp, FaDollarSign, FaUndoAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import Loader from '../loader/loader';
export default function DetailProduct({ productId }) {
    const { isLoading } = useSelector((state) => state.loader);
    const { detailProduct } = useDeatilsProduct(productId);
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            {
                isLoading ? (
                    <div className="h-[70vh] relative bottom-16 flex items-center justify-center">
                        <Loader />
                    </div>
                ) : (
                    <>
                        {/* Breadcrumb Navigation */}
                        <div className="flex items-center mb-4 text-gray-600 text-sm">
                            <Link href="/" className="hover:text-slate-900">Home</Link>
                            <span className="mx-1">/</span>
                            <Link href="/shop/products" className="hover:text-slate-900">Products</Link>
                            <span className="mx-1">/</span>
                            <Link href={`/shop/products?category=${detailProduct?.category}`} className="hover:text-slate-900">
                                {detailProduct?.category}
                            </Link>
                            <span className="mx-1">/</span>
                            <span className="capitalize font-bold text-slate-900">{detailProduct?.productName}</span>
                        </div>

                        {/* Product Details Section */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Product Image */}
                            <div className="relative flex justify-center items-center">
                                {
                                    detailProduct?.productImage ? (
                                        <img
                                            src={detailProduct?.productImage}
                                            alt={detailProduct?.productName}
                                            className="w-full h-full object-contain"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center">
                                        <Loader />
                                        </div>
                                    )
                                }
                                {/* Additional Info Overlay */}
                                <div className="absolute top-[-14px] left-0 p-4 text-sm font-semibold text-white">
                                    <span className="px-3 py-1 bg-slate-800 rounded">Low Prices</span>
                                    <span className="ml-2 px-3 py-1 bg-green-600 rounded">Easy Returns</span>
                                </div>
                            </div>

                            {/* Product Information */}
                            <div className="space-y-6">
                                <h1 className="capitalize text-2xl sm:text-3xl font-extrabold text-slate-900">{detailProduct?.productName}</h1>
                                <p className="text-xl sm:text-2xl font-bold text-green-600">Rs. {detailProduct?.price?.op.toFixed(2)}</p>
                                <p className="capitalize text-gray-700">{detailProduct?.description}</p>

                                {/* WhatsApp Order Button */}
                                <div className="w-full sm:w-56 rounded-lg">
                                    <Link
                                        href={`https://wa.me/+923002730249?text=Hi, I'm interested in buying the ${detailProduct?.productName}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded transition duration-300"
                                    >
                                        <FaWhatsapp className="mr-2" />
                                        Order on WhatsApp
                                    </Link>
                                    <span className="text-sm text-gray-500">WhatsApp: +92 300 273 0249</span>
                                </div>

                                {/* Additional Content Section */}
                                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="p-4 bg-white rounded-lg shadow-md flex items-center text-center space-x-3">
                                        <FaDollarSign className="text-green-600 w-6 h-6" />
                                        <div>
                                            <h3 className="text-base sm:text-lg font-bold text-slate-800">Low Prices</h3>
                                            <p className="text-sm sm:text-gray-600">Our prices are unbeatable. Quality and affordability in one place.</p>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-white rounded-lg shadow-md flex items-center text-center space-x-3">
                                        <FaUndoAlt className="text-blue-600 w-6 h-6" />
                                        <div>
                                            <h3 className="text-base sm:text-lg font-bold text-slate-800">Easy Returns</h3>
                                            <p className="text-sm sm:text-gray-600">Not satisfied? We offer easy returns within 30 days.</p>
                                        </div>
                                    </div>
                                    {/* Customer Support section can be uncommented if needed */}
                                    {/* <div className="p-4 bg-white rounded-lg shadow-md flex items-center text-center space-x-3">
                            <FaHeadset className="text-red-600 w-6 h-6" />
                            <div>
                                <h3 className="text-base sm:text-lg font-bold text-slate-800">Customer Support</h3>
                                <p className="text-sm sm:text-gray-600">Have questions? Our support team is here to help you 24/7.</p>
                            </div>
                        </div> */}
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    );
}
