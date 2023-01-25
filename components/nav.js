import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./mobile-menu";
import MenuItem from "./menu-item";
import bioethxLogo from "../public/bioethx.png";
import {
  flexContainer,
  navbar,
  logo,
  navLinks,
  hamburger,
  bar,
  imageWrapper,
} from "../styles/nav.module.css";

const Nav = () => {
  const [mobile, setMobile] = useState(false);
  const hideMenu = () => (mobile ? setMobile(!mobile) : null);

  return (
    <nav className={navbar}>
      <div id={flexContainer}>
        <Link href="/" onClick={hideMenu} className={imageWrapper}>
          <Image
            src={bioethxLogo}
            width={80}
            alt="BioEthx logo"
            className={logo}
          />
        </Link>
        <ul className={navLinks}>
          <MenuItem href={"/"} text={"Home"} />
          <MenuItem href={"/service"} text={"Service"} />
          <MenuItem href={"/benefits"} text={"Benefits"} />
          <MenuItem href={"#footer"} text={"Resources"} />
          <MenuItem href={"/register"} text={"Register"} />
          <MenuItem href={"https://online.bioethx.net/"} text={"Login"} />
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
