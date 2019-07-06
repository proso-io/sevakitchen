import React, {Component} from "react";
import InitiativeGroup from "../../InitiativeGroup";
import { initiativeCardsData } from "../../../constants";
import "../../../styles/LandingSectionOne.scss";


export default class LandingSectionOne extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="landing-section-1">
      <div className="trapezium">
        <div className="triangle" />
        <div className="rect"/>
      </div>
        <div className="content">
          <h1>SERVING A PLATEFUL OF LOVE</h1>
          <h4 className="tagline">Seva kitchen helps feed the needy through it's various initiatives.</h4>
          <div className="ctaGroup">
            <button className="primaryBtn"><h4>CONTRIBUTE TO A SEVA</h4></button>
            <button className="primaryBtn"><h4>REQUEST A SEVA (FOR NGOs)</h4></button>
          </div>
          <InitiativeGroup
            data = {initiativeCardsData}
            />
        </div>
      </div>
    )
  }
}
