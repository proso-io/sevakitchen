import React, {Component} from "react";
import LandingSectionOne from "./LandingSectionOne";
import LandingSectionTwo from "./LandingSectionTwo";
import LandingSectionThree from "./LandingSectionThree";


export default class LandingPage extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return <div className="landingPageContainer">
      <LandingSectionOne />
      <LandingSectionTwo />
      <LandingSectionThree />
    </div>
  }
}
