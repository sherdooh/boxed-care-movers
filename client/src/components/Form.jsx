// components/Form.jsx
import React, { useState } from "react";
import {
  FaBoxOpen,
  FaMapLocationDot,
  FaLocationDot,
  FaCalendarCheck,
  FaPhoneFlip,
  FaXmark,
} from "react-icons/fa6";
import Button from "./Button";

const kenyaCities = [
  "Nairobi",
  "Mombasa",
  "Kisumu",
  "Nakuru",
  "Eldoret",
  "Thika",
  "Machakos",
];

export default function Form({ movingPlans, selectedPlan, setSelectedPlan }) {
  const [form, setForm] = useState({
    city: "Nairobi",
    address: "",
    date: "",
    phone: "",
  });

  const [valid, setValid] = useState({});
  const [message, setMessage] = useState(null);

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const validate = () => {
    const errors = {};

    if (!form.address.trim()) errors.address = true;
    if (!form.date.trim()) errors.date = true;
    if (!/^07\d{8}$/.test(form.phone)) errors.phone = true;

    setValid(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setMessage("success");
      setForm({
        city: "Nairobi",
        address: "",
        date: "",
        phone: "",
      });
    } else {
      setMessage("error");
    }
  };

  return (
    <section id="moving" className="py-20 px-6 bg-gradient-to-b from-violet-50 to-white">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
        
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-violet-900 mb-3">
            Get Your Free Moving Quote
          </h2>
          <p className="text-gray-600">
            Tell us a few details and our team will contact you shortly.
          </p>
        </div>

        {/* Alerts */}
        {message === "success" && (
          <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6 relative">
            🎉 Request received! Our team will contact you shortly.
            <FaXmark
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setMessage(null)}
            />
          </div>
        )}

        {message === "error" && (
          <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6 relative">
            Please fill all fields correctly.
            <FaXmark
              className="absolute top-4 right-4 cursor-pointer"
              onClick={() => setMessage(null)}
            />
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">

          {/* Plan */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700 flex items-center">
              <FaBoxOpen className="mr-2 text-violet-700" />
              Select Plan
            </label>
            <select
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-violet-500 focus:outline-none"
            >
              {movingPlans.map((plan, i) => (
                <option key={i} value={plan.planType}>
                  {plan.planType}
                </option>
              ))}
            </select>
          </div>

          {/* City */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700 flex items-center">
              <FaMapLocationDot className="mr-2 text-violet-700" />
              City
            </label>
            <select
              value={form.city}
              onChange={(e) => handleChange("city", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-violet-500 focus:outline-none"
            >
              {kenyaCities.map((city, i) => (
                <option key={i}>{city}</option>
              ))}
            </select>
          </div>

          {/* Address */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700 flex items-center">
              <FaLocationDot className="mr-2 text-violet-700" />
              Pickup Address
            </label>
            <input
              type="text"
              placeholder="e.g. Westlands, Nairobi"
              value={form.address}
              onChange={(e) => handleChange("address", e.target.value)}
              className={`w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-violet-500 focus:outline-none ${
                valid.address ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>

          {/* Date */}
          <div>
            <label className="block mb-2 font-semibold text-gray-700 flex items-center">
              <FaCalendarCheck className="mr-2 text-violet-700" />
              Moving Date
            </label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className={`w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-violet-500 focus:outline-none ${
                valid.date ? "border-red-500" : "border-gray-300"
              }`}
            />
          </div>

          {/* Phone */}
          <div className="md:col-span-2">
            <label className="block mb-2 font-semibold text-gray-700 flex items-center">
              <FaPhoneFlip className="mr-2 text-violet-700" />
              Phone Number
            </label>
            <input
              type="text"
              placeholder="07XXXXXXXX"
              value={form.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              className={`w-full border rounded-lg px-4 py-3 focus:ring-2 focus:ring-violet-500 focus:outline-none ${
                valid.phone ? "border-red-500" : "border-gray-300"
              }`}
            />
            <p className="text-sm text-gray-500 mt-1">
              We will call you to confirm your move.
            </p>
          </div>

          {/* Button */}
          <div className="md:col-span-2 text-center mt-4">
            <Button>
              Request Quote
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}