import { Carousel } from 'antd';
import Link from "next/link";

export default function HeroSection1() {
  return (
    <section className="lg:h-auto bg-gradient-to-r from-gray-100 to-gray-200 py-12">
      <div className="container mx-auto px-6 lg:px-28 flex flex-col items-center gap-12">
        {/* Top Text Content */}
        <div className="text-center space-y-6 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight text-gray-800">
            Revolutionize Your Truck with Premium Parts
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Discover top-quality truck parts, expert advice, and unbeatable deals to keep you moving forward.
          </p>
          <Link href="/shop/products">
            <button
              className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-6 md:px-8 rounded-full 
              shadow-lg transition-transform duration-300 transform hover:scale-105"
            >
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
