import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      {/* Page Header */}
      <h2 className="text-3xl font-semibold text-center text-gray-800 mt-8">Contact Us</h2>

      {/* Contact Information Section */}
      <div className="flex flex-col lg:flex-row justify-around items-center mt-8 space-y-8 lg:space-y-0
       lg:space-x-8">
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-700">
            <FaMapMarkerAlt className="mr-2 text-red-500" /> Address
          </h3>
          <p>Ahmed Market, Karachi, Pakistan</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-700">
            <FaPhone className="mr-2 text-green-500" /> Phone
          </h3>
          <p>+92 3002730249</p>
        </div>

        {/* <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-700">
            <FaEnvelope className="mr-2 text-blue-500" /> Email
          </h3>
          <p>contact@ecommerce.com</p>
        </div> */}

        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
          <h3 className="text-xl font-semibold mb-4 flex items-center text-gray-700">
            <FaClock className="mr-2 text-yellow-500" /> Business Hours
          </h3>
          <p>Mon - Sun: 9:00 AM - 7:00 PM</p>
          <p>Friday: Closed</p>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-12">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Find Us on the Map</h3>
        <div className="w-full">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11925.385210819879!2d67.09437914880704!3d24.960042453781963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb347006532a37f%3A0xf1216ab6c54741a3!2sAhmed%20Market!5e1!3m2!1sen!2s!4v1730832189877!5m2!1sen!2s" 
        width="100%"
        height="450" style={{ borderRadius: '10px' }} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
        </div>
      </div>
    </div>
  );
}
