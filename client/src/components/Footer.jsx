// components/Footer.jsx
import React from "react";
import { FaFacebookSquare, FaInstagram, FaPhoneSquareAlt, FaEnvelope } from "react-icons/fa";
import WhatsAppButton from "./WhatsAppBtn";

export default function Footer() {
  return (
    <footer className="bg-violet-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <img src={require("../assets/icon_and_logo/ssm_logo_white.png")} alt="SwiftShift Movers" className="w-36 mb-4"/>
          <p>Your trusted partner for safe and efficient moves across Kenya.</p>
          <div className="flex space-x-4 mt-4">
            <FaFacebookSquare size={28} className="hover:text-orange-500 cursor-pointer"/>
            <FaInstagram size={28} className="hover:text-orange-500 cursor-pointer"/>
          </div>
        </div>
        <div>
          <h3 className="font-bold mb-2">Contact</h3>
          <div className="flex items-center mb-2"><FaPhoneSquareAlt className="mr-2"/> 0712-345-678</div>
          <div className="flex items-center"><FaEnvelope className="mr-2"/> info@swiftshift.co.ke</div>
        </div>
        <div>
          <h3 className="font-bold mb-2">Working Hours</h3>
          <p>Mon-Fri: 8AM - 8PM</p>
          <p>Sat: 9AM - 6PM</p>
          <p>Sun: Closed</p>
        </div>
      </div>
      <p className="text-center mt-8 text-gray-300">&copy; {new Date().getFullYear()} SwiftShift Movers. All rights reserved.</p>
      <WhatsAppButton />
    </footer>
  );
}