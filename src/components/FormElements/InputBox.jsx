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
            id={this.props.id}
            value={this.props.value}
            onChange={this.handleChange}
            {...this.props.inputProps}
            />
        </label>
      </div>
    );
  }
}

InputBox.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  id: PropTypes.string,
  inputProps: PropTypes.object
}

InputBox.defaultProps = {
  label: "",
  value: "",
  id: null,
  inputProps: {},
  onChange: function(data,id){}
}

export default InputBox;
