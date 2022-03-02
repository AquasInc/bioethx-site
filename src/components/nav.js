import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import MobileMenu from "./mobile-menu";
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
            onClick={
              this.state["mobile-menu"] && this.props.location === "/"
                ? this.handleClick
                : null
            }
          >
            <StaticImage
              src="../images/bioethx.png"
              alt="BioEthx logo"
              className={logo}
            />
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
          <MobileMenu
            location={this.props.location}
            onClick={this.handleClick}
          />
        ) : null}
      </nav>
    );
  }
}

export default Nav;
