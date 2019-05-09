import React, { Component } from "react";
import "../styles/footer.css";
/** importing the react component code from the React module  */


class Footer extends Component {
  state = {}; /**No props are required..state object can be removed */
  render() {
    return (
      <div className="footer">{/** main wrapper div here i.e footer (parent component)*/}
        <div className="footer-logo">SEVAKITCHEN</div>{/** sevakitchen text */}
        <div className="footer-info">
          Coordinator's login
          <br />
          Paste Our Posters
        </div>
        <div className="footer-social">{/** sevakitchen social links */}
          <a className="social-links" href="#">
            <i className="fa fa-whatsapp" />
            &nbsp;Whatsapp{/** &nbsp; is used to give space */}
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
        <div className="footer-address">{/**sevakitchen addresss part */}
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
/**Exporting the Footer class */
