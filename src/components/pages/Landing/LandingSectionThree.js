import React, { Component } from "react";
import { feature_data } from "../../../constants";
import "../../../styles/LandingSectionThree.css";

class LandingSectionThree extends Component {
  state = {};
  render() {
    return (
      <div className="ls3-section-container">
        <h1 className="ls3-title">Featured In</h1>
        <div className="ls3-container">
          {feature_data.map((children, idx) => {
            return (
              <div key={idx} className="ls3-children">
                <a target="_blank" href={children.link}>
                  <img className="ls3-logo" src={children.img} alt="logo" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default LandingSectionThree;
