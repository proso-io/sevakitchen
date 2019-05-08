import React, { Component } from "react";
import "../styles/footer.css";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="footer-logo">SEVAKITCHEN</div>
        <div className="footer-info">
          Coordinator's login
          <br />
          Paste Our Posters
        </div>
        <div className="footer-social">
          <a className="social-links" href="#">
            <i className="fa fa-whatsapp" />
            &nbsp;Whatsapp
          </a>
          <br />
          <a href="#" className="social-links">
            <i className="fa fa-facebook" />
            &nbsp;Facebook
          </a>
          <br />
          <a href="#" className="social-links">
            <i className="fa fa-instagram" />
            &nbsp;Instagram
          </a>
        </div>
        <div className="footer-address">
          <p>
            Mr.Khushroo Poacha
            <br />
            Seva Kitchen, 127 New Colony,
            <br /> Nagpur- 440 001
            <br />
            Maharashtra, India.
            <br />
            or
            <br />
            <a href="info@sevakitchen.org">info@sevakitchen.org</a>
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
