import Link from "next/link";
import {
  navLinks,
  navLinkItem,
  navLinkText,
} from "../styles/mobile-menu.module.css";

const MobileMenu = ({ mobile, setMobile }) => (
  <ul className={navLinks}>
    <li className={navLinkItem}>
      <Link href="/" className={navLinkText} onClick={() => setMobile(!mobile)}>
        Home
      </Link>
    </li>
    <li className={navLinkItem}>
      <Link
        href="/service"
        className={navLinkText}
        onClick={() => setMobile(!mobile)}
      >
        Service
      </Link>
    </li>
    <li className={navLinkItem}>
      <Link
        href="/register"
        className={navLinkText}
        onClick={() => setMobile(!mobile)}
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
        onClick={() => setMobile(!mobile)}
      >
        Login
      </a>
    </li>
  </ul>
);

export default MobileMenu;
