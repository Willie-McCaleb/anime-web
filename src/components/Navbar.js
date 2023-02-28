import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { NavMenu } from "./NavMenu"; //to use the data

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    //Wants to extend component so I have to render it
    return (
      <nav className="navItem">
        <img
          className="navLogo"
          src="assets/header.svg"
          alt="Website Logo"
        ></img>

        {/* making the open and close icons togglable using a State */}
        <div className="mobile-icons" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "navMenu active" : "navMenu"}>
          {/* mapping through the array to get each item */}
          {NavMenu.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i> {item.title}
                </Link>
              </li>
            );
          })}
          <Link to="/">
            <button onClick="/">Sign Out</button>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
