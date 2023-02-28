import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TwoStep from "../components/TwoStep";

function Toei() {
  return (
    <div>
      <Navbar />
      <TwoStep id="1" url_0="/op" url_1="/dbz" url_2="/yugioh" url_3="/sm" />
      <Footer />
    </div>
  );
}

export default Toei;
