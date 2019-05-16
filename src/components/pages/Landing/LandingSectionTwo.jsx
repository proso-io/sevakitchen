import React, { Component } from "react";
import feature_data from "../Constants/index.js";
import "../../../styles/LandingSectionTwo.css";

class LandingSectionTwo extends Component {
  state = {};
  render() {
    return (
      <div>
        <h2 className="ls2-title">FEATURED IN</h2>
        <div className="ls2-container">
          {feature_data.map(children => {
            return (
              <div className="ls2-children">
                <a href={children.link}>
                  <img className="ls2-logo" src={children.img} alt="logo" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default LandingSectionTwo;
