import React, {Component} from "react";
import InitiativeGroup from "../../InitiativeGroup";
import Modal from "../../Modal";
import ContributeForm from "../../ContributeForm";
import RequestSevaForm from "../../RequestSevaForm";
import { initiativeCardsData } from "../../../constants";
import "../../../styles/LandingSectionOne.scss";


export default class LandingSectionOne extends Component {
  constructor(props){
    super(props);
    this.state = {
      showContributeForm: false,
      showRequestSevaForm: false
    };
  }
  onContributeClick = () => {
    this.setState({showContributeForm: true});
  }

  onRequestSevaClick = () => {
    this.setState({showRequestSevaForm: true});
  }

  onModalClose = () => {
    this.setState(this.state.showContributeForm ? {showContributeForm : false} : {showRequestSevaForm : false});
  }

  render(){
    return (
      <div className="landing-section-1">
        <Modal open={this.state.showContributeForm} onClose={this.onModalClose} >
          <ContributeForm initialData={{}} />
        </Modal>
        <Modal open={this.state.showRequestSevaForm} onClose={this.onModalClose} >
          <RequestSevaForm initialData={{}} />
        </Modal>
        <div className="trapezium">
          <div className="triangle" />
          <div className="rect"/>
        </div>
        <div className="content">
          <h1>SERVING A PLATEFUL OF LOVE</h1>
          <h4 className="tagline">Seva kitchen helps feed the needy through it's various initiatives.</h4>
          <div className="ctaGroup">
            <button className="primaryBtn" onClick={this.onContributeClick}><h4>Sign Up for Seva</h4></button>
            <button className="primaryBtn" onClick={this.onRequestSevaClick}><h4>Need Seva (For NGOs)</h4></button>
          </div>
          <InitiativeGroup
            data = {initiativeCardsData}
            />
        </div>
      </div>
    )
  }
}
