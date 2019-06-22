import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/NavBar.scss";
import { navbarLinks } from "../constants/index";

class NavBar extends Component {

  render(){
    console.log(navbarLinks);
    return (
      <div className="navbar">
        <div className="navbar-left">
          <a href="/">
            <img className="navbar-logo" src="/images/headericon.jpg" alt="logo" />
          </a>
        </div>
        <div className="navbar-right">
          {
            navbarLinks.map((item) => (
              <div className="navbar-link">
                <a href={item.link}>
                  {item.title}
                </a>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default NavBar;
