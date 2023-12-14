import React from "react";

import Hero from "../components/Hero";
import Features from "../components/Features";
import ProductSection from "../components/ProductSection";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main>
      <Hero />
      <Features />
      <ProductSection />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default Home;
