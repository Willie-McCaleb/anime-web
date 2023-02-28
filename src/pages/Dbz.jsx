import React from "react";
import Footer from "../components/Footer";
import LastStep from "../components/LastStep";
import Navbar from "../components/Navbar";

function dbz() {
  return (
    <div>
      <Navbar />
      <LastStep
        id="1"
        show="1"
        txt="Dragon Ball Z is a Japanese anime television series produced by Toei Animation. Part of the Dragon Ball media franchise, it is the sequel to the 1986 Dragon Ball anime series and adapts the latter 325 chapters of the original Dragon Ball manga series created by Akira Toriyama, which ran in Weekly Shōnen Jump from 1988 to 1995. Dragon Ball Z continues the adventures of Son Goku in his adult life as he and his companions defend the Earth against villains including aliens (Vegeta, Frieza), androids (Cell), and magical creatures (Majin Buu)."
        txt2="Dragon Ball Z picks up five years after the end of the Dragon Ball anime, with Goku now a young adult and father to his son, Gohan. A humanoid alien named Raditz arrives on Earth in a spacecraft and tracks down Goku, revealing to him that he is his long-lost older brother and that they are members of a near-extinct alien warrior race called the Saiyans (サイヤ人, Saiya-jin). The Saiyans had sent Goku (originally named Kakarot (カカロット, Kakarotto)) to Earth as an infant to conquer the planet for them, but he suffered a severe blow to the head shortly after his arrival and lost all memory of his mission, as well as his blood-thirsty Saiyan nature."
      />
      <Footer />
    </div>
  );
}

export default dbz;
