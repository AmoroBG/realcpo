import React from "react";
import heroImage from "../assets/hero-image.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          Build your dream product with
          <span className="text-highligh-color-primary"> Reliable </span>and
          <span className="text-highligh-color-secondary"> Resilient </span>
          Chief Product Officer (CPO)
        </h1>
        <p>
          Launch your product without having to worry about co-founder dynamics
          and stressfull freelancer management, who do not share the same vision
          with you and will slow down your progress or even quit at the time you
          need them most, leaving your business into extinction
        </p>
        <button>Get started now</button>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero Image" />
      </div>
    </section>
  );
};

export default Hero;
