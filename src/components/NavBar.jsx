import React, { Component } from "react";
import "../styles/NavBar.scss";
import { navbarLinks } from "../constants/index";

class NavBar extends Component {

  render(){
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
              <div className="navbar-link" key={item.title}>
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
