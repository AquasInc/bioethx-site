import React from "react";
import { Link } from "gatsby";
import MobileMenu from "./mobile-menu";
import branding from "../images/bioethx.png";
import {
  flexContainer,
  navbar,
  logo,
  navLinks,
  navLinkItem,
  navLinkText,
  hamburger,
  bar,
} from "./nav.module.css";

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "mobile-menu": false,
    };
  }

  handleClick = () => {
    this.setState({
      "mobile-menu": !this.state["mobile-menu"],
    });
  };

  render() {
    return (
      <nav className={navbar}>
        <div id={flexContainer}>
          <Link
            to="/"
            className={logo}
            onClick={this.state["mobile-menu"] ? this.handleClick : () => {}}
          >
            <img src={branding} alt="BioEthx logo" />
          </Link>
          <ul className={navLinks}>
            <li className={navLinkItem}>
              <Link to="/" className={navLinkText}>
                Home
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/service" className={navLinkText}>
                Service
              </Link>
            </li>
            <li className={navLinkItem}>
              <Link to="/register" className={navLinkText}>
                Register
              </Link>
            </li>
            <li className={navLinkItem}>
              <a
                href="https://online.bioethx.net/"
                target="_blank"
                rel="noreferrer"
                className={navLinkText}
              >
                Login
              </a>
            </li>
          </ul>
          <button className={hamburger} onClick={this.handleClick}>
            <div className={bar}></div>
            <div className={bar}></div>
            <div className={bar}></div>
          </button>
        </div>
        {this.state["mobile-menu"] ? (
          <MobileMenu onClick={this.handleClick} />
        ) : (
          ""
        )}
      </nav>
    );
  }
}

export default Nav;
