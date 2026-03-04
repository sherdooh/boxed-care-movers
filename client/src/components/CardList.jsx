// components/cards/CardList.jsx
import React from "react";
import Card from "./Card";

export default function CardList({ movingPlans, setSelectedPlan, offset }) {
  return (
    <section id="plans" className="py-16 px-6 bg-violet-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {movingPlans.map((plan, i) => (
          <Card
            key={i}
            type={plan.planType}
            truckSize={plan.truckSize}
            features={plan.features}
            img={plan.img}
            setSelectedPlan={setSelectedPlan}
            offset={offset}
          />
        ))}
      </div>
    </section>
  );
}