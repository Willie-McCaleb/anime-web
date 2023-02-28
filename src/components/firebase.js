import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwc25OOrq39ysYmakQKW6ohaEUMEmRgNA",
  authDomain: "anime-studios-76401.firebaseapp.com",
  projectId: "anime-studios-76401",
  storageBucket: "anime-studios-76401.appspot.com",
  messagingSenderId: "194239060097",
  appId: "1:194239060097:web:d3496ccccaca0dbc965580",
  measurementId: "G-541TRQGTHJ",
};

// init firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebaseApp.firestore();
const colRef = collection(db, "anime");

// getDocs(colRef)
//   .then((snapshot) => {
//     let animeData = [];
//     snapshot.docs.forEach((doc) => {
//       animeData.push({ ...doc.data(), id: doc.id });
//     });
//     console.log(animeData);
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

export const auth = firebase.auth();

export default firebase;
