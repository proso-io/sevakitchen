import React, { Component } from "react";
import { feature_data } from "../../../constants";
import "../../../styles/LandingSectionTwo.css";

class LandingSectionTwo extends Component {
  state = {};
  render() {
    return (
      <div className="ls2-section-container">
        <h1 className="ls2-title">Our Partners in Seva</h1>
        <div className="ls2-container">
          <div className="ls2-image-container">
            <img className="ls2-logo"  src="/images/parle.jpeg" />
            <h4>Parle Products</h4>
          </div>
          <div className="ls2-image-container">
            <img className="ls2-logo" src="/images/scoops-logo.png" />
            <h4>Scoops Ice-cream</h4>
          </div>
        </div>
      </div>
    );
  }
}
export default LandingSectionTwo;
