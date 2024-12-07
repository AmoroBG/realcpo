import React from "react";
import PriceCard from "./PriceCard";

const Pricing = () => {
  return (
    <section className="pricing">
      <h2>Pricing</h2>
      <p>Choose our perfect pricing that suits your need</p>
      <div className="pricing-cards">
        <PriceCard
          title="Subscription"
          paymentType="$499.99/Month"
          description="Get the expertise you need to hit the ground running. Dedicated CPO with unlimited requests per month"
          buttonText="Get started"
        />
        <PriceCard
          title="Pay-as-you-Go"
          paymentType="Pay per request"
          description="Flexible pricing for early stage startups. Pay only for tasks you love to get done"
          buttonText="Get quotation"
        />
        <PriceCard
          title="Equity"
          paymentType="Pay with shares"
          description="Still need a CPO, but low in budget? Begin with shares and buy off anytime"
          buttonText="Contact sales"
        />
      </div>
    </section>
  );
};

export default Pricing;
