import React from "react";
import servicesImage from "../assets/services-image.svg";
import CTAForm from "./CTAForm";

const Services = () => {
  return (
    <section className="services">
      <div className="services-image">
        <img src={servicesImage} alt="" />
      </div>
      <div className="services-content">
        <h2>Transform Your Startup with an Expert CPO</h2>
        <p>
          Let's champion your entire product development cycle from vision, strategy,
          design, and engineering to marketing. With us on board, you don't need
          an in-house product team neither do you require the services of
          freelancers or high-cost outsourcing firms
        </p>
        <CTAForm />
      </div>
    </section>
  );
};

export default Services;
