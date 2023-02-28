import React from "react";
import "./LastStep.css";
import { db, auth } from "./firebase";
import AnimeData from "../data.json";

function LastStep({ id, show, txt, txt2 }) {
  // db.collection("AnimeData")
  //   .get()
  //   .then((snapshot) => {
  //     const animeData = [];
  //     snapshot.forEach((doc) => {
  //       const data = doc.data();
  //       animeData.push(data);
  //     });
  //     this.setState({ animeData: animeData });
  //   })
  //   .catch((error) => console.log(error));

  return (
    <div className="TwoStep">
      <h1>{AnimeData && AnimeData[id].anime[show].name}</h1>
      <img
        className="lastPic"
        src={AnimeData && AnimeData[id].anime[show].pic}
      />
      <div className="showTxt">
        <p> {txt}</p>
      </div>
      <div className="info-txt">
        <div className="left">
          <h4 className="sub-title"> studio</h4>
          <h4 className="sub-title"> original run</h4>
          <h4 className="sub-title">directed by</h4>
          <h4 className="sub-title">produced by</h4>
        </div>
        <div className="right">
          <h4 className="answer">
            {" "}
            {AnimeData && AnimeData[id].anime[show].studio}
          </h4>
          <h4 className="answer">
            {AnimeData && AnimeData[id].anime[show].original_run}
          </h4>
          <h4 className="answer">
            {AnimeData && AnimeData[id].anime[show].directors}
          </h4>
          <h4 className="answer">
            {AnimeData && AnimeData[id].anime[show].producers}
          </h4>
        </div>
      </div>

      <div className="showTxt">
        <p> {txt2}</p>
      </div>
    </div>
  );
}

export default LastStep;
