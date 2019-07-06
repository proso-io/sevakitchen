import React from 'react';
import PropTypes from "prop-types";
import "../styles/ContributeForm.scss";
import { initiativeCardsData } from '../constants';
import InputBox from './FormElements/InputBox';
import AddressInputBox from './FormElements/AddressInputBox';

class ContributeForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: this.props.initialData
    }
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onValueChange(value,id){
    this.setState((state) => {
      state.data[id] = value;
      return state;
    })
  }

  onSubmit(e){
    e.preventDefault();
    this.state.data.address = this.state.data.address.description;
    this.props.onSubmitClicked(this.state.data);
  }

  render(){
    return (
      <form onSubmit={this.onSubmit} className="form-container contribute-form">
        <h2 className="title">
          Contribute
        </h2>
        <p className="description">
          Fill this form to be able to contribute to Seva Kitchen. An email will be sent to provided email address.
        </p>
        <div className="form-inputs">
          <InputBox
            id="name"
            onChange={this.onValueChange}
            label="Your Name"
            value={this.state.data.name}
            inputProps={{
              placeholder: "Eg. John Doe"
            }}
            />
          <InputBox
            label="Your Email Address"
            id="email"
            onChange={this.onValueChange}
            value={this.state.data.email}
            inputProps={{
              placeholder: "Eg. hello@world.com",
              type: "email"
            }}
            />
          <AddressInputBox
            label="Your location (we'll use this to connect you to chapters in your area)"
            id="address"
            onAddressSelected={this.onValueChange}
            value={this.state.data.address}
            inputProps={{
              placeholder: "Start typing..."
            }}
            />
          <InputBox
            label="Phone Number (Enter 10 digit phone number)"
            id="phone"
            onChange={this.onValueChange}
            value={this.state.data.phone}
            inputType="tel"
            inputProps={{
              placeholder: "Eg. 9876543210",
              type: "tel",
              pattern: '^\\+?\\d{10}$'
            }}
            />
          <InputBox
            label="Your Name"
            placeholder="Eg. John Doe"
            id="name"
            onChange={this.onValueChange}
            value={this.state.data.name}
            />
          <input type="submit" className="primary-button form-element" value="Submit"/>
        </div>
      </form>
    )
  }

}

ContributeForm.propTypes = {
  initialData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    initiative: PropTypes.string
  }),
  onSubmitClicked: PropTypes.func
}

ContributeForm.defaultProps = {
  initialData: {},
  onSubmitClicked: function(data){}
}

export default ContributeForm;
