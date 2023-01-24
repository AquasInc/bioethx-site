import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./mobile-menu";
import bioethxLogo from "../public/bioethx.png";
import {
  flexContainer,
  navbar,
  logo,
  navLinks,
  navLinkItem,
  navLinkText,
  hamburger,
  bar,
  imageWrapper,
} from "../styles/nav.module.css";

const Nav = () => {
  const [mobile, setMobile] = useState(false);

  return (
    <nav className={navbar}>
      <div id={flexContainer}>
        <Link
          href="/"
          onClick={() => (mobile ? setMobile(!mobile) : null)}
          className={imageWrapper}
        >
          <Image
            src={bioethxLogo}
            width={80}
            alt="BioEthx logo"
            className={logo}
          />
        </Link>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link href="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link href="/service" className={navLinkText}>
              Service
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link href="/benefits" className={navLinkText}>
              Benefits
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link href="/register" className={navLinkText}>
              Register
            </Link>
          </li>
          <li className={navLinkItem}>
            <a
              href="https://bioethxcafe.com/"
              target="_blank"
              className={navLinkText}
            >
              bioethxcafe
            </a>
          </li>
          <li className={navLinkItem}>
            <a
              href="https://online.bioethx.net/"
              target="_blank"
              className={navLinkText}
            >
              Login
            </a>
          </li>
        </ul>
        <button className={hamburger} onClick={() => setMobile(!mobile)}>
          <div className={bar}></div>
          <div className={bar}></div>
          <div className={bar}></div>
        </button>
      </div>
      {mobile ? <MobileMenu mobile={mobile} setMobile={setMobile} /> : null}
    </nav>
  );
};

export default Nav;
