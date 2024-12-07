import React from "react";

const PriceCard = ({ title, paymentType, description, buttonText }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <small className="text-highligh-color-secondary">{paymentType}</small>
      <p>{description}</p>
      <button>{buttonText}</button>
    </div>
  );
};

export default PriceCard;
