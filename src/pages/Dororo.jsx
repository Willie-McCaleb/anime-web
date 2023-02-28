import React from "react";
import Footer from "../components/Footer";
import LastStep from "../components/LastStep";
import Navbar from "../components/Navbar";

function dororo() {
  return (
    <div>
      <Navbar />
      <LastStep
        id="3"
        show="3"
        txt="Dororo (Japanese: どろろ) is a 2019 anime television series produced by MAPPA and Tezuka Productions based on the manga of the same name by Osamu Tezuka, and is a re-adaptation of the previous 1969 series. The adaptation departs from the source material in several ways, but follows the basic premise of the manga: a young ronin, named Hyakkimaru, along with a young child, Dororo, must face multiple demons in Sengoku-era Japan who have stolen his various body parts in order to get them back."
        txt2="During the Sengoku period, a feudal lord has his newborn son's organs and limbs sacrificed to the twelve demons gods in exchange of prosperity for his people. The baby is abandoned but found by the doctor Jukai who specializes in giving people prosthetic limbs. Jukai adopts the baby and gives him limbs. When the child grows up, he is attacked by demons and develops the ability of seeing their silhouette to fight back. After defeating his first enemy, the now teenager regains his ability of feeling pain. Jukai names the teenager Hyakkimaru and sends him off on journey to regain his body. Along the way, Hyakkimaru meets a child named Dororo who decides to follow him, teaching him how to live and fight demons in exchange for food when visiting villages."
      />
      <Footer />
    </div>
  );
}

export default dororo;
