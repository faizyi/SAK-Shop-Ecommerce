import Link from 'next/link';

const categories = [
  {
    src: '/shopbycategory/Yutong-Parts.webp',
    alt: 'Yutong parts category',
    href: "/shop/products?category=Yutong"
  },
  {
    src: '/shopbycategory/Faw-Parts.webp',
    alt: 'Faw parts category',
    href: "/shop/products?category=Faw"
  },
  {
    src: '/shopbycategory/Dongfeng-Parts.webp',
    alt: 'Dongfeng parts category',
    href: "/shop/products?category=Dongfeng"
  },
  // Add more categories here as needed
];

export default function ShopbyCategory() {
  return (
    <section className="w-full py-12 md:py-12 lg:py-24 border-b bg-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading with lines */}
        <div className="flex items-center justify-center mb-12">
          <div className="border-t border-gray-300 flex-grow mx-4"></div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-center shadow-md 
            px-6 py-2 bg-gradient-to-r text-black rounded-lg bg-white">
            Shop by Company
          </h2>
          <div className="border-t border-gray-300 flex-grow mx-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link key={index} href={category.href}>
            <div className="px-4" key={index}>
              <img
                src={category.src}
                alt={category.alt}
                style={{width: "300px", height: "auto"}}
                className="rounded-lg bg-white shadow-md overflow-hidden transition-transform 
                hover:scale-105"
              />
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
