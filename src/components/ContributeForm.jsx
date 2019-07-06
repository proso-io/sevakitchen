import React from 'react';
import PropTypes from "prop-types";
import "../styles/ContributeForm.scss";
import { initiativeCardsData } from '../constants';
import InputBox from './FormElements/InputBox';
import AddressInputBox from './FormElements/AddressInputBox';
import Select from './FormElements/Select';

class ContributeForm extends React.Component {

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
            label="Your location (we'll use this to connect you to chapters in your area)"
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
          <Select
            label="Select an initiative to contribute to"
            id="initiative"
            onChange={this.onValueChange}
            value={this.state.data.name}
            options={this.initiativeOptions}
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
