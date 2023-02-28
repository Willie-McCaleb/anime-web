import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TwoStep from "../components/TwoStep";

function Kyoto() {
  return (
    <div>
      <Navbar />
      <TwoStep
        id="0"
        url_0="/mhs"
        url_1="/clannad"
        url_2="/lcd"
        url_3="/violet"
      />
      <Footer />
    </div>
  );
}

export default Kyoto;
