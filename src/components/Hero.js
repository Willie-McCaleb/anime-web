import React from "react";
import "./Hero.css";

function Hero(props) {
  return (
    <div className={props.cName}>
      {/* <img className="hero-img" alt="Hero Img" src={props.heroImg} /> */}
      <div className="heroTxt">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>
          {props.buttonTxt}
        </a>
      </div>
    </div>
  );
}

export default Hero;
