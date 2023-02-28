import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import TopComp from "../components/TopComp";

function Companies() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-companies"
        heroImg="assets/company_hero.jpg"
        title="Popular Anime Companies"
      />
      <TopComp />
      <Footer />
    </div>
  );
}

export default Companies;
