import React from "react";
import Footer from "../components/Footer";
import LastStep from "../components/LastStep";
import Navbar from "../components/Navbar";

function lcd() {
  return (
    <div>
      <Navbar />
      <LastStep
        id="0"
        show="2"
        txt="Love, Chunibyo & Other Delusions is a Japanese light novel series written by Torako, with illustrations provided by Nozomi Ōsaka. The work won an honorable mention in the Kyoto Animation Award competition in 2010, leading the company to assume its publication starting in June 2011. The series follows a high school boy named Yūta Togashi, who tries to discard his embarrassing past grandiose delusions, until he meets a girl named Rikka Takanashi, who exhibits her own signs of chūnibyō syndrome."
        txt2="Yūta Togashi is a boy who, during junior high school, suffered from chūnibyō, believing that he possessed supernatural powers and calling himself the Dark Flame Master, therefore alienating himself from his classmates. Finding his past embarrassing, Yūta attempts to start off high school where he does not know anyone, free from his old delusions. This proves to be difficult, however, as a delusional girl in his class, Rikka Takanashi, learns of Yūta's past and becomes interested in him. As the plot progresses, Rikka becomes more attached to Yūta, who, despite finding her delusions irritating and embarrassing, accepts her."
      />
      <Footer />
    </div>
  );
}

export default lcd;
