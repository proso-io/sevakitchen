import React from 'react';
import PropTypes from "prop-types";
import "../styles/ContributeForm.scss";
import { initiativeCardsData } from '../constants';
import InputBox from './FormElements/InputBox';
import AddressInputBox from './FormElements/AddressInputBox';
import Select from './FormElements/Select';
import Alert from './Alert';

class ContributeForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      data: this.props.initialData,
      showError: false,
      showSuccess: false,
      submitBtnState: {loading: false}
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
    this.state.data.initiative = this.state.data.initiative || this.initiativeOptions[0].value;
  }

  onValueChange(value, id){
    this.setState((state) => {
      state.data[id] = value;
      return state;
    })
  }

  onSubmit(e){
    e.preventDefault();
    this.setState({submitBtnState: {loading: true}});

    let formData = new FormData(), me = this;
    let url = "/apis/v1/requestContribute";

    formData.append("name", this.state.data.name);
    formData.append("phone", this.state.data.phone);
    formData.append("email", this.state.data.email);
    formData.append("address", this.state.data.address.description);
    formData.append("initiative", this.state.data.initiative);

    fetch(url, {
        method: 'post',
        body: formData,
    })
    .then((res) => res.json())
    .then(function(data){
      me.setState({showSuccess: true});
      me.setState({submitBtnState: {loading: false}});
    }).catch(function(err){
      console.log(err);
      me.setState({showError: true});
      me.setState({submitBtnState: {loading: false}});
    });
    // this.props.onSubmitClicked(this.state.data);
  }

  onCloseAlert = () => {
    this.setState(this.state.showSuccess ? {showSuccess: false} : {showError: false});
  }

  render(){
    return (
      <form onSubmit={this.onSubmit} className="form-container contribute-form">
        <h2 className="title">
          Sign Up for Seva
        </h2>
        <p className="description">
          Fill this form to be able to sign up for Seva. Our team will reach out to you and find the best place for you to contribute.
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
          <input type="submit" className="secondary-button form-element" value={this.state.submitBtnState.loading ? "Submitting.." : "Submit"} />
        </div>
        <Alert type="success" show={this.state.showSuccess} onClose={this.onCloseAlert} />
        <Alert type="error" show={this.state.showError} onClose={this.onCloseAlert} />
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
  })
}

ContributeForm.defaultProps = {
  initialData: {}
}

export default ContributeForm;
