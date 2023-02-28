import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./LoginTemp.css";
import { auth } from "./firebase";

function LoginTemp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault(); //Prevent page from refreshing

    //Firebase code
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/home"); //push them back to the homepage
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    //Firebase Code
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //means it successfully created an new account
        console.log(auth);
        if (auth) {
          navigate("/home");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <img
        className="login_logo"
        alt="website logo"
        src="assets/header.svg"
      ></img>

      <div className="login_container">
        <h1>Sign-In</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" onClick={signIn} className="loginBtn">
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to AnimeLand`s Conditions of Use & Sale.
          Please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice. Give me all of your DATA!
        </p>

        <button onClick={register} className="accountBtn">
          Create an Account
        </button>
      </div>
    </div>
  );
}

export default LoginTemp;
