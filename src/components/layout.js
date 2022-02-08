import React from "react";
import { Link } from "gatsby";
import {
  container,
  mainHeading,
  navLinks,
  navLinkText,
} from "./layout.module.css";

const Layout = ({ title, heading, children }) => (
  <div className={container}>
    <title>BioethX | {title}</title>
    <nav>
      <ul className={navLinks}>
        <li>
          <Link to="/" className={navLinkText}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={navLinkText}>
            About
          </Link>
        </li>
        <li>
          <Link to="/service" className={navLinkText}>
            Service
          </Link>
        </li>
        <li>
          <Link to="/contact" className={navLinkText}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
    <main>
      <h1 className={mainHeading}>{heading}</h1>
      <hr />
      {children}
    </main>
  </div>
);

export default Layout;
