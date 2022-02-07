import React from "react";
import { Link } from "gatsby";
import {
  container,
  mainHeading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";

const Layout = ({ title, heading, children }) => (
  <div className={container}>
    <title>BioethX | {title}</title>
    <nav>
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
