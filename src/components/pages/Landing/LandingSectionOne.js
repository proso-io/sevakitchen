import React, {Component} from "react";
import InitiativeCard from "../../InitiativeCard";


export default class LandingSectionOne extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <h1>Stub for landing section two</h1>
        <InitiativeCard img="/images/sevatiffin.jpeg" title="Seva Tiffin" description="Food is served at the several locations for the needy at Hospitals, Schools for underprivileged children, Old age Homes. If you wish to serve at any of these locations you can Sign Up for Seva. You can also buy a meal for the location which will be delivered to the needy by Volunteers." />
      </div>
    )
  }
}
