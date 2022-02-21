import React from "react";
import { Link } from "gatsby";
import { navLinks, navLinkItem, navLinkText } from "./mobile-menu.module.css";

const MobileMenu = ({ onClick }) => (
  <ul className={navLinks}>
    <li className={navLinkItem}>
      <Link to="/" className={navLinkText} onClick={onClick}>
        Home
      </Link>
    </li>
    <li className={navLinkItem}>
      <Link to="/service" className={navLinkText} onClick={onClick}>
        Service
      </Link>
    </li>
    <li className={navLinkItem}>
      <Link to="/register" className={navLinkText} onClick={onClick}>
        Register
      </Link>
    </li>
    <li className={navLinkItem}>
      <a
        href="https://online.bioethx.net/"
        target="_blank"
        rel="noreferrer"
        className={navLinkText}
        onClick={onClick}
      >
        Login
      </a>
    </li>
  </ul>
);

export default MobileMenu;
