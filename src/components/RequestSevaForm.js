import React from 'react';
import PropTypes from "prop-types";
import "../styles/ContributeForm.scss";
import { initiativeCardsData } from '../constants';
import InputBox from './FormElements/InputBox';
import AddressInputBox from './FormElements/AddressInputBox';
import Select from './FormElements/Select';

class RequestSevaForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: this.props.initialData
    }
    this.onValueChange = this.onValueChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.initData();
  }

  initData(){
    this.initiativeOptions = initiativeCardsData.map(ini => {
      return {
        value: ini.id,
        label: ini.title
      }
    })
    this.state.data.initiative = this.state.data.initiative || this.initiativeOptions[0];
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
    this.state.data.initiative = this.state.data.initiative.value;
    // this.props.onSubmitClicked(this.state.data);
  }

  render(){
    return (
      <form onSubmit={this.onSubmit} className="form-container contribute-form">
        <h2 className="title">
          Request Seva
        </h2>
        <p className="description">
          If you are an NGO, fill out this form to request Seva. Our team will reach out to the contact details entered here to discuess your requirement.
        </p>
        <div className="form-inputs">
          <InputBox
            id="name"
            onChange={this.onValueChange}
            label="Your Name"
            value={this.state.data.name}
            inputProps={{
              placeholder: "Eg. John Doe",
              required: true
            }}
            />
          <InputBox
            label="Your Email Address"
            id="email"
            onChange={this.onValueChange}
            value={this.state.data.email}
            inputProps={{
              placeholder: "Eg. hello@world.com",
              type: "email",
              required: true
            }}
            />
          <AddressInputBox
            label="Your location"
            id="address"
            onAddressSelected={this.onValueChange}
            value={this.state.data.address}
            inputProps={{
              placeholder: "Start typing...",
              required: true
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
              pattern: '^\\+?\\d{10}$',
              required: true
            }}
            />
          <input type="submit" className="secondary-button form-element" value="Submit"/>
        </div>
      </form>
    )
  }

}

RequestSevaForm.propTypes = {
  initialData: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    initiative: PropTypes.string
  })
}

RequestSevaForm.defaultProps = {
  initialData: {}
}

export default RequestSevaForm;
