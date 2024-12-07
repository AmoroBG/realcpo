import React from "react";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Services from "./Services";
import Contact from "./Contact";
import About from "./About";

const Main = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Contact />
    </main>
  );
};

export default Main;
