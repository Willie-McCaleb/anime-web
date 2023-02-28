import React, { useState, useEffect } from "react";
import "./TwoStep.css";
import { Link } from "react-router-dom";
import { collection, getDocs, getDoc, doc } from "firebase/firestore";
import { db } from "./firebase";
import AnimeData from "../data.json";

function TwoStep({ id, url_0, url_1, url_2, url_3 }) {
  // const [users, setUsers] = useState([]);
  // const docRef = doc(db, "anime", "Q4PATETatHENLVPyOzy3");
  // getDoc(docRef).then((doc) => {
  //   console.log(doc.data(), doc.id);
  // });

  // //displays all of the array objects, I just want 1
  // const ColRef = collection(db, "anime");
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const data = await getDocs(ColRef);
  //     console.log(data);
  //     setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //   };

  //   getUsers();
  // }, []);

  return (
    /* Current code for going through database */
    /* <div className="TwoStep">
      {users &&
        users.map((user) => {
          return (
            <div>
              <h1> Name: {user && user.name}</h1>
              <h1> anime: {user && user.owners}</h1>
            </div>
          );
        })}
    </div> */

    <div className="TwoStep">
      <h1>{AnimeData && AnimeData[id].name}</h1>
      <iframe
        className="video"
        width="560"
        height="315"
        src={AnimeData && AnimeData[id].video}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <img src={AnimeData && AnimeData[id].logo} />
      <div className="info-txt">
        <div className="left">
          <h4 className="sub-title"> native name</h4>
          <h4 className="sub-title"> founded</h4>
          <h4 className="sub-title">headquarters</h4>
          <h4 className="sub-title">owners</h4>
          <h4 className="sub-title">website</h4>
        </div>
        <div className="right">
          <h4 className="answer"> {AnimeData && AnimeData[id].nativename}</h4>
          <h4 className="answer"> {AnimeData && AnimeData[id].founded}</h4>
          <h4 className="answer">{AnimeData && AnimeData[id].headquarters}</h4>
          <h4 className="answer">{AnimeData && AnimeData[id].owners}</h4>
          <h4 className="answer">{AnimeData && AnimeData[id].website}</h4>
        </div>
      </div>
      <h2>Top 4 AnimeData</h2>

      <div className="AnimeDatacard">
        <div className="a-card">
          <div className="a-image">
            <img
              alt="AnimeData"
              src={AnimeData && AnimeData[id].anime[0].pic}
            />
          </div>
          <h4>{AnimeData && AnimeData[id].anime[0].name}</h4>
          <button>
            <Link className="info-btn" to={url_0}>
              MORE INFO
            </Link>
          </button>
        </div>

        <div className="a-card">
          <div className="a-image">
            <img
              alt="AnimeData"
              src={AnimeData && AnimeData[id].anime[1].pic}
            />
          </div>
          <h4>{AnimeData && AnimeData[id].anime[1].name}</h4>
          <button>
            <Link className="info-btn" to={url_1}>
              MORE INFO
            </Link>
          </button>
        </div>

        <div className="a-card">
          <div className="a-image">
            <img
              alt="AnimeData"
              src={AnimeData && AnimeData[id].anime[2].pic}
            />
          </div>
          <h4>{AnimeData && AnimeData[id].anime[2].name}</h4>
          <button>
            <Link className="info-btn" to={url_2}>
              MORE INFO
            </Link>
          </button>
        </div>

        <div className="a-card">
          <div className="a-image">
            <img
              alt="AnimeData"
              src={AnimeData && AnimeData[id].anime[3].pic}
            />
          </div>
          <h4>{AnimeData && AnimeData[id].anime[3].name}</h4>
          <button>
            <Link className="info-btn" to={url_3}>
              MORE INFO
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default TwoStep;
