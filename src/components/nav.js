import React from "react";
import { Link } from "gatsby";
import {
  flexContainer,
  navbar,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./nav.module.css";

const Nav = () => (
  <nav className={navbar}>
    <div id={flexContainer}>
      <ul className={navLinks}>
        <li className={navLinkItem}>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/about" className={navLinkText}>
            About
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/service" className={navLinkText}>
            Service
          </Link>
        </li>
        <li className={navLinkItem}>
          <Link to="/contact" className={navLinkText}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Nav;
