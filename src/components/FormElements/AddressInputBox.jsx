import React, { Component } from 'react';
import PropTypes from "prop-types";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import "../../styles/FormElements/AddressInputBox.scss";

class AddressInputBox extends Component {

  render(){
    return (
      <div className="addressinputbox">
        <label>{this.props.label}
        <GooglePlacesAutocomplete
          onSelect={this.props.onAddressSelected}
          placeholder={this.props.placeholder}
        />
        </label>
      </div>
    )
  }
}

AddressInputBox.propTypes = {
  label: PropTypes.string,
  onAddressSelected: PropTypes.func,
  placeholder: PropTypes.string,
}

AddressInputBox.defaultProps = {
  label: "Select Location",
  placeholder: "Start Typing",
  onAddressSelected: function(){}
}

export default AddressInputBox;
