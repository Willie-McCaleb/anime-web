import "./TopComp.css";
import React from "react";
import { Link } from "react-router-dom";

function TopCompData(props) {
  return (
    <div className="t-card">
      <div className="t-image">
        <img alt="anime" src={props.image} />
      </div>
      <h4>{props.heading}</h4>
      <img className="t-logo" alt="company logo" src={props.logo} />
      <p>{props.text}</p>
      <button>
        <Link className="info-btn" to={props.url}>
          MORE INFO
        </Link>
      </button>
    </div>
  );
}

export default TopCompData;
