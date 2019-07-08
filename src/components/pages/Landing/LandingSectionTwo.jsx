import React, { Component } from "react";
import { feature_data } from "../../../constants";
import "../../../styles/LandingSectionTwo.css";

class LandingSectionTwo extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="ls2-title">FEATURED IN</h1>
        <div className="ls2-container">
          {feature_data.map((children, idx) => {
            return (
              <div key={idx} className="ls2-children">
                <a target="_blank" href={children.link}>
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
