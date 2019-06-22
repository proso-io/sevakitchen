import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../styles/FormElements/InputBox.css";

class InputBox extends Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(inputEvent){
    this.props.onChange(inputEvent.target.value);
  }


  render(){
    return (
      <div className="inputbox">
        <label>{this.props.label}
          <textarea
            value={this.props.value}
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
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
  value: PropTypes.string
}

InputBox.defaultProps = {
  label: "",
  placeholder: "",
  value: ""
}

export default InputBox;
