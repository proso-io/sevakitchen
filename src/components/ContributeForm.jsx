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

  onSubmit(){
    this.props.onSubmitClicked(this.state.data);
  }

  render(){
    return (
      <form className="form-container contribute-form">
        <h2 className="title">
          Contribute
        </h2>
        <p className="description">
          Fill this form to be able to contribute to Seva Kitchen. An email will be sent to provided email address
        </p>
        <div className="form-inputs">
          <InputBox
            label="Your Name"
            placeholder="Eg. John Doe"
            id="name"
            onChange={this.onValueChange}
            value={this.state.data.name}
            />
          <InputBox
            label="Your Email Address"
            placeholder="Eg. hello@world.com"
            id="email"
            onChange={this.onValueChange}
            value={this.state.data.email}
            type="email"
            />
          <AddressInputBox
            label="Your location (we'll use this to connect you to chapters in your area)"
            id="address"
            onChange={this.onValueChange}
            value={this.state.data.address}
            />
          <InputBox
            label="Phone Number"
            placeholder="Eg. 9876543210"
            id="phone"
            onChange={this.onValueChange}
            value={this.state.data.phone}
            type="number"
            />
          <InputBox
            label="Your Name"
            placeholder="Eg. John Doe"
            id="name"
            onChange={this.onValueChange}
            value={this.state.data.name}
            />
          <button className="primaryBtn form-element" onClick={this.onSubmit}>Submit</button>
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
