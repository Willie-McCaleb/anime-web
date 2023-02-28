import React from "react";
import Footer from "../components/Footer";
import LastStep from "../components/LastStep";
import Navbar from "../components/Navbar";

function jk() {
  return (
    <div>
      <Navbar />
      <LastStep
        id="3"
        show="0"
        txt="Jujutsu Kaisen (呪術廻戦) is a Japanese manga series written and illustrated by Gege Akutami. It has been serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump since March 2018, with its chapters collected and published in 20 tankōbon volumes as of August 2022. The story follows high school student Yuji Itadori as he joins a secret organization of Jujutsu Sorcerers to eliminate a powerful Curse named Ryomen Sukuna, of whom Yuji becomes the host."
        txt2="Yuji Itadori is an unnaturally fit high school student living in Sendai. On his deathbed, his grandfather instils two powerful messages within Yuji: always help others and die surrounded by people. Yuji's friends at the Occult Club attracted Curses to their school when they unsealed a rotten finger talisman which Yuji swallowed to protect Megumi Fushiguro and their friends, becoming host to a powerful Curse named Ryomen Sukuna. Due to Sukuna's evil nature, all sorcerers are required to exorcise him (and, by extension, Yuji) immediately"
      />
      <Footer />
    </div>
  );
}

export default jk;
