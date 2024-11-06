import { Carousel } from 'antd';
import Link from "next/link";
export default function HeroSection1() {
  return (
    <section className="lg:h-[520px]  from-white to-gray-200 bg-black">
      <div className="bg-gradient-to-r text-black py-9 w-full bg-black">
        <div className="container mx-auto lg:px-28 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2
           sm:grid-cols-2 items-center gap-0">

          {/* Text Content */}
          <div className="text-center lg:text-left space-y-5 px-4 lg:px-0 flex flex-col justify-center z-10 relative">
          <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            Your One-Stop Shop for Truck Parts
          </h1>
          <p className="text-lg md:text-xl text-black max-w-lg">
            Discover the best parts for your truck with our extensive collection and expert advice.
          </p>
          <Link href="/shop/products">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 md:px-8 rounded-lg 
              shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
            >
              Shop Now
            </button>
          </Link>
        </div>
          <Carousel
            autoplay
            autoplaySpeed={3000}
            fade
            arrows
            infinite
            className="flex justify-center lg:justify-end"
          >
              <img
                src="/heroImages/parts.png"
                alt=""
                className="ml-4 lg:ml-8 lg:w-[450px] lg:h-[450px] md:ml-12 md:w-[450px] md:h-[450px]
                   transform hover:scale-105 transition duration-500 ease-in-out"
              />
              <img
                src="/heroImages/parts1.png"
                alt=""
                className="mt-12 lg:ml-0 lg:w-[550px] lg:h-[350px] 
                md:ml-0 md:w-[550px] md:h-[350px]
                   transform hover:scale-105 transition duration-500 ease-in-out"
              />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
