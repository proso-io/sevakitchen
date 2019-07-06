import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../styles/FormElements/InputBox.css";

class InputBox extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(inputEvent){
    this.props.onChange(inputEvent.target.value, this.props.id);
  }


  render(){
    return (
      <div className={"form-element inputbox" + (this.props.id ? (" " + this.props.id) : "")}>
        <label>{this.props.label}
          <input
            value={this.props.value}
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
            type={this.props.inputType}
            />
        </label>
      </div>
    );
  }
}

InputBox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  id: PropTypes.string,
  inputType: PropTypes.string
}

InputBox.defaultProps = {
  label: "",
  placeholder: "",
  value: "",
  id: null,
  inputType: "text"
}

export default InputBox;
