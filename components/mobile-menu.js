import Link from "next/link";
import MenuItem from "./menu-item";
import styles from "../styles/mobile-menu.module.css";

const MobileMenu = ({ mobile, setMobile }) => (
  <ul className={styles.navLinks}>
    <MenuItem href={"/"} text={"Home"} handleClick={() => setMobile(!mobile)} />
    <MenuItem
      href={"/service"}
      text={"Service"}
      handleClick={() => setMobile(!mobile)}
    />
    <MenuItem
      href={"/benefits"}
      text={"Benefits"}
      handleClick={() => setMobile(!mobile)}
    />
    <MenuItem
      href={"#footer"}
      text={"Resources"}
      handleClick={() => setMobile(!mobile)}
    />
    <MenuItem
      href={"/register"}
      text={"Register"}
      handleClick={() => setMobile(!mobile)}
    />
    <MenuItem
      href={"https://online.bioethx.net/"}
      text={"Login"}
      handleClick={() => setMobile(!mobile)}
    />
  </ul>
);

export default MobileMenu;
