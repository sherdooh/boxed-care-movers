// components/Steps.jsx
import React from "react";
import First from "../assets/images/1st_step.png";
import Second from "../assets/images/2nd_step.png";
import Third from "../assets/images/3rd_step.png";

export default function Steps() {
  const steps = [
    { number: "01", title: "Schedule Your Move", desc: "Pick a convenient date and we’ll handle the logistics.", img: First },
    { number: "02", title: "Professional Packing", desc: "Our team packs your items carefully and efficiently.", img: Second },
    { number: "03", title: "Effortless Moving Day", desc: "Relax while we transport your belongings safely.", img: Third },
  ];

  return (
    <section className="py-16 px-6 bg-violet-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {steps.map((step, i) => (
          <>
            <div key={i} className={`${i%2 === 0 ? "" : "order-2"} flex flex-col justify-center`}>
              <span className="text-5xl text-gray-300 mb-2">{step.number}</span>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-700">{step.desc}</p>
            </div>
            <img src={step.img} alt={`Step ${step.number}`} className="w-full rounded-lg shadow-lg"/>
          </>
        ))}
      </div>
    </section>
  );
}