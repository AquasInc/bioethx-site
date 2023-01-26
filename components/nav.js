import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuItem from "./menu-item";
import bioethxLogo from "../public/bioethx.png";
import styles from "../styles/nav.module.css";

const Nav = () => {
  const [mobile, setMobile] = useState(false);
  const hideMenu = () => (mobile ? setMobile(!mobile) : null);

  return (
    <nav className={styles.navbar}>
      <div className={styles.flexContainer}>
        <Link href="/" onClick={hideMenu} className={styles.imageWrapper}>
          <Image
            src={bioethxLogo}
            width={80}
            alt="BioEthx logo"
            className={styles.logo}
          />
        </Link>
        <ul className={mobile ? styles.mobileMenu : styles.navLinks}>
          <MenuItem href={"/"} text={"Home"} handleClick={hideMenu} />
          <MenuItem href={"/service"} text={"Service"} handleClick={hideMenu} />
          <MenuItem
            href={"/benefits"}
            text={"Benefits"}
            handleClick={hideMenu}
          />
          <MenuItem
            href={"#footer"}
            text={"Resources"}
            handleClick={hideMenu}
          />
          <MenuItem
            href={"/register"}
            text={"Register"}
            handleClick={hideMenu}
          />
          <MenuItem
            href={"https://online.bioethx.net/"}
            text={"Login"}
            handleClick={hideMenu}
          />
        </ul>
        <button className={styles.hamburger} onClick={() => setMobile(!mobile)}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
