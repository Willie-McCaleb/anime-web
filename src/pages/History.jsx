import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Content from "../components/Content";
import AnimeHis from "../components/AnimeHis";

function History() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero-history"
        heroImg="assets/history_hero.jpg"
        title="Adventure through History"
      />

      <Content />

      <Footer />
    </div>
  );
}

export default History;
