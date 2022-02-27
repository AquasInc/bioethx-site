import React from "react";
import { Link } from "gatsby";
import { navLinks, navLinkItem, navLinkText } from "./mobile-menu.module.css";

const MobileMenu = ({ onClick, location }) => (
  <ul className={navLinks}>
    <li className={navLinkItem}>
      <Link
        to="/"
        className={navLinkText}
        onClick={(e) =>
          e.target.attributes.href.value === location ? onClick() : null
        }
      >
        Home
      </Link>
    </li>
    <li className={navLinkItem}>
      <Link
        to="/service"
        className={navLinkText}
        onClick={(e) =>
          e.target.attributes.href.value === location ? onClick() : null
        }
      >
        Service
      </Link>
    </li>
    <li className={navLinkItem}>
      <Link
        to="/register"
        className={navLinkText}
        onClick={(e) =>
          e.target.attributes.href.value === location ? onClick() : null
        }
      >
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
