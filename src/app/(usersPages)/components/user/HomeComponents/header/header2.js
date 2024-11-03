import React from 'react'
import { FaWhatsapp, FaEnvelope, FaPhone, FaFacebookF, FaMapMarkerAlt } from 'react-icons/fa'

export default function Header2() {
  return (
    <section className="py-2 hidden text-black text-right px-1 border-b border-gray-300 
    lg:flex items-center justify-between">
      <div className="flex items-center space-x-4 text-sm">
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-red-600" />
          <p><strong className="mx-2">Address:</strong> SWF New York 185669</p>
        </div>
        <div className="flex items-center">
          <FaPhone className="text-blue-600" />
          <span><strong className="mx-2">Phone:</strong> 1800333665</span>
        </div>
        <div className="flex items-center">
          <FaWhatsapp className="text-green-600" />
          <span><strong className="mx-2">WhatsApp:</strong> +1 800 333 665</span>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-yellow-600" />
          <span><strong className="mx-2">Email:</strong> info@example.com</span>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" 
        className="text-blue-600">
          <FaFacebookF />
        </a>
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" 
        className="text-green-600">
          <FaWhatsapp />
        </a>
      </div>
    </section>
  )
}
