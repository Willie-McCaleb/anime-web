import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="" //Replace with video after learning out how ?
        title="Welcome to the World of Anime"
        text="Where you can adventure and learn countless facts"
        buttonTxt="Click here to Begin"
        url="/history"
        btnClass="show"
      />
    </div>
  );
}

export default Home;
