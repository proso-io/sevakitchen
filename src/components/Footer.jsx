import React, { Component } from "react";
import "../styles/footer.css";
import arr from "../data/footer"; /*Importing the footer data file */

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        {/**main wrapper for the footer */}
        <div className="footer-logo">
          {/**main info and links from footer data  */}
          {arr[0].title}
          <div className="footer-children">
            {arr[0].children.map(children => {
              return (
                <a className="links" href={children.link}>
                  <div>{children.label}</div>
                </a>
              );
            })}
          </div>
        </div>
        <div className="footer-info">
          {/**sevakitchen stats from footer data */}
          {arr[1].title}
          <br />
          <div className="footer-children">
            {arr[1].children.map(children => {
              return <div>{children.label}</div>;
            })}
          </div>
        </div>
        <div className="footer-social">
          {/**Social Media logins from footer data */}
          {arr[2].title}
          <div className=" footer-children">
            {arr[2].children.map(children => {
              return (
                <a className="links" href={children.link}>
                  <i className={children.icon} />
                  &nbsp;
                  {children.label}
                </a>
              );
            })}
          </div>
        </div>
        <div className="footer-address">
          {/**Sevakitchen contact addresss from footer data */}
          {arr[3].title}
          <div className="footer-children">
            {arr[3].children.map(children => {
              return (
                <a className="links" href={children.link}>
                  <div>{children.label}</div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
