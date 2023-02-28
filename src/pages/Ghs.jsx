import React from "react";
import Footer from "../components/Footer";
import LastStep from "../components/LastStep";
import Navbar from "../components/Navbar";

function ghs() {
  return (
    <div>
      <Navbar />
      <LastStep
        id="3"
        show="1"
        txt="The God of High School (Korean: 갓 오브 하이 스쿨; RR: Gat Obeu Hai Seukul) is a South Korean manhwa released as a webtoon written and illustrated by Yongje Park. It has been serialized in Naver Corporation's webtoon platform Naver Webtoon since April 2011, with the individual chapters collected and published by Imageframe under their Root label into one volume as of April 2020. The God of High School received official English translations by Line Webtoon beginning in July 2014."
        txt2="The main protagonist is Mori Jin, a 17-year-old martial artist from Seoul, South Korea.[4] At the beginning of the story, he is invited to join a Martial Arts tournament called The God of High School or GOH. The event, sponsored by a shady corporation, brings together people from high schools all over South Korea on a regional and then, national level in order to select three representatives for the World Tournament. As a prize, the winner gets his wish fulfilled by the hosting corporation, no question asked.This intrigues Mori and as he continues through the tournament he meets many competitors each with a different way of fighting."
      />
      <Footer />
    </div>
  );
}

export default ghs;
