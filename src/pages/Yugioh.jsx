import React from "react";
import Footer from "../components/Footer";
import LastStep from "../components/LastStep";
import Navbar from "../components/Navbar";

function yugioh() {
  return (
    <div>
      <Navbar />
      <LastStep
        id="1"
        show="2"
        txt="Yu-Gi-Oh! (Japanese: 遊☆戯☆王, Hepburn: Yū-Gi-Ō!, lit. Game King is a Japanese manga series written and illustrated by Kazuki Takahashi. It was serialized in Shueisha's Weekly Shōnen Jump magazine between September 1996 and March 2004. The plot follows the story of a boy named Yugi Mutou, who solves the ancient Millennium Puzzle. Yugi awakens a gambling alter-ego or spirit within his body that solves his conflicts using various games."
        txt2="Yu-Gi-Oh! tells the tale of Yugi Mutou, a timid young boy who loves all sorts of games, but is often bullied around. One day, he solves an ancient puzzle known as the Millennium Puzzle (千年パズル, Sennen Pazuru), causing his body to play host to a mysterious spirit with the personality of a gambler. From that moment onwards, whenever Yugi or one of his friends is threatened by those with darkness in their hearts, this other Yugi shows himself and challenges them to dangerous Shadow Games (闇のゲーム, Yami no Gēmu, lit. Games of Darkness which reveal the true nature of someone's heart, the losers of these contests often being subjected to a dark punishment called a Penalty Game (罰ゲーム, Batsu Gēmu). Whether it be cards, dice, or role-playing board games, he will take on challenges from anyone, anywhere."
      />
      <Footer />
    </div>
  );
}

export default yugioh;
