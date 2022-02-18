import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import {
  flexContainer,
  navbar,
  logo,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./nav.module.css";

const Nav = () => (
  <nav className={navbar}>
    <div id={flexContainer}>
      <StaticImage
        className={logo}
        src="../images/bioethx.png"
        alt="BioEthx logo"
      />
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
    </div>
  </nav>
);

export default Nav;
