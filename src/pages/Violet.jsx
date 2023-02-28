import React from "react";
import Footer from "../components/Footer";
import LastStep from "../components/LastStep";
import Navbar from "../components/Navbar";

function violet() {
  return (
    <div>
      <Navbar />
      <LastStep
        id="0"
        show="3"
        txt="Violet Evergarden (Japanese: ヴァイオレット・エヴァーガーデン, Hepburn: Vaioretto Evāgāden) is a Japanese light novel series written by Kana Akatsuki and illustrated by Akiko Takase. It won the grand prize in the fifth Kyoto Animation Award's novel category in 2014, the first ever work to win a grand prize in any of the three categories (novel, scenario, and manga).Kyoto Animation published the first light novel in December 2015, under their KA Esuma Bunko imprint."
        txt2=" The story revolves around Auto Memory Dolls (自動手記人形, Jidō Shuki Ningyō). There was a machine invented as a prototype for the typewriter. It was originally made by Professor Orlando, the authority on letterpress printing and a researcher of mechanical dolls. His wife, Molly, was a novelist, but she became blind and could not write anymore. Dr Orlando then created the first Auto-Memories Doll for her, meant to register everything said by a human voice. In the present time, the term refers to the industry of writing for others. The story follows Violet Evergarden's journey of reintegrating back into society after the war is over as she is no longer a soldier, and her search for her life's purpose in order to understand the last words her mentor and guardian, Major Gilbert, had said to her: I love you."
      />

      <Footer />
    </div>
  );
}

export default violet;
