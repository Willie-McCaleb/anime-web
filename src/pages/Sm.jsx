import React from "react";
import Footer from "../components/Footer";
import LastStep from "../components/LastStep";
import Navbar from "../components/Navbar";

function sm() {
  return (
    <div>
      <Navbar />
      <LastStep
        id="1"
        show="3"
        txt="Sailor Moon (Japanese: 美少女戦士セーラームーン, Hepburn: Bishōjo Senshi Sērā Mūn, originally translated as Pretty Soldier Sailor Moon[1] and later as Pretty Guardian Sailor Moon[2][3]) is a Japanese manga series written and illustrated by Naoko Takeuchi. It was originally serialized in Kodansha's shōjo manga magazine Nakayoshi from 1991 to 1997; the 52 individual chapters were published in 18 volumes. The series follows the adventures of a schoolgirl named Usagi Tsukino as she transforms into Sailor Moon to search for a magical artifact, the Legendary Silver Crystal. She leads a group of comrades, the Sailor Soldiers, called Sailor Guardians in later editions, as they battle against villains to prevent the theft of the Silver Crystal and the destruction of the Solar System."
        txt2="One day in Juban, Tokyo, a middle-school student named Usagi Tsukino befriends Luna, a talking black cat who gives her a magical brooch enabling her to transform into Sailor Moon: a soldier destined to save Earth from the forces of evil. Luna and Usagi assemble a team of fellow Sailor Guardians to find their princess and the Silver Crystal. They encounter the studious Ami Mizuno, who awakens as Sailor Mercury; Rei Hino, a local Shinto shrine maiden who awakens as Sailor Mars; Makoto Kino, a tall and strong transfer student who awakens as Sailor Jupiter; and Minako Aino, a young aspiring idol who had awakened as Sailor Venus a few months prior, accompanied by her talking feline companion Artemis."
      />
      <Footer />
    </div>
  );
}

export default sm;
