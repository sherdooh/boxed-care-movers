// components/cards/Card.jsx
import React from "react";
import { Link as ScrollLink } from "react-scroll";
import Button from "./Button";

export default function Card({ img, type, truckSize, features, setSelectedPlan, offset }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
      <img src={img[0]} alt={img[1]} className="w-32 -mt-16 mb-4" />
      <h3 className="text-2xl font-bold mb-2">{type}</h3>
      <p className="text-gray-600 mb-4">{truckSize}</p>
      <ul className="text-gray-700 mb-4">
        {features.map((f,i) => <li key={i} className="mb-2">{f}</li>)}
      </ul>
      <ScrollLink to="moving" smooth={true} offset={offset}>
        <Button onClick={() => setSelectedPlan(type)}>Book Plan</Button>
      </ScrollLink>
    </div>
  );
}