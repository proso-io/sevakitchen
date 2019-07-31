import React, { Component } from "react";
import "../styles/footer.css";
import footer_data from "../data/footer"; /*Importing the footer data file */

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {/**main wrapper for the footer */}
        {footer_data.map(title => {
          return (
            <div key={title.title} className="footer-column">
              <div className="footer-column-title">{title.title}</div>
              {title.children.map(children => {
                return (
                  children.link ?
                  <a target="_blank" key={children.label} className="links" href={children.link}>
                    <div>{children.label}</div>
                  </a>
                  : <div key={children.label} className="links">{children.label}</div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

export default Footer;
