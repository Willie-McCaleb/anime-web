import React from "react";
import "./Content.css";
import ContentData from "./ContentData";

function Content() {
  return (
    <div className="content">
      <h1>Anime History</h1>
      <p>
        Anime is one of the most important modern cultural facets of modern
        Japan. The word ‘anime’ comes from the English word ‘animation’. <br />
        Within Japan, it is used to refer to any kind of animation. In the rest
        of the world, it refers only to content produced in the land of the
        rising sun.
      </p>

      <ContentData
        className="first-des"
        heading="Short Time-Line Exploration"
        text="The history of anime can be traced back to the start of the 20th century, with the earliest verifiable films dating from 1917.
        The first generation of animators in the late 1910s included Ōten Shimokawa, Jun'ichi Kōuchi and Seitaro Kitayama, commonly referred to as the fathers of anime. Propaganda films, such as Momotarō no Umiwashi (1943) and Momotarō: Umi no Shinpei (1945), the latter being the first anime feature film, were made during World War II. During the 1970s, anime developed further, separating itself from its Western roots, and developing distinct genres such as mecha and its super robot subgenre. Typical shows from this period include Astro Boy, Lupin III and Mazinger Z. During this period several filmmakers became famous, especially Hayao Miyazaki and Mamoru Oshii."
        img1="assets/90s-Anime-Streaming-Evangelion-Sailor-Moon-DBZ-Featured.jpeg"
        img2="assets/yuyuhakusho051818.jpeg"
      />

      <ContentData
        className="first-des-reverse"
        heading="Japan’s Most Iconic Anime"
        text="Since the late 1990s, children around the world have been discovering the charming universe of Pokémon. Currently, the Pokémon family of products includes video games and the Pokémon Trading Card Game. There is also an animated Pokémon series, movies, toys, and much more. The games encourage strategic thinking and, in many cases, basic mathematical skills. Pokémon also emphasizes sportsmanship and respect for other players. Many parents feel that Pokémon TCG and Pokémon video games encourage their children to learn to read because reading is necessary for most Pokémon games."
        img1="assets/README.webp"
        img2="assets/6bf8a74fe06cdecaedcab5e4ff672456.webp"
      />
    </div>
  );
}

export default Content;
