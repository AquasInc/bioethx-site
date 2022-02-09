import React from "react";
import { Link } from "gatsby";
import {
  container,
  mainHeading,
  navbar,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";

const Layout = ({ title, heading, children }) => (
  <div>
    <title>BioethX | {title}</title>
    <nav className={navbar}>
      <div className={container}>
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
    <main className={container}>
      <h1 className={mainHeading}>{heading}</h1>
      <hr />
      {children}
    </main>
  </div>
);

export default Layout;
