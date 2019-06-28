import React, {Component} from "react";
import InitiativeGroup from "../../InitiativeGroup";
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
          <h4 className="tagline">Seva kitchen helps feed the needy through it's various initiatives</h4>
          <InitiativeGroup
            data = {[
              {img: "/images/headericon.jpg", title: "Title1", description: "Desription 1"},
              {img: "/images/headericon.jpg", title: "Title2", description: "Desription 1"},
              {img: "/images/headericon.jpg", title: "Title3", description: "Desription 1"},
              {img: "/images/headericon.jpg", title: "Title4", description: "Desription 1"},
              {img: "/images/headericon.jpg", title: "Title5", description: "Desription 1"},
              {img: "/images/headericon.jpg", title: "Title6", description: "Desription 1"}
            ]}
            />
        </div>
      </div>
    )
  }
}
