import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../styles/FormElements/Select.scss";

class Select extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(inputEvent){
    this.props.onChange(inputEvent.target.value, this.props.id);
  }

  render(){
    return (
      <div className={"form-element select" + (this.props.id ? (" " + this.props.id) : "")}  >
        <label>{this.props.label}
          <select onChange={this.handleChange}>
            {
              this.props.options.map((option) => (
                <option key={option.value} value={option.value} >{option.label}</option>
              ))
            }
          </select>
        </label>
      </div>
    );
  }
}

Select.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  id: PropTypes.string,
  selectProps: PropTypes.object,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  }))
}

Select.defaultProps = {
  label: "",
  value: "",
  id: null,
  selectProps: {},
  onChange: function(data,id){},
  options: []
}

export default Select;
