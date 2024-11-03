import { Carousel } from 'antd';
import Link from "next/link";
export default function HeroSection1() {
  return (
    <section className="lg:h-[520px]  from-white to-gray-200">
      <div className="bg-gradient-to-r text-black py-9 w-full">
        <div className="container mx-auto lg:px-28 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2
           sm:grid-cols-2 items-center gap-0">

          {/* Text Content */}
          <div className="text-center lg:text-left space-y-3 px-6">
            <h1 className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl font-bold">
              Your One-Stop Shop for Truck Parts
            </h1>
            <p className="text-xl md:text-xl">
              Find the perfect parts for your truck with our extensive collection and expert advice.
            </p>
            <Link href={"/shop/products"}>
            <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-2 md:px4 rounded"
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
            <div className="flex items-center justify-center">
              <img
                src="/heroImages/parts.png"
                alt="Truck parts collage"
                className="ml-4 lg:ml-8 lg:w-[450px] lg:h-[450px] md:ml-12 md:w-[450px] md:h-[450px]
                   transform hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/heroImages/parts1.png"
                alt="Truck parts collage"
                className="mt-12 lg:ml-0 lg:w-[550px] lg:h-[350px] 
                md:ml-0 md:w-[550px] md:h-[350px]
                   transform hover:scale-105 transition duration-500 ease-in-out"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
