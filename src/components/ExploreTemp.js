import React, { useEffect, useState } from "react";
import "../components/AnimeCard.css";
import { AnimeCard } from "../components/AnimeCard";
import { AnimeCardData } from "../components/AnimeCardData";
import { AddList } from "../components/AddList";
import { RemoveList } from "../components/RemoveList";
function App() {
  const [search, setSearch] = useState("Naruto");
  const [animeData, setAnimeData] = useState();
  const [animeInfo, setAnimeInfo] = useState();
  const [myAnimeList, setMyAnimeList] = useState([]);

  const addTo = (anime) => {
    const index = myAnimeList.findIndex((myanime) => {
      return myanime.mal_id === anime.mal_id;
    });
    if (index < 0) {
      const newArray = [...myAnimeList, anime];
      setMyAnimeList(newArray);
    }
  };
  const removeFrom = (anime) => {
    const newArray = myAnimeList.filter((myanime) => {
      return myanime.mal_id !== anime.mal_id;
    });
    setMyAnimeList(newArray);
  };
  const getData = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&limit=20`
    );
    const resData = await res.json();
    setAnimeData(resData.data);
  };
  useEffect(() => {
    getData();
  }, [search]);

  return (
    <>
      <div className="header">
        <h1>Find Your Favorite Anime</h1>
        <div className="search-box">
          <input
            type="search"
            placeholder="Search Here"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="container">
        <div className="animeInfo">
          {animeInfo && <AnimeCardData animeInfo={animeInfo} />}
        </div>
        <div className="anime-row">
          <h2 className="text-heading">Anime</h2>
          <div className="row">
            <AnimeCard
              animelist={animeData}
              setAnimeInfo={setAnimeInfo}
              animeComponent={AddList}
              handleList={(anime) => addTo(anime)}
            />
          </div>
          <h2 className="text-heading">My List</h2>
          <div className="row">
            <AnimeCard
              animelist={myAnimeList}
              setAnimeInfo={setAnimeInfo}
              animeComponent={RemoveList}
              handleList={(anime) => removeFrom(anime)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
