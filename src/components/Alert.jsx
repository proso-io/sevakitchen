import React from 'react';
import PropTypes from "prop-types";

export default class Alert extends React.Component {
  render(){
    return (
      <div style={this.props.show ? {display: "block"} : {display: "none"}} className={`alert ${this.props.type == "error" ? "alert-error" : "alert-success"}`}>
        <div className="alert-close-btn"><a href="#" onClick={this.props.onClose}>x</a></div>
        <p>
        {
          this.props.type == "error" ?
            "Oops, looks like we ran into an error processing your request. Our engineers have already received the problem notification. Please try again in some time."
          : "Your request to contribute to Seva Kitchen has been submitted successfully. Our team will call you soon and guide you on next steps."
        }
        </p>
      </div>
    )
  }


}

Alert.propTypes = {
  type: PropTypes.string,
  show: PropTypes.bool,
  onClose: PropTypes.func
}
