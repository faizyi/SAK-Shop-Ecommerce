import { FaWhatsapp, FaEnvelope, FaPhone, FaFacebookF,FaMapMarkerAlt } from 'react-icons/fa';
import Link from "next/link";
export default function Footer() {
  const date = new Date().getFullYear();
  
  return (
    <footer className="border-t relative z-10">
      <div className="py-14 px-6 sm:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">

          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="h-10">
            <img
                src="/logo/logo.png"
                alt="logo"
                className="mb-4 transform cursor-pointer hover:scale-105 transition duration-500 ease-in-out"
                style={{ width: '140px', height: 'auto' }} // Maintain aspect ratio
              />
            </Link>
            <p className="text-sm text-gray-500 mb-4">
              Your One-Stop Shop for Truck Parts. Find the perfect parts for your truck with our 
              extensive collection and expert advice.
            </p>
            <p className="text-sm text-gray-500">
              <FaEnvelope className="inline mr-2" />
              <a href="mailto:contact@example.com" className="font-bold hover:underline">contact@example.com</a>
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-black">Navigation</h4>
            <ul className="">
              <li><Link href="/" className="text-sm text-gray-500 hover:underline underline-offset-4">Home</Link></li>
              <li><Link href="/shop/products" className="text-sm text-gray-500 hover:underline underline-offset-4">Shop</Link></li>
              <li><Link href="/contact-us" className="text-sm text-gray-500 hover:underline underline-offset-4">Contact us</Link></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-black">Follow Us</h4>
            <ul className="flex gap-4">
              <li><Link href="#" className="text-gray-500 hover:text-blue-500"><FaFacebookF className="w-6 h-6" /></Link></li>
              <li><Link href="https://wa.me/1234567890" className="text-gray-500
               hover:text-green-500"><FaWhatsapp className="w-6 h-6" /></Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-black">Contact Us</h4>
            <div className="space-y-4">
              <p className="text-sm text-gray-500">
                <FaMapMarkerAlt className="inline mr-2" />
                123 Street, City Name
              </p>
              <p className="text-sm text-gray-500">
                <FaPhone className="inline mr-2" />
                <span className="font-bold">+1 234 567 890</span>
              </p>
              <p className="text-sm text-gray-500">
                <FaEnvelope className="inline mr-2" />
                <a href="mailto:contact@example.com" className="font-bold hover:underline">contact@example.com</a>
              </p>
              <p className="text-sm text-gray-500">
                <FaWhatsapp className="inline mr-2" />
                <a href="https://wa.me/1234567890" className="font-bold hover:underline">+1 234 567 890</a>
              </p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold"></span> Mon-Sat 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-5 border-t flex flex-col items-center">
      <img
          src="/logo/logo.png"
          alt="logo"
          className="mb-2 transform cursor-pointer hover:scale-105 transition duration-500 ease-in-out"
          style={{ width: '120px', height: 'auto' }} // Maintain aspect ratio
        />
        <p className="text-sm text-gray-500">
          © {date} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
