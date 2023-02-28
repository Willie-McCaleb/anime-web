import React from "react";
import Footer from "../components/Footer";
import LastStep from "../components/LastStep";
import Navbar from "../components/Navbar";

function mhs() {
  return (
    <div>
      <Navbar />
      <LastStep
        id="0"
        show="0"
        txt="Haruhi Suzumiya (Japanese: 涼宮ハルヒ, Hepburn: Suzumiya Haruhi) is a Japanese light novel series written by Nagaru Tanigawa and illustrated by Noizi Ito. It was first published in 2003 by Kadokawa Shoten in Japan with the novel The Melancholy of Haruhi Suzumiya, and has since been followed by 11 additional novel volumes, an anime television series adaptation produced by Kyoto Animation, four manga series, an animated film, two original net animation series and several video games."
        txt2="Kyon is a student at North High School in Nishinomiya. He is dragged along by his classmate, Haruhi Suzumiya, an eccentric schoolgirl who seeks supernatural phenomena and figures, such as aliens, time travelers, and espers. With Kyon's reluctant help, Haruhi establishes a club called the SOS Brigade, short for Spreading excitement all Over the world with Haruhi Suzumiya Brigade Sekai o Ōini Moriageru Tame no Suzumiya Haruhi no Dan In the school's official paperwork Kyon renamed it Support the Student Body by Overworking to Make the World a Better Place Student Service Brigade to investigate mysterious events."
      />
      <Footer />
    </div>
  );
}

export default mhs;
