import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/InitiativeGroup.scss";
import InitiativeCard from './InitiativeCard';

class InitiativeGroup extends Component {
  render(){
    return (
      <div className="initiative-group">
        {
          this.props.data.map((item) => (
            <InitiativeCard key={item.title} {...item} />
          ))
        }
      </div>
    )
  }
}

InitiativeGroup.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string
    })
  )
}

InitiativeGroup.defaultProps = {
  data: []
}

export default InitiativeGroup;
