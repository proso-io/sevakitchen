import React, { Component } from "react";
import PropTypes from "prop-types";
import "../styles/Modal.scss";

class Modal extends Component {
  render(){
    return (
      <div>
        <div className={`modal-backdrop ${this.props.open ? "visible" : "hidden"}`}></div>
        <div className={`modal-container ${this.props.open ? "visible" : "hidden"}`}>
          <div className="modal-close-btn"><a href="#" onClick={this.props.onClose}>x</a></div>
          <div className="modal-title"><h2>{this.props.title}</h2></div>
          <div className="modal-body">{this.props.children}</div>
          {
            this.props.footerChildren && <div className="modal-footer"></div>
          }
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  footerChildren: PropTypes.element,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Modal;
