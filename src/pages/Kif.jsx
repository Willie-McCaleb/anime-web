import React from "react";
import Footer from "../components/Footer";
import LastStep from "../components/LastStep";
import Navbar from "../components/Navbar";

function kif() {
  return (
    <div>
      <Navbar />
      <LastStep
        id="2"
        show="2"
        txt="Kabaneri of the Iron Fortress (Japanese: 甲鉄城のカバネリ, Hepburn: Kōtetsujō no Kabaneri) is a Japanese anime television series by Wit Studio. It was broadcast for 12 episodes on Fuji TV's Noitamina programming block from April to June 2016. The series was streamed on Amazon Prime Instant Video service. Two compilation films premiered in Japanese theaters in December 2016 and January 2017. Crunchyroll and Funimation co-released the anime on Blu-ray and DVD in the United States; Crunchyroll also acquired the merchandise rights."
        txt2="A mysterious virus appears during the Industrial Revolution that transforms infected humans into Kabane (かばね, corpses and rapidly spreads. Kabane are aggressive, undead creatures that cannot be defeated unless the glowing golden heart, which is protected by a layer of iron, is pierced, or an important body part is completely severed (such as the head). Unfortunately, most melee weapons and the steam-pressure guns used by the bushi (武士, warriors) are not very effective against them."
      />

      <Footer />
    </div>
  );
}

export default kif;
