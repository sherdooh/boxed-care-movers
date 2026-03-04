// components/Hero.jsx
import React from "react";
import { Link as ScrollLink } from "react-scroll";

export default function Hero({ offset }) {
  return (
    <section id="home" className="bg-violet-50 py-24 px-6 text-center md:text-left md:flex md:items-center md:justify-between md:gap-12">
      <div className="md:max-w-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-violet-900 mb-4">Moving Made Simple. Safe. Reliable.</h1>
        <p className="text-sm text-gray-500 mt-4">
  Trusted by families and businesses across Kenya.
</p>
        <p className="mb-6 text-lg md:text-xl text-gray-700">
          Let our experienced team handle your move safely and efficiently, from Nairobi to Mombasa and beyond.
        </p>
        <ScrollLink to="moving" smooth={true} offset={offset} className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 cursor-pointer">
          Book Your Move
        </ScrollLink>
      </div>
      <img src={require("../assets/images/hero_right.png")} alt="Moving truck in Kenya" className="mt-8 mx-auto md:mt-0 md:w-1/2" />
    </section>
  );
}