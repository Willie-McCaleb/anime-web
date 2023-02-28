import React from "react";
import { AddList } from "./AddList";

export const AnimeCard = ({
  animelist,
  setAnimeInfo,
  animeComponent,
  handleList,
}) => {
  const AddToList = animeComponent;
  return (
    <>
      {animelist
        ? animelist.map((anime, index) => {
            return (
              <div
                className="card"
                key={index}
                onClick={() => setAnimeInfo(anime)}
              >
                <img src={anime.images.jpg.large_image_url} alt="animeImage" />
                <div className="anime-info">
                  <h4>{anime.title}</h4>
                  <div className="overlay" onClick={() => handleList(anime)}>
                    <div className="synopsis"></div>
                    <AddList />
                  </div>
                </div>
              </div>
            );
          })
        : "Not Found"}
    </>
  );
};
