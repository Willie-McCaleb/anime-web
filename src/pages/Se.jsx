import React from "react";
import Footer from "../components/Footer";
import LastStep from "../components/LastStep";
import Navbar from "../components/Navbar";

function se() {
  return (
    <div>
      <Navbar />
      <LastStep
        id="2"
        show="3"
        txt="Seraph of the End (Japanese: 終わりのセラフ, Hepburn: Owari no Serafu, also known as Seraph of the End: Vampire Reign) is a Japanese dark fantasy manga series written by Takaya Kagami and illustrated by Yamato Yamamoto with storyboards by Daisuke Furuya. The series is set in a world that allegedly comes to an end at the hands of a human-made virus, ravaging the global populace and leaving only children under the age of thirteen untouched. It is at this time that vampires emerge from the recesses of the earth, likely followed by age-old horrors of the dark thought only to be myth. A young man named Yūichirō Hyakuya joins a vampire extermination unit to avenge the deaths of his orphaned family and reclaim his childhood best friend Mikaela from the vampires. It started publishing in Shueisha's Jump SQ in September 2012."
        txt2="In 2012, the world allegedly comes to an end at the hands of a man-made virus, ravaging the global populace and leaving only children under the age of thirteen untouched. At the same time, the vampires emerge from the recesses of the earth, likely followed by age-old horrors of the dark thought only to be myth. They sweep the earth and claim it in a single violent stroke, subjugating the remnants of humanity and leading them beneath the surface to safety. This protection comes at the price of donating blood to their captors, not knowing that they are vampires. At the age of twelve, Yūichirō and his friend and fellow orphan Mikaela plotted to escape along with the children in Hyakuya Orphanage. However, this resulted in their deaths and Mikaela sacrifices himself in order for Yūichirō to escape and be saved by members of the Moon Demon Company, an extermination unit of the Japanese Imperial Demon Army."
      />

      <Footer />
    </div>
  );
}

export default se;
