import React, { Component } from "react";
import "../styles/InitiativeCard.css";

export default function InitiativeCard(props){
  return (
    <div className="initiative-card">
      <div className="image-container">
        <img src={props.img} className="image" />
      </div>
      <div className="body-container">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
      <button className="contribute-button">
        <h3>CONTRIBUTE</h3>
      </button>
    </div>
  );
}
