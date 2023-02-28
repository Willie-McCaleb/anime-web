import React from "react";
import Footer from "../components/Footer";
import LastStep from "../components/LastStep";
import Navbar from "../components/Navbar";

function clannad() {
  return (
    <div>
      <Navbar />
      <LastStep
        id="0"
        show="1"
        txt="Clannad (クラナド, Kuranado?, CLANNAD) is a Japanese visual novel created by the software company Key. Key released a limited version for the PC on 28 April 2004, and the regular version less than four months later on 8 August 2004. The visual novel was later ported to the PlayStation 2, PlayStation Portable, and Xbox 360. The game was translated into English by Sekai Project, who released it through Steam on 23 November 2015."
        txt2="Clannad is primarily set in a high school located in a small Japanese city. Clannad follows the life of Tomoya Okazaki, a third-year student who does not take his studies seriously. He hates his city and his everyday routine, while waiting for something that would bring color into his dull life. Always late for class, he is seen as a delinquent by the rest of his classmates who are busy preparing for their college entrance examinations. Needless to say, he does not have too many close friends either. One day, while walking to school, Tomoya passes by a frail girl muttering quietly to herself. Suddenly she exclaims anpan and catches his attention. A brief conversation follows and then both resume their walk towards the school."
      />
      <Footer />
    </div>
  );
}

export default clannad;
