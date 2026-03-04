// App.js
import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Steps from "./components/Steps";
import CardList from "./components/CardList";
import About from "./components/About";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppBtn";

import EconomyImg from "./assets/images/tier1.png";
import StandardImg from "./assets/images/tier2.png";
import ExecutiveImg from "./assets/images/tier3.png";
import Testimonials from "./components/Testimonials";

// Moving Plans without upfront pricing to avoid scaring customers
const movingPlans = [
  {
    planType: "Economy Plan",
    truckSize: "Compact (3 meters truck)",
    features: [
      "Suitable for small apartments or studio moves",
      "Basic loading and unloading assistance",
      "One experienced driver for safe transport",
      "Limited to a 80-kilometer radius",
    ],
    img: [EconomyImg, "Size illustration for Economy Tier"],
  },
  {
    planType: "Standard Plan",
    truckSize: "Standard (5 meters truck)",
    features: [
      "Ideal for 1-2 bedroom homes",
      "Loading and unloading assistance included",
      "Two skilled drivers for efficient moving",
      "160-kilometer radius coverage",
      "Free packing materials provided",
    ],
    img: [StandardImg, "Size illustration for Standard Tier"],
  },
  {
    planType: "Executive Plan",
    truckSize: "Large (7 meters truck)",
    features: [
      "Suitable for larger homes or office moves",
      "Full-service moving, including packing and unpacking",
      "Three professional drivers for a quick and secure move",
      "Extended 320-kilometer radius coverage",
      "Premium packing materials and moving blankets included",
      "Weekend and evening scheduling options",
    ],
    img: [ExecutiveImg, "Size illustration for Executive Tier"],
  },
];

export default function App() {
  const [selectedPlan, setSelectedPlan] = useState(movingPlans[0].planType);
  const [offset, setOffset] = useState(-220);

  useEffect(() => {
    function handleResize() {
      setOffset(window.innerWidth <= 767 ? -100 : -220);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="font-sans bg-white text-gray-800">
      <Navbar />
      <Hero movingPlans={movingPlans} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} offset={offset} />
      <Form movingPlans={movingPlans} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
      <Steps />
      <CardList movingPlans={movingPlans} setSelectedPlan={setSelectedPlan} offset={offset} />
      <Testimonials />
      <WhatsAppButton />
      <About />
      <Footer />
    </div>
  );
}