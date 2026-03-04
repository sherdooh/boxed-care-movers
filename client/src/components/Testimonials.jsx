import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "James Mwangi",
      location: "Nairobi",
      text: "SwiftShift made my move from Westlands to Kilimani stress-free. Professional and careful team!",
    },
    {
      name: "Amina Hassan",
      location: "Mombasa",
      text: "Very reliable service. They handled my furniture with care. Highly recommend!",
    },
    {
      name: "Brian Otieno",
      location: "Kisumu",
      text: "On time, affordable, and trustworthy. I’ll definitely use them again.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-violet-900 mb-12">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-violet-50 p-6 rounded-2xl shadow-md"
            >
              <p className="text-gray-700 mb-4 italic">"{t.text}"</p>
              <h4 className="font-bold text-violet-800">
                {t.name}
              </h4>
              <p className="text-sm text-gray-500">
                {t.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}