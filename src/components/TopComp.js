import React from "react";
import "./TopComp.css";
import TopCompData from "./TopCompData";

function TopComp() {
  return (
    <div className="topComp">
      <h2> TOP 4 BEST ANIME STUDIOS </h2>
      <p>
        The anime industry in Japan is huge, and probably bigger than you can
        even imagine. Even if you don’t consider yourself to be an anime fan,
        there is no escaping the giant phenomenon, and it has long since crossed
        over into the mainstream. Series like Dragon Ball Z are now part of pop
        culture, and anime films like Spirited Away are some of the biggest and
        best movies of all time. Behind every great anime production there is an
        anime studio, and some of these studios have been churning out anime
        hits at an incredible pace. Here we present a rundown of the best anime
        studios in the world.
      </p>
      <div className="tripcard">
        <TopCompData
          image="assets/A-Silent-Voice.jpeg"
          heading="KYOTO ANIMATION"
          logo="assets/kyoto-animation-1.svg"
          text="Kyoto Animation is one of the most respected animation studios of all time. Kyoto Animation Co., Ltd. often abbreviated KyoAni (京 ア ニ, Kyōani), is a Japanese animation studio and light novel publisher located in Uji, Kyoto Prefecture. Kyoto Animation was co-founded in 1981 by married couple Yoko and Hideaki Hatta; became a corporation in 1985 and a corporation in 1999."
          url="/kyoto"
        />

        <TopCompData
          image="assets/one-ppiece.jpg"
          heading="TOEI ANIMATION"
          logo="assets/Toei_Animation_logo.svg.png"
          text="Toei Animation Co., Ltd. is a Japanese animation studio controlled primarily by its namesake Toei Company. It has created a number of television series and movies and has adapted Japanese comics as animated series, many of which are popular around the world. It is well known for animating massive anime series like Dragon Ball and One Piece."
          url="/toei"
        />

        <TopCompData
          image="assets/aot.jpg"
          heading="WIT STUDIO"
          logo="assets/557c92e50a648d26cfe097e51b8e40875b2cc62f_hq.jpg"
          text="WIT STUDIO, Inc. is a Japanese animation studio founded on June 1, 2012 by Producers of Production I.G as a subsidiary of IG Port. It is based in Musashino, Tokyo, with Production I.G producer George Wada as president and Tetsuya Nakatake, also Production I.G. producer, as studio director. The studio gained notoriety for producing the first three seasons of Attack on Titan."
          url="/wit"
        />

        <TopCompData
          image="assets/jk.jpeg"
          heading="MAPPA STUDIO"
          logo="assets/MAPPA_Logo.svg"
          text="MAPPA Co., Ltd. is a Japanese animation studio. It was founded on June 14, 2011 by Masao Maruyama, founder and former producer of Madhouse. “MAPPA” is an acronym for Maruyama Animation Produce Project Association. In April 2016, Maruyama resigned from his position at the studio and founded a new studio, Studio M2."
          url="/mappa"
        />

        <p>
          There is no such thing as a complete list, and there are undoubtedly a
          lot more superb studios that I didn’t have space for. The anime
          industry in Japan is in rude health, and we look forward to even more
          incredible anime series and films. I can not wait to see what the
          future has in store. P.S. Every thing in this blog is 100% bias.
          Everything is based on my experiences and likes.
        </p>
      </div>
    </div>
  );
}

export default TopComp;
