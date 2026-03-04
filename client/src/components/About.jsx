// components/sections/About.jsx
import React from "react";
import Team from "../assets/images/team.png";
import { FaTruck, FaPeopleCarry } from "react-icons/fa";
import { PiShieldCheckFill } from "react-icons/pi";

export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <img src={Team} alt="Our team in front of a truck" className="rounded-lg shadow-lg w-full" />
        <div>
          <h3 className="text-orange-500 font-bold uppercase mb-2">About Us</h3>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Reliable, Safe, and Stress-Free Moves</h2>
          <p className="text-gray-700 mb-6">
            SwiftShift Movers is committed to making your move across Kenya seamless and safe. Our experienced team handles your belongings with care from start to finish.
          </p>
          <div className="flex gap-8">
            <div className="flex flex-col items-center">
              <FaTruck size={50} className="text-orange-500 mb-2"/>
              <span>Modern Trucks</span>
            </div>
            <div className="flex flex-col items-center">
              <FaPeopleCarry size={50} className="text-orange-500 mb-2"/>
              <span>Expert Movers</span>
            </div>
            <div className="flex flex-col items-center">
              <PiShieldCheckFill size={50} className="text-orange-500 mb-2"/>
              <span>Trusted Service</span>
            </div>
          </div>
        </div>
        
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
  <div>✔ Registered Business</div>
  <div>✔ Insured Moving Services</div>
  <div>✔ Trained Professionals</div>
  <div>✔ Secure Transportation</div>
</div>
    </section>
  );
}