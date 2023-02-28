import React from "react";
import Footer from "../components/Footer";
import LastStep from "../components/LastStep";
import Navbar from "../components/Navbar";

function vs() {
  return (
    <div>
      <Navbar />
      <LastStep
        id="2"
        show="1"
        txt="Vinland Saga (Japanese: ヴィンランド・サガ, Hepburn: Vinrando Saga) is a Japanese historical manga series written and illustrated by Makoto Yukimura. The series is published by Kodansha, and was first serialized in the youth-targeted Weekly Shōnen Magazine before moving to the monthly manga magazine Monthly Afternoon, aimed at young adult men.The title, Vinland Saga, would evoke associations to Vinland as described in two Norse sagas. Vinland Saga, however, begins in Dane-controlled England at the start of the 11th century, and features the Danish invaders of England, commonly known as Vikings."
        txt2="In 1013 AD, the young Thorfinn works for Askeladd in the hopes of challenging to a duel and kill him in revenge for his father's death in 1002 AD when they were attacked by him on a journey to England. Askeladd's company found employment in 1013 AD as mercenaries under the Danish King Sweyn in the Danish invasion of London by the British and Thorkell the Tall, Thorfinn's fight-loving uncle who served with Thors in the Jomsvikings. When Thorkel takes Sweyn’s son Prince Canute captive, Askeladd's company capture the prince with the intent of selling him to either side for a profit. Askeladd changes his plan to act on his personal agenda as a descendant of Artorius to secure his mother's homeland of Wales from being invaded."
      />

      <Footer />
    </div>
  );
}

export default vs;
