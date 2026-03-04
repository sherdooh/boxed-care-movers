// components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);

  const toggleNav = () => setNav(!nav);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("#navbar");
      window.scrollY > 0 ? navbar.classList.add("shadow-md") : navbar.classList.remove("shadow-md");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = ["home", "moving", "plans", "about", "contact"];

  return (
    <nav id="navbar" className="sticky top-0 z-10 bg-white flex justify-between items-center px-6 md:px-12 h-20">
      <img src={require("../assets/icon_and_logo/ssm_logo.png")} alt="SwiftShift Movers" className="w-36" />
      <ul className="hidden md:flex space-x-6 font-semibold text-lg">
        {sections.map((s) => (
          <li key={s}>
            <ScrollLink to={s} smooth={true} duration={500} offset={s === "about" || s === "moving" ? -200 : 0} className="hover:text-violet-700 cursor-pointer">
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </ScrollLink>
          </li>
        ))}
      </ul>
      <div onClick={toggleNav} className="md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>
      <div className={`fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg transform ${nav ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 md:hidden`}>
        <ul className="p-6 space-y-4 font-semibold uppercase">
          {sections.map((s) => (
            <li key={s}>
              <ScrollLink to={s} smooth={true} duration={500} onClick={() => setNav(false)} className="hover:text-violet-700 cursor-pointer">
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}