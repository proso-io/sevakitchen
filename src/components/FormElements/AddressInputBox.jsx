import React, { Component } from 'react';
import PropTypes from "prop-types";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import "../../styles/FormElements/AddressInputBox.scss";

class AddressInputBox extends Component {

  constructor(props){
    super(props);
    this.onAddressSelected = this.onAddressSelected.bind(this);
  }

  onAddressSelected(data){
    this.props.onAddressSelected(data, this.props.id)
  }

  render(){
    return (
      <div className={"form-element addressinputbox" + (this.props.id ? (" " + this.props.id) : "")}>
        <label>{this.props.label}
        <GooglePlacesAutocomplete
          onSelect={this.onAddressSelected}
          placeholder={this.props.placeholder}
          autocompletionRequest={{
            componentRestrictions: {
              country: ['in']
            }
          }}
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
  id: PropTypes.string
}

AddressInputBox.defaultProps = {
  label: "Select Location",
  placeholder: "Start Typing",
  onAddressSelected: function(){},
  id: null
}

export default AddressInputBox;
