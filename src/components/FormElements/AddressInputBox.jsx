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
    let me = this;
    return (
      <div className={"form-element addressinputbox" + (this.props.id ? (" " + this.props.id) : "")}>
        <label>{this.props.label}
        <GooglePlacesAutocomplete
          onSelect={this.onAddressSelected}
          autocompletionRequest={{
            componentRestrictions: {
              country: ['in']
            }
          }}
          renderInput={(props) => {
            props = Object.assign(props, me.props.inputProps)
            return (
              <div className="custom-wrapper">
                <input
                  {...props}
                />
              </div>
            )
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
